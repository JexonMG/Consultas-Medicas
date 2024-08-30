-- CreateEnum
CREATE TYPE "EstadoCita" AS ENUM ('pendiente', 'cancelada', 'realizada');

-- CreateTable
CREATE TABLE "Consultas" (
    "id" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "citaId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "Consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Citas" (
    "id" TEXT NOT NULL,
    "estado" "EstadoCita" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "nombre_paciente" TEXT NOT NULL,
    "apellido_paciente" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "alergias" TEXT NOT NULL,
    "motivo_consulta" TEXT NOT NULL,
    "valoracion" DOUBLE PRECISION NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "Citas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctores" (
    "id" TEXT NOT NULL,
    "codigo_CM" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Doctores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultas" ADD CONSTRAINT "Consultas_citaId_fkey" FOREIGN KEY ("citaId") REFERENCES "Citas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultas" ADD CONSTRAINT "Consultas_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "Citas_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
