import uuid from 'uuid/v1';
import { Typography } from "@material-ui/core";

const data = [
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
    {
        nik: '3529191407910008',
        nama: 'Moh. Affan',
        tempat_lahir: 'Sumenep',
        tgl_lahir: '14-07-1991',
        jenis_kelamin: 'LAKI-LAKI',
        alamat: 'Dusun Lojikantang',
        rt: '002',
        rw: '001',
        desa_kelurahan: 'Kalianget Barat',
        kecamatan: 'Kalianget',
        kabupaten_kota: 'Sumenep',
        provinsi: 'Jawa Timur',
        status_perkawinan: 'KAWIN'
    },
].map((d, i) => {
    d.id = uuid();
    return d;
});

const columns = [
    {
        name: 'NIK',
        key: 'nik',
        render: function (data, rowData, rowIndex, colIndex) {
            return (<Typography color="primary">{data}</Typography>)
        }
    },
    {
        name: 'Nama',
        key: 'nama'
    },
    {
        name: 'Tempat Lahir',
        key: 'tempat_lahir'
    },
    {
        name: 'Tanggal Lahir',
        key: 'tgl_lahir'
    },
    {
        name: 'Jenis Kelamin',
        key: 'jenis_kelamin'
    }
]

export default data;
export { columns };