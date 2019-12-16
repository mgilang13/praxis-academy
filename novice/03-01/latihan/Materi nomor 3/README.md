### Proses 1

```javascript
try {
  alert("try");
  if (confirm("Make an error?")) BAD_CODE();
} catch (e) {
  alert("catch");
} finally {
  alert("cleanup the working space");
}
```

##### Hasil: Ketika menggunakan finally urutan alert yang keluar try -> confirmDialog() -> catch -> cleanup the ...

### Proses 2

```javascript
try {
  alert("try");
  if (confirm("Make an error?")) BAD_CODE();
} catch (e) {
  alert("catch");
}
alert("cleanup the working space");
```

##### Hasil: Ketika menghilangkan finally urutan alert yang keluar try -> confirmDialog() -> catch -> cleanup the ... (SAMA)

## Kesimpulan:

Tidak masalah apakah mau menaruh finally setelah fungsi try .. cat..., karena baris code yang terakhir akan dieksekusi setelah program menjalankan fungsi try ... catch ...
