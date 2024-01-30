import { Test, TestingModule } from "@nestjs/testing";
import { ScbController } from "./scb.controller";

describe("ScbController", () => {
  let controller: ScbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScbController],
    }).compile();

    controller = module.get<ScbController>(ScbController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
