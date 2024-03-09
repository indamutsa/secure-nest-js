-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_profiles" (
    "id" SERIAL NOT NULL,
    "provider" VARCHAR(255) NOT NULL,
    "profileId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "oauth_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationToken_key" ON "users"("verificationToken");

-- CreateIndex
CREATE UNIQUE INDEX "oauth_profiles_provider_profileId_key" ON "oauth_profiles"("provider", "profileId");

-- AddForeignKey
ALTER TABLE "oauth_profiles" ADD CONSTRAINT "oauth_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
