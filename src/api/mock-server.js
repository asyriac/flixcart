import { createServer, Model, RestSerializer } from "miragejs";
import { products } from './db'



export default function setupMockServer() {
    createServer({
        serializers: {
            application: RestSerializer
        },

        models: {
            product: Model
        },

        routes() {
            this.namespace = "api";
            this.timing = 3000;
            this.resource("products");
        },

        seeds(server) {
            products.forEach((product) => {
                server.create("product", product);
            });
        }
    });
}
