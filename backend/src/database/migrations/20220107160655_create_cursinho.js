
exports.up = function(knex) {
    return knex.schema.createTable('cursinhos', function(table){
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.string('senha').notNullable();
        table.decimal('preco');
        table.decimal('mediag');
        table.decimal('mediam');
        table.decimal('mediar');
        table.decimal('medial');
        table.decimal('mediach');
        table.decimal('mediacn');
        table.decimal('mediaa');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cursinhos');
};
