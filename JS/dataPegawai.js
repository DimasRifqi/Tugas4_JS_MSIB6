// class Pegawai {
//   constructor(nama, jabatan, status, gaji) {
//     this.nama = nama;
//     this.jabatan = jabatan;
//     this.status = status;
//     this.gaji = gaji;
//   }

//   tunjangan_Jabatan() {
//     return 0.15 * this.gaji;
//   }

//   BPJS() {
//     return 10 * this.gaji;
//   }
// }

let form = document.getElementById("pegawai");
let pilihJabatan = ["Manajer", "Asisten Manajer", "Staff"];
let pilihStatus = ["Menikah", "Belum"];

let pilih_Jabatan = `<option value=""> Pilihan Jabatan</option>`;
let pilih_Status = `<option value=""> Pilihan Status</option>`;

for (let p in pilihJabatan) {
  pilih_Jabatan += `<option value="${pilihJabatan[p]}">${pilihJabatan[p]}</option>`;
}

for (let C in pilihStatus) {
  pilih_Status += `<option value="${pilihStatus[C]}">${pilihStatus[C]}</option>`;
}

form.jabatan.innerHTML = pilih_Jabatan;
form.status.innerHTML = pilih_Status;

function DataPegawai() {
  let nama = form.nama.value;
  let jabatan = form.jabatan.value;
  let status = form.status.value;
  let gaji;

  if (jabatan == "Manajer") {
    gaji = 15000000;
  } else if (jabatan == "Asisten Manajer") {
    gaji = 10000000;
  } else if (jabatan == "Staff") {
    gaji = 5000000;
  } else {
    gaji = 0;
  }

  const tunjanganJabatan = 0.15 * gaji;
  const BPJS = 0.1 * gaji;

  var tunjanganKeluarga = status == "Menikah" ? 0.2 * gaji : 0;
  var totalGaji = gaji + tunjanganJabatan - BPJS + tunjanganKeluarga;

  swal(`
        Nama Pegawai : ${nama}
        Jabatan : ${jabatan}
        Status : ${status}
        Gaji : ${gaji}
        Tunjangan Jabatan : ${tunjanganJabatan}
        BPJS : ${BPJS}
        Total Gaji : ${totalGaji}
        `);
}
