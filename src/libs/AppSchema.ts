import { column, Schema, Table } from '@powersync/web';

const board = new Table(
    {
        // id column (text) is automatically included
        original_id: column.text,
        created_at: column.text,
        created_by: column.text,
        name: column.text,
        description: column.text,
        private: column.integer
    },
    { indexes: {} }
);

export const AppSchema = new Schema({
    board
});

export type Database = (typeof AppSchema)['types'];
