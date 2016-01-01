exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('posts', function(table){
            table.charset('utf8'); 
            table.collate('utf8_unicode_ci'); 

            table.increments(); 
            table.integer('post_id').unsigned(); 
            table.integer('group_id').unsigned(); 
            table.integer('author_id').unsigned(); 
            table.text('text');  
            table.integer('date').unsigned(); 
            table.timestamp("created_at").defaultTo(knex.raw('now()')); 
            table.timestamp("updated_at"); 
        }), 
        
    ]);
};

exports.down = function(knex, Promise) {
  knex.schema
    .dropTableIfExists('posts'); 
    
};