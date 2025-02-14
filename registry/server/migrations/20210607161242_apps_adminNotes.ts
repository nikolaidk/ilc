import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('apps', table => {
        table.text('adminNotes').nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('apps', table => {
        table.dropColumn('adminNotes');
    });
}
