import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDestinasiDto {
  @ApiProperty({ example: 'Pantai Kuta', description: 'Nama destinasi wisata' })
  @IsNotEmpty()
  @IsString()
  nama: string;

  @ApiProperty({ example: 'Bali', description: 'Lokasi destinasi' })
  @IsNotEmpty()
  @IsString()
  lokasi: string;

  @ApiProperty({ example: 'Pantai indah di Bali', description: 'Deskripsi wisata', required: false })
  @IsOptional()
  @IsString()
  deskripsi?: string;

  @ApiProperty({ example: 50000, description: 'Harga tiket masuk dalam Rupiah' })
  @IsNotEmpty()
  @IsNumber()
  hargaTiket: number;
}