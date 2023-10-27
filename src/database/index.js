import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/portifolio-pessoal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

export default mongoose;