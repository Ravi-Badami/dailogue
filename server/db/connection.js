import mongoose from 'mongoose';
const url = `mongodb+srv://code4662:XYc9qOLAHawk7Oo2@cluster0.kujncfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to DB'))
  .catch((e) => console.log('erro', e));
