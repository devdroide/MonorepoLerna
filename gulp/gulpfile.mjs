import gulp from "gulp";
import { deleteAsync } from "del";

const packages = ["paquete1", "paquete2"]; // Agrega aquí los nombres de tus paquetes

// Tarea para limpiar los archivos compilados en la carpeta src de cada paquete
gulp.task("clean:packages", async () => {
  console.log(deleteAsync);
  const cleanTasks = packages.map(async (packageName) => {
    console.log(`Deleting files in packages/${packageName}`);
    await deleteAsync([
      `packages/${packageName}/*.js`,
      `packages/${packageName}/*.js.map`,
      `packages/${packageName}/*.d.ts`,
      `packages/${packageName}/*.tsbuildinfo`,
      `packages/${packageName}/CHANGELOG.md`,
      `packages/${packageName}/src/*.js`,
      `packages/${packageName}/src/*.js.map`,
      `packages/${packageName}/src/*.d.ts`,
      `packages/${packageName}/src/*.tsbuildinfo`,
      `packages/${packageName}/src/CHANGELOG.md`,
      `packages/${packageName}/src/**/*.js`,
      `packages/${packageName}/src/**/*.js.map`,
      `packages/${packageName}/src/**/*.d.ts`,
    ]);
    console.log(`Files deleted in packages/${packageName}`);
  });
  await Promise.all(cleanTasks);
});

// Tarea por defecto para ejecutar la tarea de limpieza
gulp.task("default", gulp.series("clean:packages"));
