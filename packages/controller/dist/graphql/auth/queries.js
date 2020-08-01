var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var USERDATA = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery me{\n    me{\n      id\n      lastName\n      firstName\n      name\n      email    \n    }\n  }\n"], ["\nquery me{\n    me{\n      id\n      lastName\n      firstName\n      name\n      email    \n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=queries.js.map