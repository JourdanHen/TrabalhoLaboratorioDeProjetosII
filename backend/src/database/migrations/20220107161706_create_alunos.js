
exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
        table.increments();
        table.string('identificacao').notNullable();
        table.decimal('ano').notNullable();
        table.decimal('notag').notNullable();
        table.decimal('notam').notNullable();
        table.decimal('notar').notNullable();
        table.decimal('notal').notNullable();
        table.decimal('notach').notNullable();
        table.decimal('notacn').notNullable();

        table.string('cursinho_id').notNullable();

        table.foreign('cursinho_id').references('name').inTable('cursinhos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos');
};
