'use strict';

let xlsx = require('xlsx');
let _ = require('lodash');

let excelsheet = xlsx.readFile('./source.ods', {
  type: 'file'
});

_.each(excelsheet.Sheets, (data) => {
  _.each(xlsx.utils.sheet_to_json(data), (json) => {
    let ddl = `update tbl_bible_tamil set verse='${json.verse}' where book_id=${json.book_id} and chapter_id=${json.chapter_id} and verse_id= ${json.verse_id};`;
    console.log(ddl);
  });
});



