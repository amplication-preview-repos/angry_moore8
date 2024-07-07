import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductEntryService } from "./productEntry.service";
import { ProductEntryControllerBase } from "./base/productEntry.controller.base";

@swagger.ApiTags("productEntries")
@common.Controller("productEntries")
export class ProductEntryController extends ProductEntryControllerBase {
  constructor(
    protected readonly service: ProductEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
