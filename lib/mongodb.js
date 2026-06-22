import zlib from 'zlib';

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable.');
}

let clientPromise;

async function getClientPromise() {
  if (!clientPromise) {
    if (globalThis._mongoClientPromise) {
      return globalThis._mongoClientPromise;
    }
    
    const { MongoClient } = await import('mongodb');
    const client = new MongoClient(uri);
    globalThis._mongoClientPromise = client.connect().then(() => client);
    clientPromise = globalThis._mongoClientPromise;
  }
  return clientPromise;
}

export async function getDatabase() {
  const client = await getClientPromise();
  return client.db();
}

export function gzipBuffer(buffer) {
  return zlib.gzipSync(buffer, { level: 9 });
}

export function gunzipBuffer(buffer) {
  return zlib.gunzipSync(buffer);
}

export async function savePdf({ title, filename, contentType, buffer }) {
  const db = await getDatabase();
  const collection = db.collection('pdfs');
  const compressedData = gzipBuffer(buffer);

  const newPdf = {
    title,
    filename,
    contentType,
    uploadedAt: new Date(),
    compressedData,
    originalSize: buffer.length,
    compressedSize: compressedData.length,
  };

  const result = await collection.insertOne(newPdf);
  return { _id: result.insertedId, ...newPdf };
}

export async function getAllPdfs() {
  const db = await getDatabase();
  const collection = db.collection('pdfs');
  return collection
    .find({}, {
      projection: {
        compressedData: 0,
      },
    })
    .sort({ uploadedAt: -1 })
    .toArray();
}

export async function getPdfById(id) {
  const { ObjectId } = await import('mongodb');
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await getDatabase();
  const collection = db.collection('pdfs');
  return collection.findOne({ _id: new ObjectId(id) });
}

export async function deletePdfById(id) {
  const { ObjectId } = await import('mongodb');
  if (!ObjectId.isValid(id)) {
    return false;
  }
  const db = await getDatabase();
  const collection = db.collection('pdfs');
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
