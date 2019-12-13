exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "beets" },
        { id: 2, ingredient_name: "carrots" },
        { id: 3, ingredient_name: "water" },
        { id: 4, ingredient_name: "Kool-Aid powder" },
        { id: 5, ingredient_name: "sugar" },
        { id: 6, ingredient_name: "broth" }
      ]);
    });
};
