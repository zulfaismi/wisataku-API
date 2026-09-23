import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('destinasi')
@Controller('destinasi')
export class DestinasiController {

  @Get()
  @ApiOperation({ summary: 'Menampilkan semua daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil daftar destinasi.' })
  findAll() {
    return [
      { id: 1, nama: 'Pantai Kuta', lokasi: 'Bali', hargaTiket: 50000 },
      { id: 2, nama: 'Candi Borobudur', lokasi: 'Magelang', hargaTiket: 75000 },
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Detail destinasi ditemukan.' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan.' })
  findOne(@Param('id') id: string) {
    return { id: +id, nama: 'Pantai Kuta', lokasi: 'Bali', hargaTiket: 50000 };
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi wisata baru' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat.' })
  create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return {
      message: 'Destinasi berhasil ditambahkan',
      data: createDestinasiDto,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Memperbarui data destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui.' })
  update(@Param('id') id: string, @Body() updateDestinasiDto: UpdateDestinasiDto) {
    return {
      message: `Destinasi dengan ID ${id} berhasil diperbarui`,
      data: updateDestinasiDto,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus.' })
  remove(@Param('id') id: string) {
    return { message: `Destinasi dengan ID ${id} berhasil dihapus` };
  }
}