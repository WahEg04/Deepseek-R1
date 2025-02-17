import dexie, { Table } from 'dexie';

//
interface DEX_Thread {
    id: string; // UUID
    tittle: string;
    created_at : Date;
    updated_at : Date;
}

class ChatDB extends Dexie {
    threads : table<DEX_Thread>;
    constructor (
        super("chatdb")
        this.version(1).stores({
          threads : "id, tittle , crated_at , updated_at"      
        })

        this.threads.hook("creating" , (_,obj) => {
            obj.created_at = new Date();
            obj.updated_at = new Date();
        })
    )
}

export const db = new ChatDB();