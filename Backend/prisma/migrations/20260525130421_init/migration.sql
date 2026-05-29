/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `blacklist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "blacklist_token_key" ON "blacklist"("token");
