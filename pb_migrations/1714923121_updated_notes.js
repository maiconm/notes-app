/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xfxl6zjo8wuex5k")

  // remove
  collection.schema.removeField("2nsic4ff")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ku8o5vg",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqhsafga",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xfxl6zjo8wuex5k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nsic4ff",
    "name": "field",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("8ku8o5vg")

  // remove
  collection.schema.removeField("yqhsafga")

  return dao.saveCollection(collection)
})
