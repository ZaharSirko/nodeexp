import "reflect-metadata";
import {AppDataSource} from "./data-source";
import app from "./app";

const PORT = 3000;

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error during Data Source initialization:', err);
});