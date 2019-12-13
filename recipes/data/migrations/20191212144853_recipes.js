exports.up = function(knex) {
  return (
    knex.schema
      // 01-Recipes Table
      .createTable("recipes", tbl => {
        //id
        tbl.increments();
        //recipe_name
        tbl.string("recipe_name", 255).notNullable();
      })
      // 02-Ingredients Table
      .createTable("ingredients", tbl => {
        //id
        tbl.increments();
        //ingredient_name
        tbl
          .string("ingredient_name", 255)
          .notNullable()
          .unique();
      })
      // 03-Instructions Table
      .createTable("instructions", tbl => {
        //id
        tbl.increments();
        //step_number
        tbl
          .integer("step_number")
          .notNullable()
          .unsigned();
        //instruction
        tbl.string("instruction").notNullable();
        //recipe_id
        tbl
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      //04-recipe_ingredients
      .createTable("recipe_ingredients", tbl => {
        //recipe_id
        tbl
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        //ingredient_id
        tbl
          .integer("ingredient_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("ingredients")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.float("quantity").notNullable();
        tbl.string("unit");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions");
};
