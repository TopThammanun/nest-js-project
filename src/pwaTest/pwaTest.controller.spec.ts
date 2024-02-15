import { Test, TestingModule } from "@nestjs/testing";
import { pwaTestController } from "./pwaTest.controller";

describe("pwaTestController", () => {
  let controller: pwaTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [pwaTestController],
    }).compile();

    controller = module.get<pwaTestController>(pwaTestController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
