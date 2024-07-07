import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductEntryServiceBase } from "./base/productEntry.service.base";

@Injectable()
export class ProductEntryService extends ProductEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
