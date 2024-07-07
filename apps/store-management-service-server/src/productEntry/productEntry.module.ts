import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductEntryModuleBase } from "./base/productEntry.module.base";
import { ProductEntryService } from "./productEntry.service";
import { ProductEntryController } from "./productEntry.controller";
import { ProductEntryResolver } from "./productEntry.resolver";

@Module({
  imports: [ProductEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductEntryController],
  providers: [ProductEntryService, ProductEntryResolver],
  exports: [ProductEntryService],
})
export class ProductEntryModule {}
