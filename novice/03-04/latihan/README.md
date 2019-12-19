## DOM Advanced

## 1. addEventListener

<button onclick="foo">Alert</button><br><br>

`<button onclick="foo">Alert</button>`

---

```javascript
var btn = document.querySelector("button");
btn.addEventListener("click", foo);

function foo() {
  alert("hello");
}
```

**Penjelasan :** addEventListener digunakan untuk menambahkan event tertentu, pada contoh di atas, `<button>` diberi event `click`, jadi ketika `<buton>` diklik maka akan diarahkan ke function `foo` yang berisikan perintah untuk memanggil `alert`, maka ketika `<button>` diklik maka akan menampilkan `alert`

## 2. appendChild

<div></div>

`<div></div>`

---

```javascript
var div = document.querySelector("div");
var strong = document.createElement("strong");
strong.textContent = "Hello";
div.appendChild(strong);
```

**Penjelasan :** Event ini digunakan untuk menambahkan `child` pada `parent` _tag_, di mana pada kdoe di atas, `parent` _tag_-nya adalah `<div>`. Sehingga, `appendChild()` akan menambahkan `child` berupa `text` bertuliskan `"Hello"` yang akan disisipkan di antara _tag_ `div`

## 3. cloneNode

<div>
  <strong>hello</strong>
</div>

```html
<div>
  <strong>hello</strong>
</div>
```

---

```javascript
var strong = document.querySelector("strong");
var copy = strong.cloneNode(true);
var div = document.querySelector("div");
div.appendChild(copy);
```

**Penjelasan :** DOM `cloneNode()` digunakan untuk me-_copy_ `node`, pada javascript `node` disebut dengan antarmuka HTML yang dapat diatur oleh `object DOM API`. Pada kode di atas, `cloneNode` me-_copy_ `element node strong` beserta isinya.

## 4. createDocumentFragment

<table></table>

`<table></table>`

---

```javascript
var table = document.querySelector("table");
var df = document.createDocumentFragment();

for (var i = 0; i < 5; i++) {
  var td = document.createElement("td");
  var tr = document.createElement("tr");
  td.textContent = i;
  tr.appendChild(td);
  df.appendChild(tr);
}

table.appendChild(df);
```

**Penjelasan :** `createDocumentFragment` digunakan untuk menambahkan `element` dalam jumlah yang banyak. Biasanya digunakan untuk membuat `row` pada _tag_ `table` seperti pada contoh di atas. Pada kode di atas, `createDocumentFragment` membentuk `element <tr> dan <td>` yang biasanya diguanakan untuk membentuk `table`, hampir sama sepert `createElement`, namun dapat diguankan untuk me-_insert_ banyak element dalam satu `DOM Object` yaitu `createDocuementFragment`

## 5. createElement

---

`var pEle = document.createElement("p");`

**Penjelasan :** DOM ini digunakan untuk membuat `element HTML` seperti `<div>, <p>, <a>`, dan sebagainya.

## 6. getAttribute

<div contenteditable="true">hello</div>

`<div contenteditable="true">hello</div>`

---

```javascript
var div = document.querySelector("div");
alert(div.getAttribute("contenteditable"));
```

**Penjelasan :** DOM ini digunakan untuk mengambil nilai dari `attribute` yang di panggil oleh DOM ini. Pada kode di atas, nilai `attribute` dari `contenteditable` diambil oleh DOM ini, dan ditampilkan nilai-nya dalam bentuk `alert`

## 7. getComputedStyle

<div></div>

`<div></div>`

---

```javascript
var style = getComputedStyle(document.querySelector("div"));
alert(style.width);
```

**Penjelasan :** DOM ini berfungsi untuk mengambil nilai CSS property dari _tag HTML_ yang ditunjuk oleh DOM ini. Pada kasus di atas, DOM ini menampilkan CSS property `width` dari _tag_ `<div>`. Perlu diketahui pula, bahwasanya nilai yang diambil oleh DOM ini bersifat **_read-only_** saja, sehingga DOM ini tidak dapat mengubah nilai tersebut.

## 8. insertBefore

<div>
  <strong>hello</strong>
</div>

```html
<div>
  <strong>hello</strong>
</div>
```

---

```javascript
var em = document.createElement("em");
var strong = document.querySelector("strong");
var div = document.querySelector("div");
em.textContent = "hi";
div.insertBefore(em, strong);
```

**Penjelasan :** DOM ini berfungsi untuk menambahkan `child` baru sebelum `child` yang sudah ada dieksekusi oleh browser. Untuk itu di dalam DOM ini ada 2 parameter, parameter yang pertama merupakan parameter yang akan di masukkan, sementara paramaeter yang kedua merupakan parameter lama. Pada kode di atas, parameter pertama ditunjukkan dengan _tag_ `em`, sementara parameter yang kedua ditandai dengan _tag_ `strong`

## 9. querySelector

<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>

```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>
```

---

```javascript
var firstDiv = document.querySelector("div");
firstDiv.style.color = "red";
```

**Penjelasan :** DOM ini digunakan untuk memilih element tertentu. Pada kode di atas, `querySelector` digunakan untuk memilih _tag_ `div` yang pertama kali dieksekusi, sehingga style `div` menjadi warna merah. Sementara itu `div` yang kedua tidak akan dieksekusi karena kita menggunakan DOM `querySelector`. Adapun untuk mengubah semua _tag_ `div`, kita menggunakan yang namanya `querySelectorAll` yang akan dibahas di bawah ini.

## 10. querySelectorAll

<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>

```html
<p>paragraph one</p>
<p>paragraph two</p>
<div>div one</div>
<p>paragraph three</p>
<div>div two</div>
```

---

```javascript
var paragraphs = document.querySelectorAll("p");
for (var p of paragraphs) p.style.color = "blue";
```

**Penjelasan :** DOM ini hampir sama seperti pada DOM `querySelector` yang sudah kita bahas sebelumnya. Pada kode di atas, `querySelectorAll` akan mengubah _tag_ `div` _style_-nya menjadi berwarna merah.

## 11. removeAttribute

<div contenteditable="true">hello</div>

`<div contenteditable="true">hello</div>`

---

```javascript
var div = document.querySelector("div");
div.removeAttribute("contenteditable");
```

**Penjelasan :** Pada kode diatas `removeAttribute` menghapus `attribute contenteditable` dari element `div`

## 12. removeChild

<div><p>Testing</p></div>

`<div><p>Testing</p></div>`

---

```javascript
var div = querySelector("div");
div.removeChild(div);
```

**Penjelasan :** DOM ini digunakan untuk menghapus `child` dari element yang ditunjuk. Pada kasus di atas, `removeChild` menghapus semua `child` yang ada di elemen `div` yaitu `p` dan `textNode Testing`.

## 13. removeEventListener

<button onclick="foo">Alert</button><br>

`<button onclick="foo">Alert</button>`

---

```javascript
var btn = document.querySelector("button");
btn.addEventListener("click", foo);

function foo() {
  alert("hello");
}
btn.removeEventListener("click", foo);
```

**Penjelasan :** Digunakan untuk menghapus `Event click` yang ada pada elemen yang dipilih. Pada kasus ini elemen yang dipilih adalah `button`, sehingga ketika `button` diklik, maka tidak akan memunculkan `alert` karena `Event`-nya sudah dihapus oleh DOM `removeEventListener`.

14. replaceChild

<div>
  <strong>hello</strong>
</div>

```html
<div>
  <strong>hello</strong>
</div>
```

---

```javascript
var em = document.createElement("em");
var strong = document.querySelector("strong");
var div = document.querySelector("div");
em.textContent = "hi";
div.replaceChild(em, strong);
```

**Penjelasan :** DOM ini akan menggantikan `child textNode` dan `em` pada _tag_ `strong`, sehingga `strong` akan berisikan `textNode` dan _tag_ yang baru.

## 15. setAttribute

<div>hello</div>

`<div>hello</div>`

---

```javascript
var div = document.querySelector("div");
div.setAttribute("contenteditable", "");
```

**Penjelasan :** DOM ini akan memberikan `attribute` baru pada elemen yang ditunjuk oleh DOM ini. Pada kode di atas, elemen `div` diberikan `attribute` baru berupa `contenteditable`
