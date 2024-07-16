/*
  Warnings:

  - You are about to drop the column `friendEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `friendName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `yourEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `yourName` on the `referral` table. All the data in the column will be lost.
  - Added the required column `email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendsemail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendsusername` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `friendEmail`,
    DROP COLUMN `friendName`,
    DROP COLUMN `yourEmail`,
    DROP COLUMN `yourName`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `friendsemail` VARCHAR(191) NOT NULL,
    ADD COLUMN `friendsusername` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
