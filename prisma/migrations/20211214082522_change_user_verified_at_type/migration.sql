/*
  Warnings:

  - You are about to alter the column `verified_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `verified_at` TIMESTAMP NULL;
