import mongoose from 'mongoose';

const URI =
  'mongodb+srv://node_server:BiePAENn1l3OgKoD@virtukala.k8lka.mongodb.net/mini-shop?retryWrites=true&w=majority';

// ! for production set the first two options to false !
mongoose.set({ debug: true, autoIndex: true });

export const mongooseConnection = mongoose.connect(URI);
