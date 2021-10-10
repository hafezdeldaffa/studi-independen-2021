// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.

/* 
Jawaban : 
1. Program akan menampilkan output berupa deskripsi obj fun1 dan fun2.
2. Berbeda.
3. Karena fun1 menggunakan function, sedangkan fun2 menggunakan arrow function. 
    Dalam fungsi biasa kata kunci this mewakili objek yang disebut fungsi, yang bisa berupa jendela, dokumen, tombol, atau apa pun.
    Dengan arrow function, kata kunci this selalu mewakili objek yang mendefinisikan arrow function.
*/
const obj = {
    fun1: function () {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();

/* SOAL NOMOR 2 */

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*
Jawaban :
1. Encapsulation atau pengkapsulan adalah konsep tentang pengikatan data atau metode
yang berbeda yang disatukan atau “dikapsulkan” menjadi satu unit data. Encapsulation dapat mempermudah
dalam pembacaan code karena informasi yang disajikan tidak perlu dibaca secara rinci dan sudah merupakan satu kesatuan.

2. Abstraction adalah suatu cara untuk melihat suatu object dalam bentuk yang lebih sederhana.
Sebagai contoh kita tidak melihat sebuah mobil sebagai ribuan komponen elektronik, sistem mekanik dengan empat buah ban, jok, stir kemudi dan sebagainya.

3. Inheritance adalah konsep OOP di mana kita dapat membentuk class baru yang “mewarisi” atau memiliki bagian-bagian dari class yang sudah ada sebelumnya. Konsep ini menggunakan sistem hirarki atau bertingkat.

4. Polymorphism adalah konsep di mana suatu objek yang berbeda-beda dapat diakses melalui interface yang sama. Sebuah objek yang polymorphic dapat beradaptasi dengan metode apapun yang
diimplementasikan pada objek tersebut, dan setiap class memiliki interpretasinya tersendiri terhadap interfacenya.
*/

/* SOAL NOMOR 3 */

class Phone {
    constructor(brand, storage, ram) {
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    };

    getBrandName() {
        return this.brand;
    };

    setBrandName(brand) {
        this.brand = brand;
        return this.brand;
    };

    printSpecification() {
        return console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    };

    setSpecification(storage, ram) {
        this.storage = storage;
        this.ram = ram;
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

/* SOAL NOMOR 4 */

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseOfferings = [];
    }

    takeNewCourse(course) {
        let courseTotal = this.courseOfferings.push(course);
        return courseTotal;
    }

    takeATest(course) {
        const getAttendance = new Course().getAttendance();
        if (getAttendance <= 3) {
            return 'Please fill your absen';
        }
        const courseOffering = new CourseOffering(course, Math.random().toFixed(2), getAttendance);
        return courseOffering;
    }

    courseAttendance(subject) {
        const course = new Course().getSubject(subject);
        return course
    }
}

class CourseOffering {
    constructor(course, grade, attendance) {
        this.course = course;
        this.grade = grade;
        this.attendance = attendance;
    }
}

class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    };

    getSubject() {
        return this.subject;
    };

    getAttendance() {
        return this.attendance;
    };

    decreaseQuota() {
        return this.quota - 1;
    };
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
