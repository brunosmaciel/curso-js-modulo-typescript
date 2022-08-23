// Singelton  - GOF
export class Database {
  private static database: Database;
  private constructor(private host: string, private user: string, private password: string) {}

  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia ja criada');
      return Database.database;
    }
    console.log('criando nova instancia');

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', 'bsm');
db2.connect();
