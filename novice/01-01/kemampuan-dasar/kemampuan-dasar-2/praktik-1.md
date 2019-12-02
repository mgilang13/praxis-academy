
# Getting Started: Collaborative Development with Git

### Step 1: Creates new project and hosts it on Github
Pertama, kita membuat new project di akun github kita

![gambar1](images/1.png)

Kemudian kita membuat folder baru di local directory kita, dan mulai pushing 1 dokumen README.txt ke folder github yang baru saja dibuat.

![gambar2.1](images/2.1.png)
![gambar2.2](images/2.2.png)

Kemudian menambahkan beberapa file
![gambar2.3](images/2.3.png)
![gambar2.4](images/2.4.png)
![gambar2.5](!images/2.5.png)


---

### Step 2: Add file hickory-dickory in hickory-dickory branch
Lalu misalkan bila ada anggota grup yang menambahkan file baru (hickory-dickory-dock.txt) pada branch baru (hickory-dickory)

![gambar3.1](images/3.1.png)
![gambar3.2](images/3.2.png)

Maka pada gambar pada branch hickory-dickory dapat kita lihat file hickory-dickory-dock.txt berhasil ditambahkan
![gambar4](images/4.png)

Sementara itu pada branch master, file hickory-dickory-dock.txt belum ditambahkan
![gambar5](images/5.png)



---
### Step 3: Review and accepts Bob's simple changes
Kemudian Alice melakukan rename pada semua remote-nya, termasuk pada remote-nya sendiri. Hal ini dilakukan untuk membedakan remote-nya Alice dan remote-nya Bob
![gambar6.1](images/6.1.png)

Setelah itu, Alice me-copy pekerjaan Bob dan melakukan merge dan push atas perubahan yang telah dilakukan oleh Bob tadi
![gambar7.1](images/7.1.png)
![gambar8.1](images/8.1.png)

Maka, file hickory-dickory.dock.txt sudah ditambahkan di branch master (alice)
![gambar9](images/9.png)


---
### Step 4: Bob makes lots of changes
Kemudian Bob memastikan updating pada repository-nya supaya up-to-date dengan repo-nya Alice
![gambar10](images/10.png)

Bob membuat branch baru untuk membuat berbagai macam perubahan
![gambar11](images/11.png)

Kemudian Bob melakukan penambahan beberapa file dan perubahan pada file README.txt
![gambar12](images/12.png)

Bob me-review aktivitas log-nya
![gambar13](images/13.png)



---
### Step 5: Bob cleans up his work before submitting
Bob menulis ulang history untuk mengurutkan kronologi dari proses perubahan yang telah dia lakukan.
![gambar14](images/14.png)

Kemudian bob melakukan squash untuk menggabungkan beberapa perubahan yang memiliki pesan commit yang hampir sama, sehingga dipersingkat cukup dengan satu commit command
![gambar15](images/15.png)


```python

```
