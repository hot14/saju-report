"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../engine/node_modules/manseryeok/dist/constants.js
  var require_constants = __commonJS({
    "../engine/node_modules/manseryeok/dist/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DAY_PILLAR_ANCHOR = exports.TEN_GOD_HANJA = exports.ELEMENT_CONTROLS = exports.ELEMENT_GENERATES = exports.MONTH_BRANCHES = exports.BRANCH_MAIN_STEM = exports.BRANCH_ELEMENTS = exports.STEM_ELEMENTS = exports.FIVE_ELEMENTS = exports.YIN_YANG = exports.EARTHLY_BRANCHES_HANJA = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS_HANJA = exports.HEAVENLY_STEMS = void 0;
      exports.HEAVENLY_STEMS = ["\uAC11", "\uC744", "\uBCD1", "\uC815", "\uBB34", "\uAE30", "\uACBD", "\uC2E0", "\uC784", "\uACC4"];
      exports.HEAVENLY_STEMS_HANJA = [
        "\u7532",
        "\u4E59",
        "\u4E19",
        "\u4E01",
        "\u620A",
        "\u5DF1",
        "\u5E9A",
        "\u8F9B",
        "\u58EC",
        "\u7678"
      ];
      exports.EARTHLY_BRANCHES = [
        "\uC790",
        "\uCD95",
        "\uC778",
        "\uBB18",
        "\uC9C4",
        "\uC0AC",
        "\uC624",
        "\uBBF8",
        "\uC2E0",
        "\uC720",
        "\uC220",
        "\uD574"
      ];
      exports.EARTHLY_BRANCHES_HANJA = [
        "\u5B50",
        "\u4E11",
        "\u5BC5",
        "\u536F",
        "\u8FB0",
        "\u5DF3",
        "\u5348",
        "\u672A",
        "\u7533",
        "\u9149",
        "\u620C",
        "\u4EA5"
      ];
      exports.YIN_YANG = ["\uC591", "\uC74C"];
      exports.FIVE_ELEMENTS = ["\uBAA9", "\uD654", "\uD1A0", "\uAE08", "\uC218"];
      exports.STEM_ELEMENTS = [
        "\uBAA9",
        "\uBAA9",
        "\uD654",
        "\uD654",
        "\uD1A0",
        "\uD1A0",
        "\uAE08",
        "\uAE08",
        "\uC218",
        "\uC218"
      ];
      exports.BRANCH_ELEMENTS = [
        "\uC218",
        // 자
        "\uD1A0",
        // 축
        "\uBAA9",
        // 인
        "\uBAA9",
        // 묘
        "\uD1A0",
        // 진
        "\uD654",
        // 사
        "\uD654",
        // 오
        "\uD1A0",
        // 미
        "\uAE08",
        // 신
        "\uAE08",
        // 유
        "\uD1A0",
        // 술
        "\uC218"
        // 해
      ];
      exports.BRANCH_MAIN_STEM = {
        \uC790: "\uACC4",
        \uCD95: "\uAE30",
        \uC778: "\uAC11",
        \uBB18: "\uC744",
        \uC9C4: "\uBB34",
        \uC0AC: "\uBCD1",
        \uC624: "\uC815",
        \uBBF8: "\uAE30",
        \uC2E0: "\uACBD",
        \uC720: "\uC2E0",
        \uC220: "\uBB34",
        \uD574: "\uC784"
      };
      exports.MONTH_BRANCHES = {
        1: "\uC778",
        2: "\uBB18",
        3: "\uC9C4",
        4: "\uC0AC",
        5: "\uC624",
        6: "\uBBF8",
        7: "\uC2E0",
        8: "\uC720",
        9: "\uC220",
        10: "\uD574",
        11: "\uC790",
        12: "\uCD95"
      };
      exports.ELEMENT_GENERATES = {
        \uBAA9: "\uD654",
        \uD654: "\uD1A0",
        \uD1A0: "\uAE08",
        \uAE08: "\uC218",
        \uC218: "\uBAA9"
      };
      exports.ELEMENT_CONTROLS = {
        \uBAA9: "\uD1A0",
        \uD1A0: "\uC218",
        \uC218: "\uD654",
        \uD654: "\uAE08",
        \uAE08: "\uBAA9"
      };
      exports.TEN_GOD_HANJA = {
        \uBE44\uACAC: "\u6BD4\u80A9",
        \uAC81\uC7AC: "\u52AB\u8CA1",
        \uC2DD\uC2E0: "\u98DF\u795E",
        \uC0C1\uAD00: "\u50B7\u5B98",
        \uD3B8\uC7AC: "\u504F\u8CA1",
        \uC815\uC7AC: "\u6B63\u8CA1",
        \uD3B8\uAD00: "\u504F\u5B98",
        \uC815\uAD00: "\u6B63\u5B98",
        \uD3B8\uC778: "\u504F\u5370",
        \uC815\uC778: "\u6B63\u5370"
      };
      exports.DAY_PILLAR_ANCHOR = {
        year: 1992,
        month: 10,
        day: 24,
        ganjiIndex: 9
      };
    }
  });

  // ../engine/node_modules/manseryeok/dist/validation.js
  var require_validation = __commonJS({
    "../engine/node_modules/manseryeok/dist/validation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.assertIntegerInRange = assertIntegerInRange;
      exports.assertFiniteNumber = assertFiniteNumber;
      exports.assertBoolean = assertBoolean;
      exports.assertOptionalBoolean = assertOptionalBoolean;
      exports.assertHeavenlyStem = assertHeavenlyStem;
      exports.assertEarthlyBranch = assertEarthlyBranch;
      exports.assertPillar = assertPillar;
      exports.assertGender = assertGender;
      exports.assertDayBoundary = assertDayBoundary;
      var constants_1 = require_constants();
      function assertIntegerInRange(value, min, max, name) {
        if (typeof value !== "number" || !Number.isInteger(value)) {
          throw new RangeError(`${name}\uC740 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
        if (value < min || value > max) {
          throw new RangeError(`${name}\uC740 ${min}~${max} \uBC94\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${value}`);
        }
      }
      function assertFiniteNumber(value, name) {
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new RangeError(`${name}\uC740 \uC720\uD55C\uD55C \uC22B\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
      function assertBoolean(value, name) {
        if (typeof value !== "boolean") {
          throw new TypeError(`${name}\uC740 boolean \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
      function assertOptionalBoolean(value, name) {
        if (value !== void 0) {
          assertBoolean(value, name);
        }
      }
      function assertHeavenlyStem(value, name = "\uCC9C\uAC04") {
        if (typeof value !== "string" || !constants_1.HEAVENLY_STEMS.includes(value)) {
          throw new RangeError(`${name}\uC740 \uC720\uD6A8\uD55C \uCC9C\uAC04\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
      function assertEarthlyBranch(value, name = "\uC9C0\uC9C0") {
        if (typeof value !== "string" || !constants_1.EARTHLY_BRANCHES.includes(value)) {
          throw new RangeError(`${name}\uC740 \uC720\uD6A8\uD55C \uC9C0\uC9C0\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
      function assertPillar(value, name = "\uAE30\uB465") {
        if (value === null || typeof value !== "object") {
          throw new TypeError(`${name}\uC740 \uAC1D\uCCB4\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);
        }
        const pillar = value;
        assertHeavenlyStem(pillar.heavenlyStem, `${name}.heavenlyStem`);
        assertEarthlyBranch(pillar.earthlyBranch, `${name}.earthlyBranch`);
      }
      function assertGender(value, name = "\uC131\uBCC4(gender)") {
        if (value !== "male" && value !== "female") {
          throw new RangeError(`${name}\uC740 'male' \uB610\uB294 'female' \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
      function assertDayBoundary(value, name = "\uC77C \uACBD\uACC4(dayBoundary)") {
        if (value !== "midnight" && value !== "jasi" && value !== "splitJasi") {
          throw new RangeError(`${name}\uB294 'midnight', 'jasi', 'splitJasi' \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${String(value)}`);
        }
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/elements.js
  var require_elements = __commonJS({
    "../engine/node_modules/manseryeok/dist/elements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHeavenlyStemYinYang = getHeavenlyStemYinYang;
      exports.getHeavenlyStemElement = getHeavenlyStemElement;
      exports.getEarthlyBranchYinYang = getEarthlyBranchYinYang;
      exports.getEarthlyBranchElement = getEarthlyBranchElement;
      var constants_1 = require_constants();
      var validation_1 = require_validation();
      function getHeavenlyStemYinYang(stem) {
        (0, validation_1.assertHeavenlyStem)(stem);
        return constants_1.HEAVENLY_STEMS.indexOf(stem) % 2 === 0 ? "\uC591" : "\uC74C";
      }
      function getHeavenlyStemElement(stem) {
        (0, validation_1.assertHeavenlyStem)(stem);
        return constants_1.STEM_ELEMENTS[constants_1.HEAVENLY_STEMS.indexOf(stem)];
      }
      function getEarthlyBranchYinYang(branch) {
        (0, validation_1.assertEarthlyBranch)(branch);
        return constants_1.EARTHLY_BRANCHES.indexOf(branch) % 2 === 0 ? "\uC591" : "\uC74C";
      }
      function getEarthlyBranchElement(branch) {
        (0, validation_1.assertEarthlyBranch)(branch);
        return constants_1.BRANCH_ELEMENTS[constants_1.EARTHLY_BRANCHES.indexOf(branch)];
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/calendar/lunar-data.js
  var require_lunar_data = __commonJS({
    "../engine/node_modules/manseryeok/dist/calendar/lunar-data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LUNAR_BASE_UTC_MS = exports.LUNAR_MAX_YEAR = exports.LUNAR_MIN_YEAR = void 0;
      exports.getLeapMonth = getLeapMonth;
      exports.getLeapMonthDays = getLeapMonthDays;
      exports.getLunarMonthDays = getLunarMonthDays;
      exports.getLunarYearDays = getLunarYearDays;
      var validation_1 = require_validation();
      var LUNAR_DATA = [
        25904,
        92828,
        23200,
        43856,
        76632,
        11104,
        41840,
        21221,
        53600,
        58544,
        87331,
        55968,
        88907,
        22224,
        10976,
        106967,
        41680,
        53584,
        117076,
        46368,
        112268,
        44448,
        21968,
        75193,
        17840,
        41648,
        107189,
        43344,
        46368,
        92833,
        43872,
        87468,
        19312,
        17776,
        86391,
        21168,
        26960,
        92500,
        23200,
        109388,
        42720,
        19168,
        107752,
        42336,
        53920,
        60070,
        54608,
        22176,
        103842,
        38352,
        84699,
        18864,
        42192,
        118999,
        45728,
        46416,
        27987,
        11680,
        38320,
        71025,
        18864,
        107641,
        25776,
        27280,
        109222,
        27472,
        11104,
        43746,
        37744,
        84331,
        51552,
        58544,
        92455,
        55968,
        23248,
        71379,
        9952,
        37600,
        103122,
        51536,
        119897,
        46240,
        46736,
        87462,
        21936,
        9680,
        42418,
        37552,
        108858,
        26960,
        29856,
        111784,
        43872,
        21424,
        11124,
        9584,
        21168,
        86705,
        26960,
        92761,
        23200,
        43856,
        83669,
        19168,
        42352,
        83171,
        53920,
        121163,
        46416,
        22176,
        103847,
        38352,
        19168,
        43444,
        42192,
        53840,
        109217,
        46416,
        87641,
        11680,
        38320,
        82805,
        18800,
        42160,
        107700,
        27280,
        109900,
        23376,
        11104,
        103656,
        37616,
        18800,
        26980,
        54432,
        125516,
        54928,
        22224,
        76634,
        9952,
        37600,
        51926,
        51536,
        54432,
        111778,
        46480,
        87756,
        21936,
        9680,
        102839,
        37552,
        43344,
        110933,
        27808,
        44368,
        76641,
        19376,
        75129,
        9584,
        21168,
        43686,
        59728,
        27296,
        105123,
        43856,
        84827,
        19168,
        42352,
        86231,
        53856,
        55632,
        87381,
        22176,
        38608,
        71122,
        19168,
        107706,
        42192,
        53840,
        119446,
        46416,
        13728,
        43938,
        38320,
        84412,
        18800,
        42160,
        45752,
        27216,
        27968,
        109396,
        11104,
        37744,
        21234,
        18800,
        25833,
        54432,
        59984,
        92822,
        22224,
        11104,
        99811,
        37600,
        51579,
        43344,
        54432,
        55976,
        46416,
        22192,
        11700,
        9680,
        37584,
        53938,
        43344,
        46297,
        27296,
        44368,
        22358,
        19376,
        9648,
        83315,
        21168,
        108875,
        59728,
        27296,
        44456,
        39760,
        19296,
        43748,
        42224,
        21088,
        119394,
        54608,
        88730,
        22176,
        38608,
        84438,
        18912,
        42192,
        54484,
        53840,
        54587,
        46400,
        46496,
        103848,
        38320,
        18864,
        43380,
        42160,
        43600,
        59985,
        27968,
        44475,
        11104,
        37744,
        19190,
        18800,
        25776,
        29859,
        55888,
        27483,
        22224,
        10976,
        37863,
        37600,
        51552,
        119125,
        54432,
        55888,
        87379,
        22176,
        42919,
        42448,
        37584,
        43702,
        43344,
        46240,
        47780,
        44368,
        21920,
        101282,
        42416,
        21367,
        21168,
        26928,
        94549,
        27296,
        44368,
        23379,
        19296,
        42472,
        42208,
        53856,
        60006,
        54560,
        55968,
        91812,
        22224,
        19168,
        43475,
        42192,
        53943,
        45648,
        54560,
        120133,
        46496,
        21968,
        21939,
        18864,
        25975,
        42160,
        43600,
        46678,
        27936,
        44448,
        23396,
        37744,
        18800,
        26995,
        25808,
        27303,
        55888,
        23200,
        44741,
        43744,
        37600,
        53987,
        51552,
        119896,
        54432,
        54608,
        88406,
        22176,
        42704,
        21972,
        21200,
        43344,
        117075,
        46240,
        111783,
        44368,
        21920,
        107429,
        42416,
        21168,
        45427,
        26928,
        27321,
        27296,
        43856,
        20310,
        19296,
        42352,
        21220,
        53600,
        59696,
        29987,
        55968,
        88743,
        22224,
        19168,
        106965,
        41680,
        53584,
        55892,
        46368,
        54953,
        44448,
        21968,
        76214,
        17840,
        41648,
        45749,
        43344,
        46368,
        109346,
        44384,
        87399,
        21360,
        17776,
        25973,
        21168,
        26960,
        31059,
        23200,
        43882,
        42704,
        19168,
        42726,
        42336,
        53920,
        60069,
        54608,
        23200,
        46755,
        42704,
        19415,
        19120,
        43216,
        54613,
        45728,
        46416,
        23892,
        19872,
        38352,
        21874,
        18864,
        43382,
        25776,
        27280,
        47780,
        27472,
        11168,
        43874,
        37744,
        21222,
        53600,
        58544,
        27941,
        55952,
        23376,
        14035,
        10976,
        41696,
        58066,
        51536,
        54614,
        46368,
        46736,
        23972,
        21968,
        9680,
        42419,
        41648,
        108727,
        43344,
        46240,
        111269,
        44368,
        21936,
        11124,
        9584,
        21241,
        21168,
        26960,
        27990,
        23200,
        43856,
        22228,
        19168,
        42352,
        83299,
        53920,
        125095,
        54608,
        23200,
        44453,
        38352,
        19168,
        43700,
        42192,
        53944,
        45712,
        46416,
        22359,
        11680,
        38352,
        19829,
        18864,
        42160,
        107699,
        27280,
        44440,
        27472,
        11104,
        103269,
        37744,
        18800,
        26980,
        58528,
        60010,
        55952,
        23248,
        76502,
        10976,
        37600,
        51925,
        51536,
        54432,
        119971,
        46736,
        22439,
        21936,
        9680,
        38325,
        37552,
        43344,
        55636,
        46240,
        46416,
        27986,
        21936,
        10102,
        9584,
        21168,
        43685,
        59728,
        27296,
        47779,
        43856,
        19416,
        19168,
        42352,
        21717,
        53856,
        55632,
        91476,
        22176,
        39632,
        21970,
        19168,
        42422,
        42192,
        53840,
        55957,
        46416,
        22176,
        44450,
        38352,
        19383,
        18864,
        42160,
        46261,
        27280,
        44352,
        47956,
        11104,
        38320,
        21362,
        18800,
        25958,
        58528,
        59984,
        92821,
        23376,
        11104,
        101091,
        37600,
        116951,
        51536,
        54432,
        120998,
        46736,
        22224,
        75188,
        9680,
        37584,
        53938,
        43344,
        54615,
        46240,
        46416,
        87381,
        19888,
        9648,
        99699,
        21168,
        43448,
        26960,
        27296,
        44710,
        43856,
        19296,
        43748,
        42352,
        21104,
        29283,
        55632,
        27479,
        22176,
        39632,
        19925,
        19168,
        42208,
        54484,
        53840,
        54680,
        46400,
        54944,
        103846,
        38320,
        18864,
        43444,
        42160,
        45690,
        27216,
        27968,
        46934,
        11104,
        38320,
        19317,
        18800,
        25776,
        29859,
        59984,
        28056,
        23248,
        11104,
        38629,
        37600,
        51552,
        59732,
        54432,
        55888,
        30034,
        22208,
        43959,
        9680,
        37584,
        51893,
        43344,
        46240,
        111779,
        46416,
        21977,
        19360,
        42416,
        21877,
        21168,
        43344,
        47444,
        27296,
        44368,
        27474,
        19296,
        42726,
        42352,
        21104,
        27237,
        55600,
        23200,
        46755,
        38608,
        19195,
        19168,
        42192,
        118998,
        53840,
        54560,
        56645,
        46752,
        38608,
        21938,
        18864,
        42359,
        42160,
        45648,
        111189,
        27968,
        44448,
        84835,
        37744,
        18936,
        18800,
        25776,
        92326,
        59984,
        27424,
        108228,
        43744,
        37600,
        53987,
        51552,
        54615,
        54432,
        55888,
        23893,
        22176,
        42704,
        21972,
        21200,
        43448,
        43344,
        46240,
        46758,
        44368,
        21920,
        43940,
        42416,
        21168,
        45683,
        26928,
        29495,
        27296,
        44368,
        84821,
        19296,
        42352,
        21732,
        53600,
        59752,
        54560,
        55968,
        92838,
        22224,
        19168,
        43476,
        41680,
        53584,
        62034,
        54560
      ];
      exports.LUNAR_MIN_YEAR = 1391;
      exports.LUNAR_MAX_YEAR = exports.LUNAR_MIN_YEAR + LUNAR_DATA.length - 1;
      exports.LUNAR_BASE_UTC_MS = Date.UTC(1391, 1, 13);
      function assertYear(year) {
        (0, validation_1.assertIntegerInRange)(year, exports.LUNAR_MIN_YEAR, exports.LUNAR_MAX_YEAR, "\uC74C\uB825 \uC5F0\uB3C4(year)");
      }
      function getLeapMonth(year) {
        assertYear(year);
        return LUNAR_DATA[year - exports.LUNAR_MIN_YEAR] & 15;
      }
      function getLeapMonthDays(year) {
        assertYear(year);
        const data = LUNAR_DATA[year - exports.LUNAR_MIN_YEAR];
        if ((data & 15) === 0)
          return 0;
        return data & 65536 ? 30 : 29;
      }
      function getLunarMonthDays(year, month) {
        assertYear(year);
        (0, validation_1.assertIntegerInRange)(month, 1, 12, "\uC74C\uB825 \uC6D4(month)");
        return LUNAR_DATA[year - exports.LUNAR_MIN_YEAR] & 65536 >> month ? 30 : 29;
      }
      function getLunarYearDays(year) {
        assertYear(year);
        let sum = 348;
        for (let i = 32768; i > 8; i >>= 1) {
          sum += LUNAR_DATA[year - exports.LUNAR_MIN_YEAR] & i ? 1 : 0;
        }
        return sum + getLeapMonthDays(year);
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/calendar/convert.js
  var require_convert = __commonJS({
    "../engine/node_modules/manseryeok/dist/calendar/convert.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isValidSolarDate = isValidSolarDate;
      exports.lunarToSolar = lunarToSolar;
      exports.solarToLunar = solarToLunar;
      var lunar_data_1 = require_lunar_data();
      var validation_1 = require_validation();
      var MS_PER_DAY = 864e5;
      function isValidSolarDate(year, month, day) {
        if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
          return false;
        }
        if (month < 1 || month > 12 || day < 1 || day > 31) {
          return false;
        }
        const d = new Date(Date.UTC(year, month - 1, day));
        return d.getUTCFullYear() === year && d.getUTCMonth() === month - 1 && d.getUTCDate() === day;
      }
      function lunarToSolar(year, month, day, isLeapMonth) {
        (0, validation_1.assertIntegerInRange)(year, lunar_data_1.LUNAR_MIN_YEAR, lunar_data_1.LUNAR_MAX_YEAR, "\uC74C\uB825 \uC5F0\uB3C4(year)");
        (0, validation_1.assertIntegerInRange)(month, 1, 12, "\uC74C\uB825 \uC6D4(month)");
        (0, validation_1.assertBoolean)(isLeapMonth, "\uC724\uB2EC \uC5EC\uBD80(isLeapMonth)");
        const leapMonth = (0, lunar_data_1.getLeapMonth)(year);
        if (isLeapMonth && leapMonth !== month) {
          throw new RangeError(`${year}\uB144\uC5D0\uB294 \uC724${month}\uC6D4\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`);
        }
        const maxDay = isLeapMonth && leapMonth === month ? (0, lunar_data_1.getLeapMonthDays)(year) : (0, lunar_data_1.getLunarMonthDays)(year, month);
        (0, validation_1.assertIntegerInRange)(day, 1, maxDay, `${year}\uB144 ${isLeapMonth ? "\uC724" : ""}${month}\uC6D4 \uC77C\uC790(day)`);
        let offset = 0;
        for (let y = lunar_data_1.LUNAR_MIN_YEAR; y < year; y++) {
          offset += (0, lunar_data_1.getLunarYearDays)(y);
        }
        for (let m = 1; m < month; m++) {
          offset += (0, lunar_data_1.getLunarMonthDays)(year, m);
          if (leapMonth > 0 && m === leapMonth) {
            offset += (0, lunar_data_1.getLeapMonthDays)(year);
          }
        }
        if (isLeapMonth && leapMonth === month) {
          offset += (0, lunar_data_1.getLunarMonthDays)(year, month);
        }
        offset += day - 1;
        const solar = new Date(lunar_data_1.LUNAR_BASE_UTC_MS + offset * MS_PER_DAY);
        return {
          year: solar.getUTCFullYear(),
          month: solar.getUTCMonth() + 1,
          day: solar.getUTCDate()
        };
      }
      function solarToLunar(year, month, day) {
        if (!isValidSolarDate(year, month, day)) {
          throw new RangeError(`\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC591\uB825 \uB0A0\uC9DC\uC785\uB2C8\uB2E4: ${year}-${month}-${day}`);
        }
        const targetUTC = Date.UTC(year, month - 1, day);
        let offset = Math.floor((targetUTC - lunar_data_1.LUNAR_BASE_UTC_MS) / MS_PER_DAY);
        if (offset < 0) {
          const base = new Date(lunar_data_1.LUNAR_BASE_UTC_MS);
          const baseStr = `${base.getUTCFullYear()}-${String(base.getUTCMonth() + 1).padStart(2, "0")}-${String(base.getUTCDate()).padStart(2, "0")}`;
          throw new RangeError(`\uC74C\uB825 \uBCC0\uD658 \uC9C0\uC6D0 \uBC94\uC704(\uC591\uB825 ${baseStr}) \uC774\uC804 \uB0A0\uC9DC\uC785\uB2C8\uB2E4: ${year}-${month}-${day}`);
        }
        let lunarYear = lunar_data_1.LUNAR_MIN_YEAR;
        for (; lunarYear <= lunar_data_1.LUNAR_MAX_YEAR; lunarYear++) {
          const yearDays = (0, lunar_data_1.getLunarYearDays)(lunarYear);
          if (offset < yearDays)
            break;
          offset -= yearDays;
        }
        if (lunarYear > lunar_data_1.LUNAR_MAX_YEAR) {
          throw new RangeError(`\uC74C\uB825 \uBCC0\uD658 \uC9C0\uC6D0 \uBC94\uC704(${lunar_data_1.LUNAR_MAX_YEAR}\uB144)\uB97C \uBC97\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4: ${year}-${month}-${day}`);
        }
        const leapMonth = (0, lunar_data_1.getLeapMonth)(lunarYear);
        let lunarMonth = 1;
        let isLeapMonth = false;
        for (let m = 1; m <= 12; m++) {
          const monthDays = (0, lunar_data_1.getLunarMonthDays)(lunarYear, m);
          if (offset < monthDays) {
            lunarMonth = m;
            isLeapMonth = false;
            break;
          }
          offset -= monthDays;
          if (leapMonth > 0 && m === leapMonth) {
            const leapDays = (0, lunar_data_1.getLeapMonthDays)(lunarYear);
            if (offset < leapDays) {
              lunarMonth = m;
              isLeapMonth = true;
              break;
            }
            offset -= leapDays;
          }
        }
        return {
          year: lunarYear,
          month: lunarMonth,
          day: offset + 1,
          isLeapMonth
        };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/astro/solar-terms-data.js
  var require_solar_terms_data = __commonJS({
    "../engine/node_modules/manseryeok/dist/astro/solar-terms-data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SOLAR_TERM_DATA_MAX_YEAR = exports.SOLAR_TERM_DATA_MIN_YEAR = void 0;
      exports.solarTermCorrectionMinutes = solarTermCorrectionMinutes;
      exports.SOLAR_TERM_DATA_MIN_YEAR = 1800;
      exports.SOLAR_TERM_DATA_MAX_YEAR = 2300;
      var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var OFFSET = 31;
      var PACKED = [
        "fjejeiehegeeececgdjgmhmhlgkekflgninjmhjgffdededgeggihlkomrmrlpjlfiefdfehfjhkikijighehdhchchdiejfjflgmglgjghghihkimhlfibe",
        "ZdYeafdjflgmjnlnnnnmmiieedcdffihlhlfjdicieigjgjgifieifihiihiehcgcjelhnhmgjcgZdYcYcaeefhhkimkokokoilhkfididjfkhkikiiihggh",
        "gijkkmmolokoimhmhmilhlhlhmjnkokmiigdebfchemipkpkpjoininingkghgghhkhlilhkgiehdiflhnjpjokmkljkkkkjjkjkklllnkmhlfjcgafaebgd",
        "iflhminilijhghdgchchcgbfaeafafafZfbgehhjkklikgidfcdbdbgciejfkglhkhkhhefbbZbaceghikjmhmglhmhmimhlgkeibfaeZcabaacafdkhokrm",
        "qknhkdgaeYdZecffhiijikiljkijhifheidjelgmhmjljlilimlompnomkjfgbfZfagcidjfliplsnsormmhgecebgdigkgkfjeiekfkgmgkgjgihijjljlj",
        "jiihhhkjnlqlqjnhkehcfcfdgehfkimmpqpsorlpilfjdiciejfkfkejeiehghihkhkhkgjfjfieiejdidjekhmknnmmkjhecbbbbcdgfiflgnjplrmpknij",
        "dgbebgchfgfeebfbgciflgmhmglfjeidhdgbebccbfejimjmikfgbdYcWbWdYecheihkjklmllkkjjhghehdidididhcgchdjgljolqmpmmkhifiejejekek",
        "gminjpingkdgbcacddhhlinknkmkmknjnhlgkejeifhgihighfgfhgjklnmqlpkoimgkfjejfkglhokolollkiiehbfafagcielhnjpjoinhlhihhhghefdd",
        "bcbcbdcgchdkfmiolplnkkggddadaedhiiljnjnjojnilfhbfZeZebifljmllljmjmjojnjmhkehbeZdYeZeaecggikmooqppnmjiffbdYcZfciflhlilili",
        "lhjgjegeffegejgmiojojoiniokplqlpikffcbaacbgdifkhljnlpmqkohkcgZbYbbefgiiiigggfgghfieidididiekglilhkgjgkhljmmllhjdhaeZeZfb",
        "gdjfmiokqmrnolkjghdgcfcfeifjgjgidichchdifhghghggfgfhghgghfhejflhninhkegadYcYdagdjijkkmkolqlpjngkdhbgcidkfjeidfddeehgkili",
        "likgjfjeidhbhbfbfdhhkjlkliiffccbbcbfchekgmininjninimhmglhkhiigigjfjeididjflipmsmsmqjmhjiiiikikikjkjkkljlgkdibgbgdiglknmo",
        "kmjlikikjikhkgkflflglfkfkfjdjejhmjolnnlnjmgkgkfjekgkhlhmglgkehdfdcdcccefghijlklilgkejdhdidhegdebdZdZcadbdccfdhflhninhldh",
        "beYdYfahejgjhhhgjgjfiehbeaebfdiekhmhlfjfhgiijkkjjihfedbcZbXcYdZfbiflinlqmpknhjegcdccediekfkfkfkfkflglglglgkgjijlkmjlhkgj",
        "hkjomqmqlngjcfadaddffiijjkkmnoooomnhjdhbgciejgkfjdhchdhfjijjikhkglhlhmgkfkejekgmjplplnkjifgcfcecfdhgkimjplrlqkojkhhffdfd",
        "fegehegeeedgdielgmimhlgkeidhcgbgcfdfggkinkojmfibeYcWcYeahdkflhlkmnnolnkjghefegdgdgbfZdYdafdihlkmkmikgheedccZcYcYeahekglh",
        "mgleibeYcXbacddhfkglhlhlinimhmhmgkdidfcedeeefdeeggiknoqoqmoildhcgcgeigjhkhlilikijgfebeZeagdjgnhninhmhmhmhmikhiigheiehdhe",
        "heiejgliolqmrlpkmijhgffgghiikllmlnjmgkeichbebfbgdiflimimjljhjgjglflfjdgaeYdYdZfbgdifjjlmnpnolmghcdZcZebhflgmgmhlikikiigg",
        "eecddefhiililhlgkgminjoknikdgadYbYaaZdbhekhnkqmrlpkngjcfZeZebffhijkikikhjhkjlilikgkekfkhlimjljkikjmkomomlkfgZdXcXeahdjgl",
        "hnjolplpkmihfccZdbgdiekfjeididjekflfkfighhgigighfhgigiiljokojngkdfbdZcZdbfejhmknmnolojmhkehbgbgafbhchchcfcfdeffigkhmhkfi",
        "dgcfbgchchdiejilkllkkhgdbZaZabddhgkhniniokolnjmhjehdhdgegfffbeaeagckgmjpkpingkeicgbecdddfeifkhlhlhjfidgafZfahejgkjlkkkjj",
        "jjkjklkljlikfkejeieieheidigljpmqnpnlkhjeidjekgkfkfkejekejdhdfcdeehhljnkokmikgifiejekfkgjfhghfhffefeeeffhjimjninimfjeidhd",
        "iejgmhlhjggfeebeafafagbhdiekglgkdicgbeceffhegdeabYaYbZcaeafbidjgljmkliifebcZcbeeghfieichbidididhcgbgchdifkhihfgdfchdjgmh",
        "mhkehaeYcWbWcYdceggjjllnmnllijfhcfafbhdjfkgififheigkilklllkikhlhlhmhmglgkgmjplqlpjkgecacZebhejglhninjplqkoilfgcedeefhghg",
        "gffefehgjhlininhmgkgjfififheigkimmmolnhleibeZdYdZgcjgmiokplplmljkhiehcgbfbebebfaeZeagcihkkllkkigfccbbbbdcecgdjfmjojnikfg",
        "adYbYcZedhghjhliniojojnhkeidhbfaeYdYbYZZadchglknlokmhjehaeYcXcYcaeehgihjijhifgedcacZdahdjflflgkgkglhmjnjmjjhfebeaeafagbh",
        "djfmkqmsmrknhhddccddgeififififigjeichbgbfdhfjikjkijgihihikjmimhlfjdicgbgbgbhdjfljomponplnilficgbgdjfkhmhmgkfiehfffffefef",
        "eggihjhjgjeiejekglikhieeabXaXbacddgfigmiplqlpjmfibfZdZfcjfkhihfifjfkgkfkfididhdidjfkeiegefghijlkljigecbYZWaVbYfbiflinkom",
        "plojlhieecccbfcjelfkfjejdjekglhmhlgjghhgjhkhlhkgkgmjnlpknhkbfYbXaZdeghjkllllmmlljkghcgaeZfagdheiehdhcheigjiijhkfkfjejejd",
        "ieiekfmhojnjmihgdeacYbZcafejimkojojnimgjehefcdccbdbdceddecebgcielhmilhjegaeaeaecgeghgihminimhkdgZeYcYeahelhnkmklllmknklj",
        "khifhegdgbgafaeafdhgkjnlomnlmiifedceafbhdjekglglgkglfjeidgdgggjinknjoimgkglhmjpjojnhkegeffegfgfgfhiklnnrnqlohkdhcgdhgkhk",
        "hjgiehfhfffdgdhciejflhmhlgkeicidifkijjijgiehcgbfbgdheiglhnjokpknjjiggeeeeefgiiihiegcfagbgcgcgdhdgdheieifhfeecfchekglfjcf",
        "YcWbWcYeafdgfgiilkolojlghcdZdafcidjejdgcedffghihihhhghghfieidhcgafchfkimimhkehbdZaYZbZebiekgmhojnjoinhlejdhdgfghgjhjfieh",
        "ehfkjnlpmpkpimilhkikjjiihjjlknmnmklfhbfZeagdjgminjojojojmkkjhhfheidjeididichchdjfminknlmlkkijghfhehfihljnkojpimgjfhdebdc",
        "edhgjilklljmimhlgkfjeicgaeYdYdYdZdadcegglkplpjngjcfZeZeZfahcifihjklljkhhddbbabbeciekflfkgkhlkmjmjmhkfidfccbZbXbXdZgdkhok",
        "rlqlpildgbcYaaadcgeifjfkfkgkglfjdichcheihjjjkijhihijlmonplnhjcgZeZebgdheigljomqpronmiidgaeagcjekfkejejejekfighgfhfigkhlh",
        "lhjgjgkglhojpkojkhhfecccddefhijmmonrnsmqknhkdhcgchdkglikhjhhheiekfkfkejdidiejfjekejehfiijmkmikfgbcYaYbZeciekgmjomqoqoolk",
        "ggddbddfhgjgkeididjfkglhlglgjfieifggggeheiekgmiojnhlehaeXbWbYccfhilknkmkmjlikhifhcgbhchejgkgjghfhfihkjnmnnkmhkfkfkflhmgl",
        "gmhninjnhkfgcbbYbYfcjglinjnjnjnhmgkfidfdeeeffgfgffegfgfihkhminhmhlfifhdgeheigkillmlklhkeicfZeYdZeaielhnjnjmjjihifiehdgbf",
        "ZcZdYdZeZfZfbhfjjlmnmkjhfecbbaccfdifkgmhminjmhjfgceaebfehikljmiminhnjojoinimfkdhaeZdabccedigkjolqnqmpkmfibfZfbgeiijijjii",
        "ihiijijjhigjfkgniojnjmikgkhliolqnomkjfgcgbhdjekglgmipkqlrlpjkgfededhfjgjgiegdgchchdididifihjikjkjjhighgghhliminglfichbfa",
        "fbgciekhmjnmmnknjlfjdhcgbhdjflfkeicgbfdfffhgjhighfhfhfiehdgagbhejhliliiefbbZbZcceffigkgmiokpkoingjdhdidifjgifffcfbfcifkh",
        "mjnjmimglfjdhdfdeedfgihjjljjiiffbeZeZgbjfliljmjlimimjlkljkjikglglglfkeididjgnjpmsornomklililhlhlhlhnjnkpjnhkfhcfdfghjjll",
        "mllllklkmjlhlglglgkgjfiehdhdiejgkjmnmpmqlpjohkejdjdjfmhnioknkkjijghegcfbfchfjhmjmimglgkhkikijihfecbabZabbcaebhdliolqlpkl",
        "fhadYcYcaedggfifkhlhmhleidhbgagbiekgkhjihjhkjmknknkliidfadXbWbXcafdiillonqoommjigcdZdYfbiekflgkfkflgmhlilhjhghfjgmininhm",
        "glgnjpmrmrkmggdcbbccffigjjllonqosnpjmeibeaecgeigigififighihjgkgkflfkfkfkfkfkfkflhnlonnnkmgjcfZeZeagdkgmjqlrmrnroomkjgfee",
        "deegfhgjfiehcidjglimjmikfidhdhegfggehekhokqkqjmfhaeXcXeZgdihkkkmmpmqnqloikfidhdiejdjeidgdgfhijlmnnmmllkiiehbgagbgdhekhli",
        "mimgkfgcdaaaZdbhflhnjnjnjninininhlgjghgfhfifjeiehfjhlkpmrmrkoikfifhghhiikjkjllkljkhidgZeZfcifkhnkokojmimikjiigifjeidichc",
        "hchdiekglinkomnmlmjkgiegdgeihlknkojnhmgifhdfcdcdcfeiiklmmklhkfkekflgkehbeZdYdYdaecfefhgliolqlpilfhbfaeagcjfliljkkjkikijh",
        "iffegfhgkhmiojoimililjmknlnklhiffebdafbhdkgmhnjqlrmqkpilfidfefhgkinjmhlfjfkgkhminimimimkmnnonnlljjijknmpnpkmgjcgbgcgfihk",
        "iljmkolomnmjkficgchdjflglfjeichcheifighigkhkgkgkgjfjfidjekhmimilhhfedccbbcdfgjkknlokojoinhkfidgcfcgdiehegdecbebhekfmgmhk",
        "fjdhchbhcgcfcffhjjmjnilfhcdZcZdagciekglilkmlmmmlkijhhghhghehdgafZeagdjhmkplqlojlhifeecebgchdjekflhlglfkdhbfaecffhkjmkljk",
        "hjhkimknjojnglfjfhfhfhfhfhgjjmnqrqsnpjnglejejfkglglglililikhggdfcheiglininimhmhmgmhmiljlkjjhifgdfdfdffhglinkrlrmqlnjkghe",
        "gdgeigkjkkjlhkfkfkejdichchcjekgkgkghffgfiglglgjdfZbWaWaWbXdZecgfjkmnmnlkhgdcbbacbfdidjdidieifjgjfifhehehfggfieidididiflh",
        "ojoimgjcfYbXZYZbbfdiglinkomqmojleibfaebgehhiihhgffghijlkmkmilglglglhlhkgkgkhnkpnqnnlhhbeYdYeagdkflhnjpkqlqkmiifeececgdgd",
        "gdgdfdgdiekflglhkijhiggffefegfgiilkokpkohkehaeXbXcZgdjhlknmmnmnloimfjcgbfZeagbgbgagbfcfgikknkmjkfgdebeaeafagciekhmknlmji",
        "feaaYaZbddhfkhminjpkqlpknilfjdhdgcecdcbdbfbhdjgnjokojngjdgZdYcZbcdgfhgjhihihiggdfadYdZfbigkimjlhjgjgjhjijihidhbfafagbhbg",
        "bidkgnjplpmnjhgdfcebgcifkgkfkfkfjdibfacabbcefghjjjijiihifieiejejdhdfbeaeaeaecgfihjkkmjojnhlficgZeZgcjflhmhkghfffdfcebeae",
        "afbgejgkgkeidhcfeghhihfecaZYXYYZbaebgdielinkojnhjdfZdZdaeeghgjfididjdjejejeidjdjekgkhiihigheigjhlilikgicfZcWcXdaffhhkjkk",
        "llmklkkiggcfbgciekglhkfjdidiekhljmjkkijhlhlhmhlfkekglhnioimghddbabaddhfihkjlkmjnimfkdhbfadbededfdececdbcccfdhdjejeidicgb",
        "fbfbhchdifjijjhjegbeYbWaWbYfbiflglglhkhihhgefcdbbababacacZcXcYeagejhlikgidebcZcZbbbdbfbhekgmglficfZdWbXdZfdhghigjhkhlhlh",
        "lgkgjeidhafZdYbYaZbccefijllmmmkkfgbeYcXdZfbfcgdgdhdgdheheedcdbfcielglfkdididjflhmjnijgffdebebfbfbfchfkiplqlpjmgieeddeeef",
        "gffgfffegegchbhbhchdifjfjfjeidgcgegggjhlhlficfZdXdXdYfahdjgljmmmmkmijegbdbdcfdhdhcgafZebededfddcdbcbdcddcdZbXcXdZhdjeieg",
        "acWZUXTYVZYaZZdcgekgmhmgjcfZcXbWcXdZdacaabacaecfegehfhehdgbgbgafadbcbfehgjhjghedbYYUXTZWdZgcjekfkglglgkficebbcaecgdhdhbf",
        "aeagdigmhmhmhjfhfggghfhfgeggiiljmikehadXaVZXcbfehgjhkikjkjhiegaeZdYeYeZdZdYeZeZeagehghigjgidgbeZdYdZebhdjflhmhkghedbaZWX",
        "WXYbcegjhlhlglglgjfideacZbXZWZXaYaZZaZebhelhmhmfiaeYcVbVbXdaedfghjilikgidfZbWaWaXeahdifjhjijjjijiihhgfeccZbXbWaWcXdZfdig",
        "ljokojlfgbaYWYVaXdagbhcgbgbgcgagZdYbYaZaddgfifiegdfdgfjglgkeiaeYbXZYaZbbccedghkllmjlfibeYbXbXcZebgcgbfafbdbcbabYdYeZeagc",
        "hbhbhbgbfbgchegfgfddaaXYWYXZZccfdielhminikhhddabYaYbbedffefbeZdZfafbfaeZdYdZeafbfbdaaaZdbgejeicfZbUXSWSYUaXcZecefgiikjjh",
        "gddaaZaZbZfbgbfaeZdZdbecgdgehehffedecfbgafZfZfbhdjejdibfYbWYWXYZdchekfkfjeifieidgaeZeaebeefgffddbbacceeigjhlgkeidieieiei",
        "eheheifighfdcZbVZVaWdZgchdjeieichbfacaZaYbYbYbYbXbXbYbXcXdZfafcgdfddccbaZaZaabccedgcgbgaeZcXZUYTYTZXcagdhfgfdebfafafZeYc",
        "WbVZUZTZUZUYUXWYbbgfjgjefbcYaWZVZVbWdYeaebfdfefdeabYZYaaacbechcichbhchdiejfjeidgacYYYVYVaVbWdZfbjelhmhlfibeXaWYXabbecebd",
        "acadbecgcfafaeZfcgehfhdfcebecffijikgidgZdXbWbXcXdZfbhflhmjmjjhefacXbYcZeaeafZdYdYeYeadbddcdddcdcdcdbcbdadafcidkfjehdeZaW",
        "YVYVZYcbeefhgkhmhmfibfZbVaVaXdZeZcYaXZYYbZebfbfadZcYcXcYcWbVZUZXbbefggecaZWVTTSTSWUZVbXdZgdieifidfbcYaXZXZZZbYbWbVbVbXdZ",
        "gbididhcgbdZaZZZYaYbZcZecgdgdgaeXaUXSXTYXbceffffefegfffefceZeYdYeZeaeZdYdXcYechfjikihhdgbfafZeafafbhciejeidgacYYXWYWZYcb",
        "fdheiehehchbfaeZcZcZaYZXYWYWYXZaacbfdiekejcgaeXbVZVaXcZfcgeggegcgbeXbVZSYTZUcYebhchcgcedefdfcebbYYVWUVTWTXTZVaXdbgfjilhj",
        "eeZaWXTVVVYXbYeagbhchchbfZdXbVbVbXbadddgdgchdidiejgkfjcfXbUXSWSVVXZZcbeehhiijhiefZaTXRXSYWbadadZcZbZdadbdcbbZbXcYeZfbgbf",
        "aeZfafciejfgdbZWXTWTYUaWbYdbgdjflgkeibdYZWXXXYYaabaaaaZaYbXbXcXcYcYcZcZcZdZdYdZcaccdfdhdhcfYbVYSXSXUbXeahdifihiigiegbdYa",
        "VZWaYcaeZdYcXbWaYcbdcdccbbaaZZZaaZaXaVbXdagchdgadXZTXRWTXWZZbdbfchdididicgaeYcXcYcYdacaaaYZXaXbZdcgehfjehcfZeYdYbZcacbdb",
        "dbdcdbcbZYWYTZUbYechdjdhbfafafafcecdcbdbfbgbfafYdXcXdZgciekfjegdedcdcdcdcecececeaeYdWbUYUXUYXaZdcfegdfcecbbYbXcWcWcXbWaU",
        "ZUZUaUZVbXbacccfcfbeZcWZUYUZVbYeZgafadZcaaZYXVWUVUWWZZcbeceZdXcXbXcZcabXZUXSURTRTTUVTXUaWeahdjeicfXbUYSWSXUZYaaacZdaeaea",
        "eZcYbXbXbXdYeaebecdcccddefgghgeeabVXSWRXTZWbYdagchfkgkfhddaYYUYUaXeZeZdYdXcXdYeafbfcebccbecfcgbeadadagdiflfkdgZbXYWWWXXY",
        "ZabddfghihjficgYcWaWZWaWbXbXbWaWZXZZacafbfbfaeYdXcWbWbWbWcYebfegfffbcXYTURUTWVaYdZgbhcieififfccZZWYXZYZZYYVXTWSYVcYfbgcg",
        "aeYcVaUYUXTVTTVUZYdagbgbeXaTXRWQWRYUZWaZaccedfefefcdacZcYbWaUaUYTWUXVYWbafdhfighfdcZaVYTZUaVbXcYdZeZfaeZcXZVWVUYWbYebfbf",
        "aeZeafbgbhbgbeZbZaZZaZZXYYZYbcfejglhleicfZcYcYbYcaebecfdedccZbWaUZUZUaXdZfagbgafaeadbcbbcacYbVZUXSXUYVaWcXebhdhfiggfcbZX",
        "WVVWXYZdbfbfafZeZdYcXaVXTXUYWbZebedccZdZeZfagbfYcUYRVPTPVQVTXWYabeeigjghdeZaUWSVSXTaWdZdbecdcdccccbbaaZZZYbYdZeZfbeafaea",
        "gchcgbfZaVVSRSQUSYVcYfagchdidjchadWYSVTUWXaZdacZaXaXZYcYdZdXdXcWbYbacbdbcZbZcceffgefacWYSWQVRXTZXcZfbhdieiefcaaWYTXSXTYU",
        "ZWaWaVZUaVaVbXaabbabYaYZXYXZXZYbYcYfahcgbfabXXUURTRVTYYccdfdgdidichbfYcVZTYTYUZVaVZWXWVYXbYebgbfZdXaWZUYTZTYUYVZZbcdfeec",
        "bYYVUTUSVTYVcYeZfagbgdfdfcebdacabZZZXaVaUaVZUaWcYfbiejejcfabXXXWYWaYbYcYcYcYcYcXbWZUZUYWaacdfffddbbbbabcbeaeZdYdXcXbXbXa",
        "WaVaWcZfeggggdgaeXbWcXcXdZfafafYdXcWYVWWVWUYVaXbZdaeadZcWbVaVaWbXaYZXXVVTUTUUWWXYYaYeafbgcgadYaUXTXTYVbYcZbZZZWZVZVaVZUY",
        "SYTYUaXcYdXbWYVWXXZYcacZZVXSTRSPTPVRXSYVaYdceegeebbYYVVVVVVYWbXdXcWaWaXcXcYdZeZdadadcbdaeZdYcXcXeagcidhbeXaTWSUTVXXaacad",
        "bedfegfgceZbVZUZWbZcacaaXZWYWaZcdefdgcgbfZfafaeZdXcXcZgcheheecaaVYTXSXUZWbYdagbgcichbeabYYYYYXYWXWWVWUWUWUYUaXdafbfbdYaX",
        "YUXUWUYVYXZaaebgbgadXbTWQVQWRYVbXdadbcdcecfbeZcXaVXTXTWSWQVPUPTRVWZacededbaYXVVUTURURWRYUaXdaebdZbWZTWSURUUVXVaXdXdYeZeZ",
        "fafafZeZcWaVWTUUTUSWTXVZYdcgeificfYaTXRVRVVXXYYZYZYZYZZZZXYUYTYTZWbYdZeZdYcYbYdZecedccZbXaUZUZTZTaVaXeahdjfkfhdcbZZWYVYW",
        "ZYbZdadZcXbWbVaUYUXWXXYXaYbZbabaaaYaXcYeYeYcVZTWQVQVRWUZWbZdddgeieicfYbUXRWSXUbXdYdYcXaYaaZaZZWXWWUWVYWaYbXbVaUZVaYdbebc",
        "YYTUPROQQQRRVUZWcZgciejehaeXaTXRVSWUXXYZXbWaWbWaWcXcYdYcWbWbVaXZYZZZZZZZbcddfddaaVWQTNSOURYWbZcbdbecfbebcYXWSURWSYUaWbWa",
        "VZUZVaWcYeadabaZaYaWaXbXaWbYcafbhbgadXZTUSSRSSTVWYZacdeedfbeZcWaUXSWSWRWSWSXSWTWUWWXZYbZeZeXcVZTXRWSXTYUaXcZdadccdZaWWST",
        "PROSRXVbYfafafbfbecdabYYWWUUTUTUVTVRVRWSYVbYebgbfZbWYTWRVSUTUWUYWbYeYeZdXcVZTXSXRXTZWbabcbdbdacadacbdbeacXaUYSXSWTWVXWYX",
        "ZZdbfegeedZZUXSWSYVbXcXbWaVZUZUZVYVXVVXVZXdYeaeYcWaUZUaWcXdZdYaYXXWXVXVXWXWYXaadbfchbfZcWZVXVXVYXaXaXZWXVVVTVRWRWRXSYTZV",
        "bWbWbWaUYTXUVVWYXbWZUXSVQTPUQVRXTZUbWcYcbccbaYXVTTSSUVXWaWZUYSXRXSXTYUXVXUXTYUYWYWXXTVRVQXTaWcXbVZSVOSNRNSPTSVVVYXaYdZdZ",
        "dZbWZUYSXSYTZVZWYWXVVVVWWXZaacccbdZcXbWbWbWaVZVZXbZdaeadYZVUSQSQWSZWcYdYeYeZeZfZdYcWYVWWXYXaXbXZVYTWVYWbYeafbfadZbZaYZYZ",
        "YZXZYabcdceacWaUXRWRVRWT"
      ].join("");
      function solarTermCorrectionMinutes(year, index) {
        if (year < exports.SOLAR_TERM_DATA_MIN_YEAR || year > exports.SOLAR_TERM_DATA_MAX_YEAR)
          return 0;
        return ALPHABET.indexOf(PACKED[(year - exports.SOLAR_TERM_DATA_MIN_YEAR) * 24 + index]) - OFFSET;
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/astro/sun-longitude.js
  var require_sun_longitude = __commonJS({
    "../engine/node_modules/manseryeok/dist/astro/sun-longitude.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.apparentSolarLongitude = apparentSolarLongitude;
      exports.equationOfTimeMinutes = equationOfTimeMinutes;
      exports.solveSolarLongitudeInstant = solveSolarLongitudeInstant;
      var DEG2RAD = Math.PI / 180;
      var RAD2DEG = 180 / Math.PI;
      function julianDayFromMs(ms) {
        return ms / 864e5 + 24405875e-1;
      }
      function normalizeDegrees(deg) {
        const d = deg % 360;
        return d < 0 ? d + 360 : d;
      }
      function solarElements(jd) {
        const T = (jd - 2451545) / 36525;
        const L0 = normalizeDegrees(280.46646 + 36000.76983 * T + 3032e-7 * T * T);
        const M = 357.52911 + 35999.05029 * T - 1537e-7 * T * T;
        const e = 0.016708634 - 42037e-9 * T - 1267e-10 * T * T;
        const Mrad = M * DEG2RAD;
        const C = (1.914602 - 4817e-6 * T - 14e-6 * T * T) * Math.sin(Mrad) + (0.019993 - 101e-6 * T) * Math.sin(2 * Mrad) + 289e-6 * Math.sin(3 * Mrad);
        const epsilon0 = 23 + 26 / 60 + 21.448 / 3600 - 46.815 / 3600 * T - 59e-5 / 3600 * T * T + 1813e-6 / 3600 * T * T * T;
        return { L0, M, e, C, epsilon: epsilon0, T };
      }
      function apparentSolarLongitude(ms) {
        const jd = julianDayFromMs(ms);
        const { L0, C, T } = solarElements(jd);
        const trueLong = L0 + C;
        const omega = 125.04 - 1934.136 * T;
        const apparent = trueLong - 569e-5 - 478e-5 * Math.sin(omega * DEG2RAD);
        return normalizeDegrees(apparent);
      }
      function equationOfTimeMinutes(ms) {
        const jd = julianDayFromMs(ms);
        const { L0, M, e, epsilon } = solarElements(jd);
        const epsRad = epsilon * DEG2RAD;
        const y = Math.tan(epsRad / 2) ** 2;
        const L0rad = L0 * DEG2RAD;
        const Mrad = M * DEG2RAD;
        const E = y * Math.sin(2 * L0rad) - 2 * e * Math.sin(Mrad) + 4 * e * y * Math.sin(Mrad) * Math.cos(2 * L0rad) - 0.5 * y * y * Math.sin(4 * L0rad) - 1.25 * e * e * Math.sin(2 * Mrad);
        return E * RAD2DEG * 4;
      }
      function solveSolarLongitudeInstant(targetLongitude, guessMs) {
        let ms = guessMs;
        const degPerDay = 360 / 365.2422;
        for (let i = 0; i < 8; i++) {
          const current = apparentSolarLongitude(ms);
          let diff = (current - targetLongitude + 540) % 360 - 180;
          if (Math.abs(diff) < 1e-7)
            break;
          ms -= diff / degPerDay * 864e5;
        }
        return ms;
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/time/korea-timezone.js
  var require_korea_timezone = __commonJS({
    "../engine/node_modules/manseryeok/dist/time/korea-timezone.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.koreaCivilOffsetMin = koreaCivilOffsetMin;
      var STANDARD_EPOCHS = [
        { year: 1908, month: 4, day: 1, offsetMin: 510 },
        { year: 1912, month: 1, day: 1, offsetMin: 540 },
        { year: 1954, month: 3, day: 21, offsetMin: 510 },
        { year: 1961, month: 8, day: 10, offsetMin: 540 }
      ];
      var DEFAULT_OFFSET_MIN = 540;
      var DST_INTERVALS = [
        { start: { y: 1948, mo: 6, d: 1, h: 0 }, end: { y: 1948, mo: 9, d: 13, h: 0 } },
        { start: { y: 1949, mo: 4, d: 3, h: 0 }, end: { y: 1949, mo: 9, d: 11, h: 0 } },
        { start: { y: 1950, mo: 4, d: 1, h: 0 }, end: { y: 1950, mo: 9, d: 10, h: 0 } },
        { start: { y: 1951, mo: 5, d: 6, h: 0 }, end: { y: 1951, mo: 9, d: 9, h: 0 } },
        { start: { y: 1955, mo: 5, d: 5, h: 0 }, end: { y: 1955, mo: 9, d: 9, h: 0 } },
        { start: { y: 1956, mo: 5, d: 20, h: 0 }, end: { y: 1956, mo: 9, d: 30, h: 0 } },
        { start: { y: 1957, mo: 5, d: 5, h: 0 }, end: { y: 1957, mo: 9, d: 22, h: 0 } },
        { start: { y: 1958, mo: 5, d: 4, h: 0 }, end: { y: 1958, mo: 9, d: 21, h: 0 } },
        { start: { y: 1959, mo: 5, d: 3, h: 0 }, end: { y: 1959, mo: 9, d: 20, h: 0 } },
        { start: { y: 1960, mo: 5, d: 1, h: 0 }, end: { y: 1960, mo: 9, d: 18, h: 0 } },
        { start: { y: 1987, mo: 5, d: 10, h: 2 }, end: { y: 1987, mo: 10, d: 11, h: 3 } },
        { start: { y: 1988, mo: 5, d: 8, h: 2 }, end: { y: 1988, mo: 10, d: 9, h: 3 } }
      ];
      function key(y, mo, d, h) {
        return ((y * 12 + (mo - 1)) * 31 + (d - 1)) * 24 + h;
      }
      function standardOffsetMin(y, mo, d) {
        const k = key(y, mo, d, 0);
        let offset = DEFAULT_OFFSET_MIN;
        for (const e of STANDARD_EPOCHS) {
          if (k >= key(e.year, e.month, e.day, 0)) {
            offset = e.offsetMin;
          } else {
            break;
          }
        }
        return offset;
      }
      function isDst(y, mo, d, h) {
        const k = key(y, mo, d, h);
        for (const iv of DST_INTERVALS) {
          if (k >= key(iv.start.y, iv.start.mo, iv.start.d, iv.start.h) && k < key(iv.end.y, iv.end.mo, iv.end.d, iv.end.h)) {
            return true;
          }
        }
        return false;
      }
      function koreaCivilOffsetMin(y, mo, d, h) {
        const base = standardOffsetMin(y, mo, d);
        return base + (isDst(y, mo, d, h) ? 60 : 0);
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/time/true-solar-time.js
  var require_true_solar_time = __commonJS({
    "../engine/node_modules/manseryeok/dist/time/true-solar-time.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DEFAULT_LONGITUDE = void 0;
      exports.resolveInstant = resolveInstant;
      var sun_longitude_1 = require_sun_longitude();
      var korea_timezone_1 = require_korea_timezone();
      var MINUTE_MS = 6e4;
      var KST_STANDARD_MERIDIAN = 135;
      var KST_OFFSET_MIN = 540;
      exports.DEFAULT_LONGITUDE = 127.5;
      function resolveInstant(year, month, day, hour, minute, options) {
        const wallMs = Date.UTC(year, month - 1, day, hour, minute, 0);
        if (!options) {
          const instantUTCms2 = wallMs - KST_OFFSET_MIN * MINUTE_MS;
          const apparentMs2 = instantUTCms2 + KST_STANDARD_MERIDIAN * 4 * MINUTE_MS;
          return { instantUTCms: instantUTCms2, apparentMs: apparentMs2 };
        }
        const longitude = options.longitude ?? exports.DEFAULT_LONGITUDE;
        const applyEoT = options.applyEquationOfTime ?? true;
        const applyDst = options.applyHistoricalDst ?? true;
        const civilOffsetMin = applyDst ? (0, korea_timezone_1.koreaCivilOffsetMin)(year, month, day, hour) : KST_OFFSET_MIN;
        const instantUTCms = wallMs - civilOffsetMin * MINUTE_MS;
        const eotMin = applyEoT ? (0, sun_longitude_1.equationOfTimeMinutes)(instantUTCms) : 0;
        const apparentMs = instantUTCms + (longitude * 4 + eotMin) * MINUTE_MS;
        return { instantUTCms, apparentMs };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/ganji.js
  var require_ganji = __commonJS({
    "../engine/node_modules/manseryeok/dist/ganji.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ganjiIndexOf = ganjiIndexOf;
      exports.pillarFromGanji = pillarFromGanji;
      var constants_1 = require_constants();
      function ganjiIndexOf(stemIndex, branchIndex) {
        if ((stemIndex - branchIndex) % 2 !== 0) {
          throw new RangeError(`\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uCC9C\uAC04\xB7\uC9C0\uC9C0 \uC870\uD569\uC785\uB2C8\uB2E4: ${constants_1.HEAVENLY_STEMS[stemIndex]}${constants_1.EARTHLY_BRANCHES[branchIndex]}`);
        }
        return ((6 * stemIndex - 5 * branchIndex) % 60 + 60) % 60;
      }
      function pillarFromGanji(ganjiIndex) {
        return {
          heavenlyStem: constants_1.HEAVENLY_STEMS[ganjiIndex % 10],
          earthlyBranch: constants_1.EARTHLY_BRANCHES[ganjiIndex % 12]
        };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/astro/solar-terms.js
  var require_solar_terms = __commonJS({
    "../engine/node_modules/manseryeok/dist/astro/solar-terms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SOLAR_TERM_NAMES_HANJA = exports.SOLAR_TERM_NAMES = void 0;
      exports.solarTermInstantMs = solarTermInstantMs;
      exports.getSolarTerm = getSolarTerm;
      exports.getSolarTermsOfYear = getSolarTermsOfYear;
      exports.sajuYearForInstant = sajuYearForInstant;
      exports.sajuMonthForInstant = sajuMonthForInstant;
      var sun_longitude_1 = require_sun_longitude();
      var validation_1 = require_validation();
      var solar_terms_data_1 = require_solar_terms_data();
      var SOLAR_TERM_MIN_YEAR = 100;
      var SOLAR_TERM_MAX_YEAR = 9999;
      var MS_PER_MINUTE = 6e4;
      var SOLAR_TERM_CACHE = /* @__PURE__ */ new Map();
      function assertSolarTermYear(year) {
        (0, validation_1.assertIntegerInRange)(year, SOLAR_TERM_MIN_YEAR, SOLAR_TERM_MAX_YEAR, "\uC808\uAE30 \uC5F0\uB3C4(year)");
      }
      exports.SOLAR_TERM_NAMES = [
        "\uC18C\uD55C",
        "\uB300\uD55C",
        "\uC785\uCD98",
        "\uC6B0\uC218",
        "\uACBD\uCE69",
        "\uCD98\uBD84",
        "\uCCAD\uBA85",
        "\uACE1\uC6B0",
        "\uC785\uD558",
        "\uC18C\uB9CC",
        "\uB9DD\uC885",
        "\uD558\uC9C0",
        "\uC18C\uC11C",
        "\uB300\uC11C",
        "\uC785\uCD94",
        "\uCC98\uC11C",
        "\uBC31\uB85C",
        "\uCD94\uBD84",
        "\uD55C\uB85C",
        "\uC0C1\uAC15",
        "\uC785\uB3D9",
        "\uC18C\uC124",
        "\uB300\uC124",
        "\uB3D9\uC9C0"
      ];
      exports.SOLAR_TERM_NAMES_HANJA = [
        "\u5C0F\u5BD2",
        "\u5927\u5BD2",
        "\u7ACB\u6625",
        "\u96E8\u6C34",
        "\u9A5A\u87C4",
        "\u6625\u5206",
        "\u6DF8\u660E",
        "\u7A40\u96E8",
        "\u7ACB\u590F",
        "\u5C0F\u6EFF",
        "\u8292\u7A2E",
        "\u590F\u81F3",
        "\u5C0F\u6691",
        "\u5927\u6691",
        "\u7ACB\u79CB",
        "\u8655\u6691",
        "\u767D\u9732",
        "\u79CB\u5206",
        "\u5BD2\u9732",
        "\u971C\u964D",
        "\u7ACB\u51AC",
        "\u5C0F\u96EA",
        "\u5927\u96EA",
        "\u51AC\u81F3"
      ];
      var LICHUN_INDEX = 2;
      function solarTermLongitude(index) {
        (0, validation_1.assertIntegerInRange)(index, 0, 23, "\uC808\uAE30 \uC778\uB371\uC2A4(index)");
        return (285 + 15 * index) % 360;
      }
      function solarTermInstantMs(year, index) {
        assertSolarTermYear(year);
        const target = solarTermLongitude(index);
        const cacheKey = year * 24 + index;
        const cached = SOLAR_TERM_CACHE.get(cacheKey);
        if (cached !== void 0)
          return cached;
        const month = Math.floor(index / 2);
        const guessMs = Date.UTC(year, month, 15, 0, 0, 0);
        const meeusMin = Math.round((0, sun_longitude_1.solveSolarLongitudeInstant)(target, guessMs) / MS_PER_MINUTE);
        const instantMs = (meeusMin + (0, solar_terms_data_1.solarTermCorrectionMinutes)(year, index)) * MS_PER_MINUTE;
        SOLAR_TERM_CACHE.set(cacheKey, instantMs);
        return instantMs;
      }
      function getSolarTerm(year, index) {
        const ms = solarTermInstantMs(year, index);
        return {
          index,
          name: exports.SOLAR_TERM_NAMES[index],
          hanja: exports.SOLAR_TERM_NAMES_HANJA[index],
          date: new Date(ms)
        };
      }
      function getSolarTermsOfYear(year) {
        return Array.from({ length: 24 }, (_, i) => getSolarTerm(year, i));
      }
      function sajuYearForInstant(instantMs, calendarYear) {
        (0, validation_1.assertFiniteNumber)(instantMs, "\uC808\uB300 \uC21C\uAC04(instantMs)");
        const lichunMs = solarTermInstantMs(calendarYear, LICHUN_INDEX);
        return instantMs < lichunMs ? calendarYear - 1 : calendarYear;
      }
      var JEOL_TO_MONTH = [
        [2, 1],
        [4, 2],
        [6, 3],
        [8, 4],
        [10, 5],
        [12, 6],
        [14, 7],
        [16, 8],
        [18, 9],
        [20, 10],
        [22, 11],
        [0, 12]
      ];
      function sajuMonthForInstant(instantMs) {
        (0, validation_1.assertFiniteNumber)(instantMs, "\uC808\uB300 \uC21C\uAC04(instantMs)");
        const year = new Date(instantMs).getUTCFullYear();
        let bestBoundary = -Infinity;
        let month = 12;
        for (const yr of [year - 1, year, year + 1]) {
          for (const [index, mon] of JEOL_TO_MONTH) {
            const boundary = solarTermInstantMs(yr, index);
            if (boundary <= instantMs && boundary > bestBoundary) {
              bestBoundary = boundary;
              month = mon;
            }
          }
        }
        return month;
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/pillars.js
  var require_pillars = __commonJS({
    "../engine/node_modules/manseryeok/dist/pillars.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.computeFourPillars = computeFourPillars;
      var constants_1 = require_constants();
      var ganji_1 = require_ganji();
      var solar_terms_1 = require_solar_terms();
      var MS_PER_DAY = 864e5;
      function mod(n, m) {
        return (n % m + m) % m;
      }
      function getYearPillar(sajuYear) {
        return {
          heavenlyStem: constants_1.HEAVENLY_STEMS[mod(sajuYear - 4, 10)],
          earthlyBranch: constants_1.EARTHLY_BRANCHES[mod(sajuYear - 4, 12)]
        };
      }
      function getMonthPillar(sajuYear, monthNumber) {
        const yearStem = mod(sajuYear - 4, 10);
        const yearStemMod5 = yearStem % 5;
        const monthStemIndex = (yearStemMod5 * 2 + monthNumber + 1) % 10;
        return {
          heavenlyStem: constants_1.HEAVENLY_STEMS[monthStemIndex],
          earthlyBranch: constants_1.MONTH_BRANCHES[monthNumber]
        };
      }
      function ganjiIndexForDate(year, month, day) {
        const anchorMs = Date.UTC(constants_1.DAY_PILLAR_ANCHOR.year, constants_1.DAY_PILLAR_ANCHOR.month - 1, constants_1.DAY_PILLAR_ANCHOR.day);
        const targetMs = Date.UTC(year, month - 1, day);
        const daysDiff = Math.round((targetMs - anchorMs) / MS_PER_DAY);
        return mod(constants_1.DAY_PILLAR_ANCHOR.ganjiIndex + daysDiff, 60);
      }
      function computeDayPillar(apparentMs, dayBoundary) {
        const d = new Date(apparentMs);
        const baseGanji = ganjiIndexForDate(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
        const isLateZi = d.getUTCHours() >= 23;
        const nextGanji = (baseGanji + 1) % 60;
        let dayGanji = baseGanji;
        let hourStemGanji = baseGanji;
        if (isLateZi) {
          if (dayBoundary === "jasi") {
            dayGanji = nextGanji;
            hourStemGanji = nextGanji;
          } else if (dayBoundary === "splitJasi") {
            hourStemGanji = nextGanji;
          }
        }
        return { pillar: (0, ganji_1.pillarFromGanji)(dayGanji), dayStemIndex: hourStemGanji % 10 };
      }
      function shichenForApparent(apparentMs) {
        const d = new Date(apparentMs);
        const totalMinutes = d.getUTCHours() * 60 + d.getUTCMinutes();
        return Math.floor((totalMinutes + 60) % 1440 / 120);
      }
      function getHourPillar(dayStemIndex, shichen) {
        const hourStemBase = dayStemIndex % 5 * 2;
        const hourStemIndex = (hourStemBase + shichen) % 10;
        return {
          heavenlyStem: constants_1.HEAVENLY_STEMS[hourStemIndex],
          earthlyBranch: constants_1.EARTHLY_BRANCHES[shichen]
        };
      }
      function computeFourPillars(resolved, calendarYear, dayBoundary) {
        const sajuYear = (0, solar_terms_1.sajuYearForInstant)(resolved.instantUTCms, calendarYear);
        const monthNumber = (0, solar_terms_1.sajuMonthForInstant)(resolved.instantUTCms);
        const yearPillar = getYearPillar(sajuYear);
        const monthPillar = getMonthPillar(sajuYear, monthNumber);
        const { pillar: dayPillar, dayStemIndex } = computeDayPillar(resolved.apparentMs, dayBoundary);
        const shichen = shichenForApparent(resolved.apparentMs);
        const hourPillar = getHourPillar(dayStemIndex, shichen);
        return { year: yearPillar, month: monthPillar, day: dayPillar, hour: hourPillar };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/features/ten-gods.js
  var require_ten_gods = __commonJS({
    "../engine/node_modules/manseryeok/dist/features/ten-gods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTenGod = getTenGod;
      exports.getBranchTenGod = getBranchTenGod;
      exports.getTenGodChart = getTenGodChart;
      var constants_1 = require_constants();
      var elements_1 = require_elements();
      var validation_1 = require_validation();
      function getTenGod(dayMaster, target) {
        const dayEl = (0, elements_1.getHeavenlyStemElement)(dayMaster);
        const targetEl = (0, elements_1.getHeavenlyStemElement)(target);
        const sameYinYang = (0, elements_1.getHeavenlyStemYinYang)(dayMaster) === (0, elements_1.getHeavenlyStemYinYang)(target);
        if (targetEl === dayEl) {
          return sameYinYang ? "\uBE44\uACAC" : "\uAC81\uC7AC";
        }
        if (constants_1.ELEMENT_GENERATES[dayEl] === targetEl) {
          return sameYinYang ? "\uC2DD\uC2E0" : "\uC0C1\uAD00";
        }
        if (constants_1.ELEMENT_CONTROLS[dayEl] === targetEl) {
          return sameYinYang ? "\uD3B8\uC7AC" : "\uC815\uC7AC";
        }
        if (constants_1.ELEMENT_CONTROLS[targetEl] === dayEl) {
          return sameYinYang ? "\uD3B8\uAD00" : "\uC815\uAD00";
        }
        return sameYinYang ? "\uD3B8\uC778" : "\uC815\uC778";
      }
      function getBranchTenGod(dayMaster, branch) {
        (0, validation_1.assertEarthlyBranch)(branch);
        return getTenGod(dayMaster, constants_1.BRANCH_MAIN_STEM[branch]);
      }
      function getTenGodChart(pillars) {
        const dayMaster = pillars.day.heavenlyStem;
        return {
          year: {
            stem: getTenGod(dayMaster, pillars.year.heavenlyStem),
            branch: getBranchTenGod(dayMaster, pillars.year.earthlyBranch)
          },
          month: {
            stem: getTenGod(dayMaster, pillars.month.heavenlyStem),
            branch: getBranchTenGod(dayMaster, pillars.month.earthlyBranch)
          },
          day: {
            stem: "\uC77C\uAC04",
            branch: getBranchTenGod(dayMaster, pillars.day.earthlyBranch)
          },
          hour: {
            stem: getTenGod(dayMaster, pillars.hour.heavenlyStem),
            branch: getBranchTenGod(dayMaster, pillars.hour.earthlyBranch)
          }
        };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/features/void-branches.js
  var require_void_branches = __commonJS({
    "../engine/node_modules/manseryeok/dist/features/void-branches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getVoidBranches = getVoidBranches;
      var constants_1 = require_constants();
      var ganji_1 = require_ganji();
      var validation_1 = require_validation();
      function getVoidBranches(dayStem, dayBranch) {
        (0, validation_1.assertHeavenlyStem)(dayStem, "\uC77C\uAC04(dayStem)");
        (0, validation_1.assertEarthlyBranch)(dayBranch, "\uC77C\uC9C0(dayBranch)");
        const dayGanji = (0, ganji_1.ganjiIndexOf)(constants_1.HEAVENLY_STEMS.indexOf(dayStem), constants_1.EARTHLY_BRANCHES.indexOf(dayBranch));
        const xunStartBranch = (dayGanji - dayGanji % 10) % 12;
        return [
          constants_1.EARTHLY_BRANCHES[(xunStartBranch + 10) % 12],
          constants_1.EARTHLY_BRANCHES[(xunStartBranch + 11) % 12]
        ];
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/features/luck-pillars.js
  var require_luck_pillars = __commonJS({
    "../engine/node_modules/manseryeok/dist/features/luck-pillars.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLuckPillars = getLuckPillars;
      var constants_1 = require_constants();
      var ganji_1 = require_ganji();
      var solar_terms_1 = require_solar_terms();
      var validation_1 = require_validation();
      var MS_PER_DAY = 864e5;
      var JEOL_INDICES = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
      function collectJeolInstants(birthYear) {
        const result = [];
        for (let y = birthYear - 1; y <= birthYear + 1; y++) {
          for (const idx of JEOL_INDICES) {
            result.push((0, solar_terms_1.solarTermInstantMs)(y, idx));
          }
        }
        return result.sort((a, b) => a - b);
      }
      function getLuckPillars(params) {
        const { instantUTCms, birthYear, monthPillar, sajuYearStemIndex, gender, count = 10 } = params;
        (0, validation_1.assertFiniteNumber)(instantUTCms, "\uCD9C\uC0DD \uC808\uB300 \uC21C\uAC04(instantUTCms)");
        (0, validation_1.assertIntegerInRange)(birthYear, 101, 9998, "\uC785\uB825 \uC591\uB825 \uC5F0\uB3C4(birthYear)");
        (0, validation_1.assertPillar)(monthPillar, "\uC6D4\uC8FC(monthPillar)");
        (0, validation_1.assertIntegerInRange)(sajuYearStemIndex, 0, 9, "\uC0AC\uC8FC \uC5F0\uAC04 \uC778\uB371\uC2A4(sajuYearStemIndex)");
        (0, validation_1.assertGender)(gender);
        (0, validation_1.assertIntegerInRange)(count, 1, 120, "\uB300\uC6B4 \uAC1C\uC218(count)");
        const yangYear = sajuYearStemIndex % 2 === 0;
        const male = gender === "male";
        const forward = yangYear && male || !yangYear && !male;
        const jeols = collectJeolInstants(birthYear);
        let days;
        if (forward) {
          const next = jeols.find((ms) => ms > instantUTCms);
          days = next ? (next - instantUTCms) / MS_PER_DAY : 0;
        } else {
          const prev = [...jeols].reverse().find((ms) => ms <= instantUTCms);
          days = prev ? (instantUTCms - prev) / MS_PER_DAY : 0;
        }
        const startAge = Math.max(1, Math.round(days / 3));
        let startYears = Math.floor(days / 3);
        const remMonths = (days - startYears * 3) * 4;
        let startMonths = Math.floor(remMonths);
        let startDays = Math.round((remMonths - startMonths) * 30);
        if (startDays >= 30) {
          startDays -= 30;
          startMonths += 1;
        }
        if (startMonths >= 12) {
          startMonths -= 12;
          startYears += 1;
        }
        const monthGanji = (0, ganji_1.ganjiIndexOf)(constants_1.HEAVENLY_STEMS.indexOf(monthPillar.heavenlyStem), constants_1.EARTHLY_BRANCHES.indexOf(monthPillar.earthlyBranch));
        const pillars = [];
        for (let i = 0; i < count; i++) {
          const step = i + 1;
          const ganji = forward ? (monthGanji + step) % 60 : ((monthGanji - step) % 60 + 60) % 60;
          const pillar = (0, ganji_1.pillarFromGanji)(ganji);
          pillars.push({
            age: startAge + i * 10,
            pillar,
            korean: `${pillar.heavenlyStem}${pillar.earthlyBranch}`
          });
        }
        return { forward, startAge, startYears, startMonths, startDays, pillars };
      }
    }
  });

  // ../engine/node_modules/manseryeok/dist/index.js
  var require_dist = __commonJS({
    "../engine/node_modules/manseryeok/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DEFAULT_LONGITUDE = exports.getLuckPillars = exports.getVoidBranches = exports.getTenGodChart = exports.getBranchTenGod = exports.getTenGod = exports.equationOfTimeMinutes = exports.apparentSolarLongitude = exports.SOLAR_TERM_NAMES_HANJA = exports.SOLAR_TERM_NAMES = exports.getSolarTermsOfYear = exports.getSolarTerm = exports.LUNAR_MAX_YEAR = exports.LUNAR_MIN_YEAR = exports.isValidSolarDate = exports.solarToLunar = exports.lunarToSolar = exports.getEarthlyBranchElement = exports.getEarthlyBranchYinYang = exports.getHeavenlyStemElement = exports.getHeavenlyStemYinYang = exports.TEN_GOD_HANJA = exports.FIVE_ELEMENTS = exports.YIN_YANG = exports.EARTHLY_BRANCHES_HANJA = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS_HANJA = exports.HEAVENLY_STEMS = void 0;
      exports.calculateFourPillars = calculateFourPillars;
      exports.fourPillarsToString = fourPillarsToString;
      var constants_1 = require_constants();
      var elements_1 = require_elements();
      var convert_1 = require_convert();
      var lunar_data_1 = require_lunar_data();
      var solar_terms_data_1 = require_solar_terms_data();
      var true_solar_time_1 = require_true_solar_time();
      var pillars_1 = require_pillars();
      var ten_gods_1 = require_ten_gods();
      var void_branches_1 = require_void_branches();
      var luck_pillars_1 = require_luck_pillars();
      var validation_1 = require_validation();
      var constants_2 = require_constants();
      Object.defineProperty(exports, "HEAVENLY_STEMS", { enumerable: true, get: function() {
        return constants_2.HEAVENLY_STEMS;
      } });
      Object.defineProperty(exports, "HEAVENLY_STEMS_HANJA", { enumerable: true, get: function() {
        return constants_2.HEAVENLY_STEMS_HANJA;
      } });
      Object.defineProperty(exports, "EARTHLY_BRANCHES", { enumerable: true, get: function() {
        return constants_2.EARTHLY_BRANCHES;
      } });
      Object.defineProperty(exports, "EARTHLY_BRANCHES_HANJA", { enumerable: true, get: function() {
        return constants_2.EARTHLY_BRANCHES_HANJA;
      } });
      Object.defineProperty(exports, "YIN_YANG", { enumerable: true, get: function() {
        return constants_2.YIN_YANG;
      } });
      Object.defineProperty(exports, "FIVE_ELEMENTS", { enumerable: true, get: function() {
        return constants_2.FIVE_ELEMENTS;
      } });
      Object.defineProperty(exports, "TEN_GOD_HANJA", { enumerable: true, get: function() {
        return constants_2.TEN_GOD_HANJA;
      } });
      var elements_2 = require_elements();
      Object.defineProperty(exports, "getHeavenlyStemYinYang", { enumerable: true, get: function() {
        return elements_2.getHeavenlyStemYinYang;
      } });
      Object.defineProperty(exports, "getHeavenlyStemElement", { enumerable: true, get: function() {
        return elements_2.getHeavenlyStemElement;
      } });
      Object.defineProperty(exports, "getEarthlyBranchYinYang", { enumerable: true, get: function() {
        return elements_2.getEarthlyBranchYinYang;
      } });
      Object.defineProperty(exports, "getEarthlyBranchElement", { enumerable: true, get: function() {
        return elements_2.getEarthlyBranchElement;
      } });
      var convert_2 = require_convert();
      Object.defineProperty(exports, "lunarToSolar", { enumerable: true, get: function() {
        return convert_2.lunarToSolar;
      } });
      Object.defineProperty(exports, "solarToLunar", { enumerable: true, get: function() {
        return convert_2.solarToLunar;
      } });
      Object.defineProperty(exports, "isValidSolarDate", { enumerable: true, get: function() {
        return convert_2.isValidSolarDate;
      } });
      var lunar_data_2 = require_lunar_data();
      Object.defineProperty(exports, "LUNAR_MIN_YEAR", { enumerable: true, get: function() {
        return lunar_data_2.LUNAR_MIN_YEAR;
      } });
      Object.defineProperty(exports, "LUNAR_MAX_YEAR", { enumerable: true, get: function() {
        return lunar_data_2.LUNAR_MAX_YEAR;
      } });
      var solar_terms_1 = require_solar_terms();
      Object.defineProperty(exports, "getSolarTerm", { enumerable: true, get: function() {
        return solar_terms_1.getSolarTerm;
      } });
      Object.defineProperty(exports, "getSolarTermsOfYear", { enumerable: true, get: function() {
        return solar_terms_1.getSolarTermsOfYear;
      } });
      Object.defineProperty(exports, "SOLAR_TERM_NAMES", { enumerable: true, get: function() {
        return solar_terms_1.SOLAR_TERM_NAMES;
      } });
      Object.defineProperty(exports, "SOLAR_TERM_NAMES_HANJA", { enumerable: true, get: function() {
        return solar_terms_1.SOLAR_TERM_NAMES_HANJA;
      } });
      var sun_longitude_1 = require_sun_longitude();
      Object.defineProperty(exports, "apparentSolarLongitude", { enumerable: true, get: function() {
        return sun_longitude_1.apparentSolarLongitude;
      } });
      Object.defineProperty(exports, "equationOfTimeMinutes", { enumerable: true, get: function() {
        return sun_longitude_1.equationOfTimeMinutes;
      } });
      var ten_gods_2 = require_ten_gods();
      Object.defineProperty(exports, "getTenGod", { enumerable: true, get: function() {
        return ten_gods_2.getTenGod;
      } });
      Object.defineProperty(exports, "getBranchTenGod", { enumerable: true, get: function() {
        return ten_gods_2.getBranchTenGod;
      } });
      Object.defineProperty(exports, "getTenGodChart", { enumerable: true, get: function() {
        return ten_gods_2.getTenGodChart;
      } });
      var void_branches_2 = require_void_branches();
      Object.defineProperty(exports, "getVoidBranches", { enumerable: true, get: function() {
        return void_branches_2.getVoidBranches;
      } });
      var luck_pillars_2 = require_luck_pillars();
      Object.defineProperty(exports, "getLuckPillars", { enumerable: true, get: function() {
        return luck_pillars_2.getLuckPillars;
      } });
      var true_solar_time_2 = require_true_solar_time();
      Object.defineProperty(exports, "DEFAULT_LONGITUDE", { enumerable: true, get: function() {
        return true_solar_time_2.DEFAULT_LONGITUDE;
      } });
      function validateBirthInfo(birthInfo) {
        if (birthInfo === null || typeof birthInfo !== "object") {
          throw new TypeError("\uC0DD\uB144\uC6D4\uC77C\uC2DC \uC815\uBCF4(birthInfo)\uB294 \uAC1D\uCCB4\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
        }
        const { year, month, day, hour, minute } = birthInfo;
        if (birthInfo.isLunar !== void 0) {
          (0, validation_1.assertBoolean)(birthInfo.isLunar, "\uC74C\uB825 \uC5EC\uBD80(isLunar)");
        }
        if (birthInfo.isLeapMonth !== void 0) {
          (0, validation_1.assertBoolean)(birthInfo.isLeapMonth, "\uC724\uB2EC \uC5EC\uBD80(isLeapMonth)");
        }
        if (birthInfo.dayBoundary !== void 0) {
          (0, validation_1.assertDayBoundary)(birthInfo.dayBoundary);
        }
        if (birthInfo.gender !== void 0) {
          (0, validation_1.assertGender)(birthInfo.gender);
        }
        if (birthInfo.trueSolarTime !== void 0) {
          const { trueSolarTime } = birthInfo;
          if (trueSolarTime === null || typeof trueSolarTime !== "object" || Array.isArray(trueSolarTime)) {
            throw new TypeError("\uC9C4\uD0DC\uC591\uC2DC \uC635\uC158(trueSolarTime)\uC740 \uAC1D\uCCB4\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
          }
          if (trueSolarTime.longitude !== void 0) {
            (0, validation_1.assertFiniteNumber)(trueSolarTime.longitude, "\uCD9C\uC0DD\uC9C0 \uACBD\uB3C4(trueSolarTime.longitude)");
            if (trueSolarTime.longitude < -180 || trueSolarTime.longitude > 180) {
              throw new RangeError(`\uCD9C\uC0DD\uC9C0 \uACBD\uB3C4(trueSolarTime.longitude)\uB294 -180~180 \uBC94\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${trueSolarTime.longitude}`);
            }
          }
          (0, validation_1.assertOptionalBoolean)(trueSolarTime.applyEquationOfTime, "\uADE0\uC2DC\uCC28 \uBCF4\uC815 \uC5EC\uBD80(trueSolarTime.applyEquationOfTime)");
          (0, validation_1.assertOptionalBoolean)(trueSolarTime.applyHistoricalDst, "\uACFC\uAC70 \uD45C\uC900\uC2DC\xB7\uC11C\uBA38\uD0C0\uC784 \uBCF4\uC815 \uC5EC\uBD80(trueSolarTime.applyHistoricalDst)");
        }
        const minYear = solar_terms_data_1.SOLAR_TERM_DATA_MIN_YEAR;
        const maxYear = birthInfo.isLunar ? lunar_data_1.LUNAR_MAX_YEAR : solar_terms_data_1.SOLAR_TERM_DATA_MAX_YEAR;
        if (!Number.isInteger(year) || year < minYear || year > maxYear) {
          throw new RangeError(`\uC5F0\uB3C4(year)\uB294 ${minYear}~${maxYear} \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${year}`);
        }
        if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
          throw new RangeError(`\uC2DC(hour)\uB294 0~23 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${hour}`);
        }
        if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
          throw new RangeError(`\uBD84(minute)\uC740 0~59 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${minute}`);
        }
        if (birthInfo.isLunar) {
          if (!Number.isInteger(month) || month < 1 || month > 12) {
            throw new RangeError(`\uC6D4(month)\uC740 1~12 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${month}`);
          }
          if (!Number.isInteger(day) || day < 1 || day > 30) {
            throw new RangeError(`\uC74C\uB825 \uC77C(day)\uC740 1~30 \uC815\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${day}`);
          }
        } else if (!(0, convert_1.isValidSolarDate)(year, month, day)) {
          throw new RangeError(`\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC591\uB825 \uB0A0\uC9DC\uC785\uB2C8\uB2E4: ${year}-${month}-${day}`);
        }
      }
      function hanjaOf(pillar) {
        return constants_1.HEAVENLY_STEMS_HANJA[constants_1.HEAVENLY_STEMS.indexOf(pillar.heavenlyStem)] + constants_1.EARTHLY_BRANCHES_HANJA[constants_1.EARTHLY_BRANCHES.indexOf(pillar.earthlyBranch)];
      }
      function elementOf(pillar) {
        return {
          stem: (0, elements_1.getHeavenlyStemElement)(pillar.heavenlyStem),
          branch: (0, elements_1.getEarthlyBranchElement)(pillar.earthlyBranch)
        };
      }
      function yinYangOf(pillar) {
        return {
          stem: (0, elements_1.getHeavenlyStemYinYang)(pillar.heavenlyStem),
          branch: (0, elements_1.getEarthlyBranchYinYang)(pillar.earthlyBranch)
        };
      }
      function calculateFourPillars(birthInfo) {
        validateBirthInfo(birthInfo);
        const { hour, minute } = birthInfo;
        let { year, month, day } = birthInfo;
        if (birthInfo.isLunar) {
          const solar = (0, convert_1.lunarToSolar)(year, month, day, birthInfo.isLeapMonth ?? false);
          year = solar.year;
          month = solar.month;
          day = solar.day;
        }
        const resolved = (0, true_solar_time_1.resolveInstant)(year, month, day, hour, minute, birthInfo.trueSolarTime);
        const dayBoundary = birthInfo.dayBoundary ?? "midnight";
        const pillars = (0, pillars_1.computeFourPillars)(resolved, year, dayBoundary);
        const fourPillars = {
          year: pillars.year,
          month: pillars.month,
          day: pillars.day,
          hour: pillars.hour
        };
        const tenGods = (0, ten_gods_1.getTenGodChart)(fourPillars);
        const voidBranches = (0, void_branches_1.getVoidBranches)(pillars.day.heavenlyStem, pillars.day.earthlyBranch);
        let luckPillars;
        if (birthInfo.gender) {
          luckPillars = (0, luck_pillars_1.getLuckPillars)({
            instantUTCms: resolved.instantUTCms,
            birthYear: year,
            monthPillar: pillars.month,
            sajuYearStemIndex: constants_1.HEAVENLY_STEMS.indexOf(pillars.year.heavenlyStem),
            gender: birthInfo.gender
          });
        }
        const yearString = `${pillars.year.heavenlyStem}${pillars.year.earthlyBranch}`;
        const monthString = `${pillars.month.heavenlyStem}${pillars.month.earthlyBranch}`;
        const dayString = `${pillars.day.heavenlyStem}${pillars.day.earthlyBranch}`;
        const hourString = `${pillars.hour.heavenlyStem}${pillars.hour.earthlyBranch}`;
        const yearHanja = hanjaOf(pillars.year);
        const monthHanja = hanjaOf(pillars.month);
        const dayHanja = hanjaOf(pillars.day);
        const hourHanja = hanjaOf(pillars.hour);
        return {
          ...fourPillars,
          yearElement: elementOf(pillars.year),
          monthElement: elementOf(pillars.month),
          dayElement: elementOf(pillars.day),
          hourElement: elementOf(pillars.hour),
          yearYinYang: yinYangOf(pillars.year),
          monthYinYang: yinYangOf(pillars.month),
          dayYinYang: yinYangOf(pillars.day),
          hourYinYang: yinYangOf(pillars.hour),
          yearString,
          monthString,
          dayString,
          hourString,
          yearHanja,
          monthHanja,
          dayHanja,
          hourHanja,
          tenGods,
          voidBranches,
          luckPillars,
          toString() {
            return fourPillarsToString(fourPillars);
          },
          toObject() {
            return { year: yearString, month: monthString, day: dayString, hour: hourString };
          },
          toHanjaObject() {
            return {
              year: { korean: yearString, hanja: yearHanja },
              month: { korean: monthString, hanja: monthHanja },
              day: { korean: dayString, hanja: dayHanja },
              hour: { korean: hourString, hanja: hourHanja }
            };
          },
          toHanjaString() {
            return `${yearHanja}\u5E74\u67F1, ${monthHanja}\u6708\u67F1, ${dayHanja}\u65E5\u67F1, ${hourHanja}\u6642\u67F1`;
          }
        };
      }
      function fourPillarsToString(fourPillars) {
        const { year, month, day, hour } = fourPillars;
        (0, validation_1.assertPillar)(year, "year");
        (0, validation_1.assertPillar)(month, "month");
        (0, validation_1.assertPillar)(day, "day");
        (0, validation_1.assertPillar)(hour, "hour");
        return [
          `${year.heavenlyStem}${year.earthlyBranch}\uC5F0\uC8FC`,
          `${month.heavenlyStem}${month.earthlyBranch}\uC6D4\uC8FC`,
          `${day.heavenlyStem}${day.earthlyBranch}\uC77C\uC8FC`,
          `${hour.heavenlyStem}${hour.earthlyBranch}\uC2DC\uC8FC`
        ].join(", ");
      }
    }
  });

  // ../engine/src/engine.cjs
  var require_engine = __commonJS({
    "../engine/src/engine.cjs"(exports, module) {
      "use strict";
      var {
        calculateFourPillars,
        getSolarTerm,
        SOLAR_TERM_NAMES,
        SOLAR_TERM_NAMES_HANJA,
        equationOfTimeMinutes
      } = require_dist();
      var KST_STANDARD_MERIDIAN_DEG = 135;
      var DEFAULT_TZ_OFFSET_MINUTES = 540;
      var DEFAULT_LONGITUDE = 126.978;
      var DEFAULT_LATITUDE = 37.5665;
      var NOON_ASSUMPTION = { hour: 12, minute: 0 };
      var RISK_WINDOW_KNOWN_MIN = 120;
      var RISK_WINDOW_UNKNOWN_MIN = 720;
      var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
      var TIME_RE = /^(\d{2}):(\d{2})$/;
      var EngineError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "EngineError";
        }
      };
      var STEMS_HANGUL = ["\uAC11", "\uC744", "\uBCD1", "\uC815", "\uBB34", "\uAE30", "\uACBD", "\uC2E0", "\uC784", "\uACC4"];
      var STEMS_HANJA = ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"];
      var BRANCHES_HANGUL = ["\uC790", "\uCD95", "\uC778", "\uBB18", "\uC9C4", "\uC0AC", "\uC624", "\uBBF8", "\uC2E0", "\uC720", "\uC220", "\uD574"];
      var BRANCHES_HANJA = ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"];
      var STEM_ELEMENTS = ["\uBAA9", "\uBAA9", "\uD654", "\uD654", "\uD1A0", "\uD1A0", "\uAE08", "\uAE08", "\uC218", "\uC218"];
      var BRANCH_ELEMENTS = ["\uC218", "\uD1A0", "\uBAA9", "\uBAA9", "\uD1A0", "\uD654", "\uD654", "\uD1A0", "\uAE08", "\uAE08", "\uD1A0", "\uC218"];
      function sexagenaryIndex(hanja) {
        const s = STEMS_HANJA.indexOf(hanja[0]);
        const b = BRANCHES_HANJA.indexOf(hanja[1]);
        if (s < 0 || b < 0) return -1;
        for (let i = 0; i < 60; i++) {
          if (i % 10 === s && i % 12 === b) return i;
        }
        return -1;
      }
      function parseDateISO(dateISO) {
        if (typeof dateISO !== "string" || !DATE_RE.test(dateISO)) {
          throw new EngineError(`dateISO\uB294 'YYYY-MM-DD' \uD615\uC2DD\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${JSON.stringify(dateISO)}`);
        }
        const year = Number(dateISO.slice(0, 4));
        const month = Number(dateISO.slice(5, 7));
        const day = Number(dateISO.slice(8, 10));
        const probe = new Date(Date.UTC(year, month - 1, day));
        if (probe.getUTCFullYear() !== year || probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) {
          throw new EngineError(`\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB0A0\uC9DC\uC785\uB2C8\uB2E4: ${dateISO}`);
        }
        if (year < 1800 || year > 2300) {
          throw new EngineError(`\uC5F0\uB3C4\uB294 manseryeok \uC808\uC785\uD45C \uC9C0\uC6D0 \uBC94\uC704 1800~2300\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${year}`);
        }
        return { year, month, day };
      }
      function parseTimeISO(timeISO) {
        if (timeISO === null || timeISO === void 0 || timeISO === "") return null;
        if (typeof timeISO !== "string" || !TIME_RE.test(timeISO)) {
          throw new EngineError(`timeISO\uB294 'HH:MM' \uD615\uC2DD \uB610\uB294 null\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4: ${JSON.stringify(timeISO)}`);
        }
        const hour = Number(timeISO.slice(0, 2));
        const minute = Number(timeISO.slice(3, 5));
        if (hour > 23 || minute > 59) {
          throw new EngineError(`\uC2DC\xB7\uBD84 \uBC94\uC704 \uC624\uB958(\uC2DC 0-23, \uBD84 0-59): ${timeISO}`);
        }
        return { hour, minute };
      }
      function requireFiniteNumber(value, name, min, max) {
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new EngineError(`${name}\uB294 \uC720\uD55C\uD55C \uC22B\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${JSON.stringify(value)}`);
        }
        if (value < min || value > max) {
          throw new EngineError(`${name}\uB294 ${min}~${max} \uBC94\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${value}`);
        }
        return value;
      }
      function normalizeInput(raw) {
        if (raw === null || typeof raw !== "object") {
          throw new EngineError("computeChart\uC5D0\uB294 \uC785\uB825 \uAC1D\uCCB4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.");
        }
        const date = parseDateISO(raw.dateISO);
        const time = parseTimeISO(raw.timeISO);
        const latitude = raw.latitude === void 0 ? DEFAULT_LATITUDE : requireFiniteNumber(raw.latitude, "latitude", -90, 90);
        const longitude = raw.longitude === void 0 ? DEFAULT_LONGITUDE : requireFiniteNumber(raw.longitude, "longitude", -180, 180);
        let tzOffsetMinutes = DEFAULT_TZ_OFFSET_MINUTES;
        if (raw.tzOffsetMinutes !== void 0 && raw.tzOffsetMinutes !== null) {
          if (typeof raw.tzOffsetMinutes !== "number" || !Number.isInteger(raw.tzOffsetMinutes) || Math.abs(raw.tzOffsetMinutes) > 840) {
            throw new EngineError(`tzOffsetMinutes\uB294 -840~840\uC758 \uC815\uC218(\uBD84)\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${JSON.stringify(raw.tzOffsetMinutes)}`);
          }
          tzOffsetMinutes = raw.tzOffsetMinutes;
        }
        const dayBoundary = raw.dayBoundary === void 0 ? "midnight" : raw.dayBoundary;
        if (!["midnight", "jasi", "splitJasi"].includes(dayBoundary)) {
          throw new EngineError(`dayBoundary\uB294 'midnight'|'jasi'|'splitJasi' \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4: ${JSON.stringify(dayBoundary)}`);
        }
        const trueSolarTime = raw.trueSolarTime === void 0 ? true : Boolean(raw.trueSolarTime);
        return {
          date,
          time,
          latitude,
          longitude,
          tzOffsetMinutes,
          dayBoundary,
          trueSolarTime
        };
      }
      function isoTimeFromUTCms(ms) {
        const d = new Date(ms);
        return `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;
      }
      function kstFieldsFromUTCms(ms) {
        const d = new Date(ms + DEFAULT_TZ_OFFSET_MINUTES * 6e4);
        return {
          year: d.getUTCFullYear(),
          month: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          hour: d.getUTCHours(),
          minute: d.getUTCMinutes()
        };
      }
      function equationOfTimeAt(instantUTCms) {
        const value = equationOfTimeMinutes(new Date(instantUTCms).getTime());
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new EngineError("\uADE0\uC2DC\uCC28 \uACC4\uC0B0 \uC2E4\uD328: equationOfTimeMinutes\uC5D0 \uC720\uD6A8\uD55C epoch ms\uAC00 \uC804\uB2EC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
        }
        return value;
      }
      function kstIsoLabel(ms) {
        const f = kstFieldsFromUTCms(ms);
        const p = (n) => String(n).padStart(2, "0");
        return `${f.year}-${p(f.month)}-${p(f.day)}T${p(f.hour)}:${p(f.minute)}+09:00`;
      }
      function bracketSolarTerms(instantUTCms, calendarYear) {
        const terms = [];
        for (const y of [calendarYear - 1, calendarYear, calendarYear + 1]) {
          for (let i = 0; i < 24; i++) {
            const t = getSolarTerm(y, i);
            terms.push({ index: t.index, name: t.name, hanja: t.hanja, instantMs: t.date.getTime() });
          }
        }
        terms.sort((a, b) => a.instantMs - b.instantMs);
        let prev = null;
        let next = null;
        for (const t of terms) {
          if (t.instantMs <= instantUTCms && (prev === null || t.instantMs > prev.instantMs)) prev = t;
          if (t.instantMs > instantUTCms && (next === null || t.instantMs < next.instantMs)) next = t;
        }
        return { prev, next };
      }
      function solarTermInfoFor(instantUTCms, calendarYear, riskWindowMinutes) {
        const { prev, next } = bracketSolarTerms(instantUTCms, calendarYear);
        const toTerm = (t, dir) => t && {
          name: t.name,
          hanja: t.hanja,
          index: t.index,
          /** 짝수 인덱스 = 절(節) = 월주 경계. 홀수 = 중(氣). */
          isJieol: t.index % 2 === 0,
          instantUTC: new Date(t.instantMs).toISOString(),
          kst: kstIsoLabel(t.instantMs),
          ...dir === "next" ? { minutesUntil: Math.round((t.instantMs - instantUTCms) / 6e4) } : { minutesSince: Math.round((instantUTCms - t.instantMs) / 6e4) }
        };
        const minutesToNext = next ? Math.round((next.instantMs - instantUTCms) / 6e4) : null;
        const nearBoundary = minutesToNext !== null && minutesToNext <= riskWindowMinutes;
        const yearBoundaryRisk = next !== null && next.index === 2 && nearBoundary;
        return {
          /** 출생 순간이 속한 절기 (절입 직후). */
          current: toTerm(prev, "prev"),
          /** 다음 절입 = 전환일. */
          next: toTerm(next, "next"),
          nearSolarTermBoundary: nearBoundary,
          riskWindowMinutes,
          riskNote: nearBoundary ? `\uCD9C\uC0DD \uC21C\uAC04\uC774 '${next.name}'(${next.hanja}) \uC808\uC785 ${minutesToNext}\uBD84 \uC804\uC785\uB2C8\uB2E4.` + (next.index % 2 === 0 ? " \uC808(\u7BC0) \uACBD\uACC4\uB77C \uC6D4\uC8FC\uAC00 \uBC14\uB014 \uC218 \uC788\uC2B5\uB2C8\uB2E4." : " \uC911(\u6C23)\uC774\uBBC0\uB85C \uC6D4\uC8FC\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.") + (yearBoundaryRisk ? " \uC785\uCD98 \uC9C1\uC804\uC774\uB77C \uC5F0\uC8FC\uB3C4 \uBC14\uB014 \uC218 \uC788\uC2B5\uB2C8\uB2E4." : "") : null
        };
      }
      function pillarJSON(pillar) {
        if (!pillar) return null;
        const s = STEMS_HANGUL.indexOf(pillar.heavenlyStem);
        const b = BRANCHES_HANGUL.indexOf(pillar.earthlyBranch);
        return {
          hangul: `${pillar.heavenlyStem}${pillar.earthlyBranch}`,
          hanja: `${STEMS_HANJA[s]}${BRANCHES_HANJA[b]}`,
          stem: { hangul: pillar.heavenlyStem, hanja: STEMS_HANJA[s], index: s, element: STEM_ELEMENTS[s], yinYang: s % 2 === 0 ? "\uC591" : "\uC74C" },
          branch: { hangul: pillar.earthlyBranch, hanja: BRANCHES_HANJA[b], index: b, element: BRANCH_ELEMENTS[b], yinYang: b % 2 === 0 ? "\uC591" : "\uC74C" },
          element: { stem: STEM_ELEMENTS[s], branch: BRANCH_ELEMENTS[b] },
          yinYang: { stem: s % 2 === 0 ? "\uC591" : "\uC74C", branch: b % 2 === 0 ? "\uC591" : "\uC74C" }
        };
      }
      function round2(x) {
        return Math.round(x * 100) / 100;
      }
      function computeChart(raw) {
        const input = normalizeInput(raw);
        const hasTime = input.time !== null;
        const wallHour = hasTime ? input.time.hour : NOON_ASSUMPTION.hour;
        const wallMinute = hasTime ? input.time.minute : NOON_ASSUMPTION.minute;
        const wallMs = Date.UTC(input.date.year, input.date.month - 1, input.date.day, wallHour, wallMinute, 0);
        const instantUTCms = wallMs - input.tzOffsetMinutes * 6e4;
        const kst = kstFieldsFromUTCms(instantUTCms);
        const trueSolarOptions = input.trueSolarTime ? { longitude: input.longitude, applyEquationOfTime: true, applyHistoricalDst: false } : { longitude: KST_STANDARD_MERIDIAN_DEG, applyEquationOfTime: false, applyHistoricalDst: false };
        const detail = calculateFourPillars({
          year: kst.year,
          month: kst.month,
          day: kst.day,
          hour: kst.hour,
          minute: kst.minute,
          trueSolarTime: trueSolarOptions,
          dayBoundary: input.dayBoundary
        });
        const longitudeMinutes = input.trueSolarTime ? (input.longitude - KST_STANDARD_MERIDIAN_DEG) * 4 : 0;
        const eotMinutes = input.trueSolarTime ? equationOfTimeAt(instantUTCms) : 0;
        const tzDeltaMinutes = input.trueSolarTime ? input.tzOffsetMinutes - KST_STANDARD_MERIDIAN_DEG * 4 : 0;
        const totalCorrectionMinutes = longitudeMinutes + eotMinutes - tzDeltaMinutes;
        const apparentMs = instantUTCms + (input.longitude * 4 + eotMinutes) * 6e4;
        const wallMinutesOfDay = wallHour * 60 + wallMinute;
        const trueSolarTimeMinutes = (Math.round(wallMinutesOfDay + totalCorrectionMinutes) % 1440 + 1440) % 1440;
        const dayShift = Math.floor((wallMinutesOfDay + totalCorrectionMinutes) / 1440);
        const solarTermInfo = solarTermInfoFor(
          instantUTCms,
          kst.year,
          hasTime ? RISK_WINDOW_KNOWN_MIN : RISK_WINDOW_UNKNOWN_MIN
        );
        const pillars = {
          year: pillarJSON(detail.year),
          month: pillarJSON(detail.month),
          day: pillarJSON(detail.day),
          hour: hasTime ? pillarJSON(detail.hour) : null
        };
        return {
          input: {
            dateISO: raw.dateISO,
            timeISO: hasTime ? input.time.hour.toString().padStart(2, "0") + ":" + input.time.minute.toString().padStart(2, "0") : null,
            latitude: input.latitude,
            longitude: input.longitude,
            longitudeConvention: "eastPositive",
            tzOffsetMinutes: input.tzOffsetMinutes,
            dayBoundary: input.dayBoundary,
            trueSolarTime: input.trueSolarTime,
            calendar: "gregorian"
          },
          mode: hasTime ? "full" : "noHour",
          assumptions: hasTime ? [] : [
            `\uCD9C\uC0DD\uC2DC\uAC01 \uBBF8\uC0C1: \uC5F0\xB7\uC6D4\xB7\uC77C\uC8FC\uB294 \uB2F9\uC77C ${NOON_ASSUMPTION.hour.toString().padStart(2, "0")}:${NOON_ASSUMPTION.minute.toString().padStart(2, "0")}(\uC785\uB825 \uC2DC\uAC04\uB300) \uAC00\uC815\uC73C\uB85C \uACC4\uC0B0\uD588\uB2E4. \uC815\uC624\uB294 \uC9C4\uD0DC\uC591\uC2DC \uBCF4\uC815\uC744 \uC801\uC6A9\uD574\uB3C4 \uAC19\uC740 \uB0A0 \uC548\uC5D0 \uBA38\uBB34\uB294 \uC548\uC804 \uC9C0\uC810\uC774\uB2E4.`,
            "\uC2DC\uC8FC\uB294 \uC81C\uACF5\uD558\uC9C0 \uC54A\uB294\uB2E4(hourPillar=null)."
          ],
          instantUTC: new Date(instantUTCms).toISOString(),
          /** 진태양시 시각: 당일 0시 기준 경과 분(0~1439). branch = floor(((x+60)%1440)/120). */
          trueSolarTimeMinutes,
          trueSolarTimeClock: input.trueSolarTime ? isoTimeFromUTCms(apparentMs) : `${String(wallHour).padStart(2, "0")}:${String(wallMinute).padStart(2, "0")}`,
          /** 진태양시 날짜가 입력 날짜 대비 이동한 일수(-1|0|1). */
          trueSolarDayShift: dayShift,
          correctionBreakdown: {
            longitudeMinutes: round2(longitudeMinutes),
            equationOfTimeMinutes: round2(eotMinutes),
            tzOffsetMinutes: input.tzOffsetMinutes,
            tzDeltaFromMeridianMinutes: round2(tzDeltaMinutes),
            totalCorrectionMinutes: round2(totalCorrectionMinutes),
            formula: "total = (longitude - 135) * 4 + equationOfTime - (tzOffsetMinutes - 540)"
          },
          solarTermInfo,
          yearPillar: pillars.year,
          monthPillar: pillars.month,
          dayPillar: pillars.day,
          hourPillar: pillars.hour,
          pillars,
          fourPillarsHanja: hasTime ? `${detail.yearHanja} ${detail.monthHanja} ${detail.dayHanja} ${detail.hourHanja}` : `${detail.yearHanja} ${detail.monthHanja} ${detail.dayHanja}`,
          dayMaster: {
            hangul: detail.day.heavenlyStem,
            hanja: detail.dayHanja[0],
            element: detail.dayElement.stem,
            yinYang: detail.dayYinYang.stem
          },
          tenGods: hasTime ? detail.tenGods : null,
          voidBranches: detail.voidBranches
        };
      }
      module.exports = {
        computeChart,
        sexagenaryIndex,
        EngineError,
        DEFAULT_TZ_OFFSET_MINUTES,
        DEFAULT_LONGITUDE,
        KST_STANDARD_MERIDIAN_DEG,
        SOLAR_TERM_NAMES,
        SOLAR_TERM_NAMES_HANJA
      };
    }
  });

  // ../content/stems.json
  var require_stems = __commonJS({
    "../content/stems.json"(exports, module) {
      module.exports = {
        meta: {
          service: "SAJU(\uAC00\uCE6D)",
          ticket: 12,
          built: "2026-10-02",
          corpus: "source-namchon/namchon-corpus.json (531\uC5D4\uD2B8\uB9AC, \uC774\uB860\uC9D1 367 + \uC0AC\uB840\uC9D1 164)",
          method: "\uC6D0\uB9AC \uC7AC\uAD6C\uC131. \uCF54\uD37C\uC2A4 \uBCF8\uBB38\uC744 \uBB38\uC7A5 \uB2E8\uC704\uB85C \uC62E\uAE30\uC9C0 \uC54A\uACE0 \uADDC\uCE59\uC744 \uC774\uD574\uD574 \uC0C8\uB85C \uC11C\uC220\uD588\uB2E4. legal-boundary-namchon.md\uC758 \uD45C\uD604 \uBCF5\uC81C \uAE08\uC9C0 \uADDC\uCE59\uACFC \uC6A9\uC5B4 \uAC00\uB4DC\uB97C \uB530\uB978\uB2E4. \uBC30\uC81C \uAC1C\uB150 \uBAA9\uB85D\uC740 docs/wayfinder/legal-boundary-namchon.md \uCC38\uC870.",
          unverifiedRule: "\uCF54\uD37C\uC2A4 source_status=\uBBF8\uD655\uC778 \uC5D4\uD2B8\uB9AC\uB97C \uADFC\uAC70\uB85C \uC4F4 \uAC1C\uCCB4\uB294 unverified=true\uC640 unverifiedSourceIds\uB97C \uD568\uAED8 \uD45C\uAE30\uD55C\uB2E4."
        },
        stems: [
          {
            stemHanja: "\u7532",
            stemHangul: "\uAC11",
            element: "\u6728",
            yinyang: "\uC591",
            nature: "\uD070 \uB098\uBB34",
            metaphor: "\uB3D9\uB124 \uC5B4\uADC0\uC758 \uB2F9\uC0B0\uB098\uBB34. \uB0AE\uC5D0\uB294 \uADF8\uB298\uC5D0 \uC0AC\uB78C\uC744 \uBAA8\uC73C\uACE0 \uBC24\uC5D0\uB294 \uD640\uB85C \uC5B4\uADC0\uB97C \uC9C0\uD0A4\uBA70, \uAE30\uB465\uACFC \uB300\uB4E4\uBCF4\uAC00 \uB418\uC5B4 \uC9D1\uC744 \uC138\uC6B0\uB294 \uC874\uC7AC\uB2E4.",
            coreTraits: [
              "\uC704\uB85C \uACE7\uAC8C \uBED7\uB294 \uAC1C\uCC99\uC815\uC2E0\uACFC \uC9C4\uCDE8\uC131",
              "\uC0C8\uB85C\uC6B4 \uAC83\uC744 \uC887\uB294 \uCC3D\uC758\uC131\uACFC \uC9C0\uC801 \uC695\uAD6C",
              "\uBBF8\uB798\uB97C \uC124\uACC4\uD558\uB294 \uAE30\uD68D\uD615 \uC0AC\uACE0",
              "\uC0AC\uB78C\uC744 \uBAA8\uC73C\uACE0 \uD0A4\uC6B0\uB294 \uC5B4\uC9C4 \uB9AC\uB354 \uAE30\uC9C8",
              "\uD55C\uACF3\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uBA74 \uC798 \uC62E\uAE30\uC9C0 \uC54A\uB294 \uACE0\uC9D1\uACFC \uC790\uC874\uC2EC"
            ],
            growthNeeds: [
              "\uBFCC\uB9AC\uB0B4\uB9B4 \uB113\uC740 \uB545(\uD070 \uD759, \uD2B9\uD788 \uB113\uC740 \uBC2D\xB7\uC0B0 \uAC19\uC740 \uD759)",
              "\uC131\uC7A5\uC744 \uC9C0\uD0F1\uD560 \uB9CE\uC740 \uBB3C(\uD070\uBB3C\uC774 \uC774\uC0C1\uC801)",
              "\uAF43\uC744 \uD53C\uC6B8 \uD587\uBE5B",
              "\uB2E4\uB4EC\uC5B4 \uB3D9\uB7C9\uC73C\uB85C \uB9CC\uB4E4 \uC1E0"
            ],
            careerDirections: [
              "\uB300\uD559\uAD50\uC721 \uB4F1 \uB192\uC740 \uAD50\uC721 \uBD84\uC57C",
              "\uAC74\uCD95\xB7\uAC74\uC124",
              "\uC0AC\uB78C\uC744 \uC0C1\uB300\uD558\uB294 \uC77C(\uC778\uC0AC\xB7\uC11C\uBE44\uC2A4\xB7\uC885\uAD50)",
              "\uCD9C\uD310\xB7\uC5B8\uB860\xB7\uBB38\uD559",
              "\uC12C\uC720\xB7\uC885\uC774"
            ],
            dangers: {
              excess: [
                "\uB098\uBB34\uAC00 \uC232\uC744 \uC774\uB8E8\uBA74 \uADF8\uB298\uB85C \uB0B4\uBA74\uC774 \uC5B4\uB450\uC6CC\uC9C0\uACE0 \uBC88\uB1CC\uAC00 \uB9CE\uC544\uC9C4\uB2E4",
                "\uBE44\uC2B7\uD55C \uB098\uBB34\uB07C\uB9AC \uACB9\uCE58\uBA74 \uAC11\uAC11\uD574\uC9C0\uACE0 \uACBD\uC7C1 \uC2A4\uD2B8\uB808\uC2A4\uAC00 \uCEE4\uC9C4\uB2E4",
                "\uD1A0\uB300 \uC5C6\uC774 \uBB34\uB9AC\uD558\uAC8C \uCEE4\uC9C0\uBA74 \uC4F0\uB7EC\uC9C8 \uB54C \uD68C\uBCF5\uC774 \uC5B4\uB835\uB2E4"
              ],
              deficit: [
                "\uC790\uC8FC \uC774\uC2DD\uD558\uBA74 \uACE0\uC0AC\uD558\uB4EF, \uC778\uC5F0\uACFC \uC77C\uD130\uB97C \uC790\uC8FC \uBC14\uAFB8\uBA74 \uC0DD\uD65C\uC774 \uD754\uB4E4\uB9B0\uB2E4",
                "\uBE5B\uC774 \uC5C6\uC73C\uBA74 \uAF43\uC744 \uBABB \uD53C\uC6CC \uC18D\uC774 \uBE48 \uD070 \uAECD\uB370\uAE30\uAC00 \uB418\uAE30 \uC27D\uB2E4",
                "\uB545\uACFC \uBB3C\uC774 \uBD80\uC871\uD558\uBA74 \uB298 \uC0C8 \uB545\uB9CC \uCC3E\uC544 \uBC29\uD669\uD55C\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-007", "T07-024"],
            sources: ["T03-001", "T03-016", "T07-002", "T07-003", "T07-004", "T07-005", "T07-006", "T07-007", "T07-024", "T07-009", "T07-010", "T07-011", "T07-012"]
          },
          {
            stemHanja: "\u4E59",
            stemHangul: "\uC744",
            element: "\u6728",
            yinyang: "\uC74C",
            nature: "\uC791\uC740 \uB098\uBB34(\uD654\uCD08\xB7\uB11D\uCFE8)",
            metaphor: "\uC815\uC6D0\uC758 \uAF43\uB098\uBB34\uC774\uC790 \uB2F4\uC7A5 \uBC16\uC758 \uBBFC\uB4E4\uB808. \uC6B8\uD0C0\uB9AC \uC548\uC5D0\uC11C\uB294 \uC6B0\uC544\uD558\uC9C0\uB9CC, \uBC1F\uD600\uB3C4 \uB2E4\uC2DC \uD53C\uB294 \uAC15\uC778\uD568\uC744 \uD568\uAED8 \uC9C0\uB154\uB2E4.",
            coreTraits: [
              "\uC720\uC5F0\uD568\uACFC \uAC15\uC778\uD55C \uC0DD\uBA85\uB825\uC758 \uACF5\uC874",
              "\uCC3D\uC758\uC131\uACFC \uC9C0\uC801 \uC695\uAD6C, \uC704\uB85C \uBED7\uB294 \uB11D\uCFE8 \uAC19\uC740 \uC0C1\uC2B9 \uC695\uAD6C",
              "\uAC00\uC815\uC744 \uC18C\uC911\uD788 \uC5EC\uAE30\uB294 \uC815\uC6D0\uD615 \uC628\uAE30",
              "\uD070 \uD798\uC744 \uD488\uACE0 \uCC38\uC544\uAC00\uB294 \uC740\uADFC\uD55C \uB048\uAE30\uC640 \uBA85\uC608\uC695",
              "\uACC1\uC744 \uBCF4\uC88C\uD558\uBA70 \uD568\uAED8 \uC790\uB77C\uB294 \uCC38\uBAA8 \uAE30\uC9C8"
            ],
            growthNeeds: [
              "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC791\uC740 \uB545(\uAD6C\uD68D\uB41C \uC815\uC6D0 \uD759)",
              "\uC791\uC740 \uBB3C\uB9CC\uC73C\uB85C \uCDA9\uBD84(\uB2E8, \uB9D1\uC740 \uBB3C)",
              "\uC801\uB2F9\uD55C \uBE5B(\uB108\uBB34 \uB728\uAC70\uC6B0\uBA74 \uC2DC\uB4E0\uB2E4)",
              "\uC7A1\uCD08\uAC00 \uB418\uC9C0 \uC54A\uAC8C \uB2E4\uB4EC\uC5B4\uC904 \uC791\uC740 \uCE7C",
              "\uC62C\uB77C\uAC08 \uD070 \uB098\uBB34(\uAE30\uB308 \uD070 \uC874\uC7AC\uAC00 \uC788\uC73C\uBA74 \uD06C\uAC8C \uC131\uC7A5)"
            ],
            careerDirections: [
              "\uCD08\xB7\uC911\xB7\uACE0 \uAD50\uC721, \uD559\uC6D0 \uAD50\uC721",
              "\uCD9C\uD310\xB7\uC5B8\uB860\xB7\uBB38\uD559",
              "\uC608\uC220(\uAF43\uC758 \uC544\uB984\uB2E4\uC6C0)",
              "\uC815\uCE58 \uB4F1 \uAD8C\uB825 \uCD94\uAD6C \uBD84\uC57C",
              "\uC870\uACBD\xB7\uD50C\uB85C\uB9AC\uC2A4\uD2B8 \uAC19\uC740 \uAE30\uB974\uB294 \uC77C"
            ],
            dangers: {
              excess: [
                "\uAC19\uC740 \uB11D\uCFE8\uB07C\uB9AC \uB4A4\uC5C9\uD0A4\uBA74 \uC11C\uB85C\uC758 \uC131\uC7A5\uC744 \uAC00\uB85C\uB9C9\uB294\uB2E4",
                "\uD070 \uB545 \uACF3\uACF3\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uB824\uB2E4 \uAC00\uC815\xB7\uC9C1\uC7A5\uC774 \uBAA8\uB450 \uD754\uB4E4\uB9B0\uB2E4"
              ],
              deficit: [
                "\uB2E4\uB4EC\uC5B4\uC8FC\uB294 \uD798\uC774 \uC5C6\uC73C\uBA74 \uC7A1\uCD08\uCC98\uB7FC \uC790\uB77C \uAC00\uCE58\uB97C \uC778\uC815\uBC1B\uAE30 \uC5B4\uB835\uB2E4",
                "\uAE30\uB308 \uD070 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uD640\uB85C \uD070 \uBA85\uC608\uB97C \uC887\uB2E4 \uC9C0\uCE5C\uB2E4",
                "\uBB3C\uC774 \uB04A\uAE30\uBA74 \uC131\uC7A5\uC774 \uBA48\uCD94\uACE0 \uC77C\uD130\uAC00 \uBC14\uB010\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-047"],
            sources: ["T03-001", "T03-018", "T07-025", "T07-026", "T07-027", "T07-028", "T07-029", "T07-047", "T07-031", "T07-035", "T07-036"]
          },
          {
            stemHanja: "\u4E19",
            stemHangul: "\uBCD1",
            element: "\u706B",
            yinyang: "\uC591",
            nature: "\uD0DC\uC591",
            metaphor: "\uB9E4\uC77C \uC0C8\uB85C \uB728\uB294 \uB0AE\uC758 \uD0DC\uC591. \uC628 \uC138\uC0C1\uC744 \uBE44\uCD94\uBA70 \uAD6D\uAC00\uC640 \uCD5C\uACE0 \uC790\uB9AC\uB97C \uC0C1\uC9D5\uD55C\uB2E4.",
            coreTraits: [
              "\uD65C\uBC1C\uD558\uACE0 \uB099\uCC9C\uC801 \uCD94\uC9C4\uB825",
              "\uC9C8\uC11C\uC640 \uC608(\u79AE)\uB97C \uC911\uC2DC\uD558\uB294 \uBA85\uC608\uAC10\uAC01",
              "\uBC1D\uC74C\uACFC \uC6C3\uC74C\uC73C\uB85C \uC0AC\uB78C\uC744 \uBAA8\uC73C\uB294 \uBC1C\uC0B0\uB825",
              "\uD604\uC2E4 \uC138\uACC4\uB97C \uB2E4\uB8E8\uB294 \uD310\uB2E8\uB825",
              "\uC790\uC874\uC2EC\uC774 \uC138\uACE0 \uD654\uB824\uD568\uC744 \uCD94\uAD6C\uD558\uB294 \uC774\uBA74"
            ],
            growthNeeds: [
              "\uD558\uB298\uC5D0\uB294 \uD558\uB098\uB9CC \uB5A0\uC57C \uD558\uB294 \uC720\uC77C\uC131",
              "\uBE5B\uC744 \uBC1B\uC544 \uAF43 \uD53C\uC6B8 \uB098\uBB34(\uAC00\uB974\uCE58\uACE0 \uBE5B\uB0B4\uC904 \uB300\uC0C1)",
              "\uB9D1\uC740 \uD070\uBB3C \uC704\uC5D0 \uB5A0\uC11C \uBA85\uC608\uB85C \uBE5B\uB098\uB294 \uBB34\uB300",
              "\uC628\uAE30\uB97C \uBC1B\uC544 \uC0DD\uBA85\uC744 \uAE30\uB97C \uB545",
              "\uC9C0\uB098\uCE5C \uC5F4\uC744 \uC2DD\uD600\uC904 \uBB3C"
            ],
            careerDirections: [
              "\uBC29\uC1A1\xB7\uC608\uC220\xB7\uD64D\uBCF4(\uC9C1\uC811 \uBE5B\uB098\uB294 \uBB34\uB300)",
              "\uC815\uC2E0 \uC9C0\uB3C4\xB7\uC885\uAD50\xB7\uC2EC\uB9AC\xB7\uCCA0\uD559(\uC5B4\uB450\uC6CC\uC84C\uC744 \uB54C)",
              "\uC870\uC9C1\uC758 \uB300\uD45C\xB7\uCD5C\uACE0 \uCC45\uC784\uC790",
              "\uC804\uAE30\xB7\uC804\uC790\xB7\uCEF4\uD4E8\uD130\xB7\uAD00\uAD11"
            ],
            dangers: {
              excess: [
                "\uD0DC\uC591\uC774 \uB458 \uC774\uC0C1 \uB418\uBA74 \uC11C\uB85C\uB97C \uAC00\uB824 \uC624\uD788\uB824 \uC5B4\uB450\uC6CC\uC9C4\uB2E4",
                "\uC5F4\uAE30\uAC00 \uC9C0\uB098\uCE58\uBA74 \uB545\uC774 \uAC08\uB77C\uC9C0\uACE0 \uBB3C\uC774 \uB9D0\uB77C \uC870\uAE09\uD574\uC9C4\uB2E4",
                "\uC720\uC544\uB3C5\uC874 \uAE30\uC9C8\uC774 \uB4DC\uB7EC\uB098 \uC8FC\uBCC0\uC744 \uC0C1\uCC98 \uC785\uD78C\uB2E4"
              ],
              deficit: [
                "\uBE44 \uAD6C\uB984\uC5D0 \uAC00\uB9AC\uBA74 \uBC1D\uC74C\uC744 \uC783\uACE0 \uC758\uC695\uC774 \uAEBE\uC778\uB2E4",
                "\uBC24\uC774 \uB418\uBA74 \uC740\uB454\uD558\uBA70 \uC874\uC7AC\uAC10\uC744 \uC228\uAE34\uB2E4",
                "\uBE5B\uC744 \uBC1B\uC544\uC904 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uC131\uCDE8\uB97C \uB0A8\uC5D0\uAC8C \uB3CC\uB9AC\uAE30 \uC5B4\uB835\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-052", "T07-068"],
            sources: ["T03-019", "T03-020", "T07-048", "T07-049", "T07-050", "T07-051", "T07-052", "T07-054", "T07-057", "T07-059", "T07-061", "T07-062", "T07-066", "T07-067", "T07-068"]
          },
          {
            stemHanja: "\u4E01",
            stemHangul: "\uC815",
            element: "\u706B",
            yinyang: "\uC74C",
            nature: "\uBC24\uC758 \uBE5B(\uB2EC\xB7\uBCC4\xB7\uAC00\uB85C\uB4F1\xB7\uCD1B\uBD88)",
            metaphor: "\uC815\uC6D0 \uCC3D \uB108\uBA38\uB85C \uBE44\uCD94\uB294 \uB2EC, \uC8FC\uB9C9 \uB300\uBB38\uC758 \uB4F1\uBD88. \uBCF4\uC774\uC9C0 \uC54A\uB294 \uACF3\uC5D0\uC11C \uAE38\uC744 \uBC1D\uD600\uC8FC\uB294 \uC774\uC0C1\uC758 \uBE5B\uC774\uB2E4.",
            coreTraits: [
              "\uC774\uC0C1 \uC138\uACC4\uB97C \uC887\uB294 \uC12C\uC138\uD55C \uC5F4\uC815",
              "\uC790\uC560\uB86D\uACE0 \uAD00\uB300\uD55C \uBCA0\uD482",
              "\uB099\uCC9C\uC801\uC774\uACE0 \uBA85\uB791\uD55C \uC628\uAE30",
              "\uC9C8\uC11C\uC640 \uC608\uC758\uB97C \uC9C0\uD0A4\uB294 \uC131\uC2E4\uD568",
              "\uC2A4\uC2A4\uB85C \uD0C0\uC11C \uC8FC\uBCC0\uC744 \uBC1D\uD788\uB294 \uD5CC\uC2E0"
            ],
            growthNeeds: [
              "\uBE5B\uC744 \uB4DC\uB7EC\uB0BC \uC5B4\uB450\uC6B4 \uBC30\uACBD(\uBC24\uC758 \uC870\uAC74)",
              "\uAC00\uB85C\uB4F1\uC774\uB77C\uBA74 \uC9C0\uC9C0\uB300\uAC00 \uB420 \uB098\uBB34",
              "\uC606\uC758 \uD070 \uBE5B\uC744 \uC801\uB2F9\uD788 \uAC00\uB824\uC904 \uC7A5\uCE58",
              "\uBE5B\uB098\uAC8C \uD574\uC904 \uBC24\uC758 \uBB3C \uAE30\uC6B4",
              "\uC791\uAC8C\uB77C\uB3C4 \uAF43 \uD53C\uC6B8 \uC0C1\uB300"
            ],
            careerDirections: [
              "\uBC29\uC1A1 \uC81C\uC791\xB7\uC870\uBA85\xB7PD\uCC98\uB7FC \uB098\uB97C \uB4DC\uB7EC\uB0B4\uC9C0 \uC54A\uB294 \uBC29\uC1A1 \uC77C",
              "\uC815\uC2E0 \uC9C0\uB3C4\xB7\uC885\uAD50\xB7\uC2EC\uB9AC\uC0C1\uB2F4",
              "\uCCA0\uD559\xB7\uC815\uC2E0\uC138\uACC4 \uAD50\uC721",
              "\uC778\uD130\uB137 \uBC29\uC1A1\xB7\uD648\uC1FC\uD551\xB7\uAD11\uACE0",
              "\uC57C\uAC04 \uC9C1\uC885(\uBC24\uC5D0 \uC77C\uD558\uB294 \uC11C\uBE44\uC2A4)"
            ],
            dangers: {
              excess: [
                "\uB2EC\uC774 \uB458\uC774 \uB418\uBA74 \uC11C\uB85C\uC758 \uBE5B\uC744 \uC783\uB294\uB2E4",
                "\uD070 \uD0DC\uC591\uACFC \uD568\uAED8 \uB728\uBA74 \uD604\uC2E4\uACFC \uC774\uC0C1 \uC0AC\uC774\uC5D0\uC11C \uD754\uB4E4\uB9B0\uB2E4",
                "\uBD88\uAE30\uC6B4\uC774 \uC9C0\uB098\uCE58\uBA74 \uB9D0\uB77C\uBC84\uB9B0 \uCD08\uCC98\uB7FC \uC18C\uC9C4\uB41C\uB2E4"
              ],
              deficit: [
                "\uC9C0\uC9C0\uB300 \uC5C6\uB294 \uAC00\uB85C\uB4F1\uC740 \uBE5B\uC744 \uBE44\uCD9C \uACF3\uC774 \uC5C6\uB2E4",
                "\uBC24 \uC5C6\uC774 \uB0AE\uB9CC \uC774\uC5B4\uC9C0\uBA74 \uC874\uC7AC \uC774\uC720\uAC00 \uD750\uB824\uC9C4\uB2E4",
                "\uBE5B\uC744 \uBC1B\uC544\uC904 \uC0AC\uB78C\uC774 \uC5C6\uC73C\uBA74 \uD5CC\uC2E0\uB9CC \uB0A8\uB294\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-091"],
            sources: ["T03-019", "T03-021", "T07-069", "T07-070", "T07-071", "T07-072", "T07-073", "T07-075", "T07-076", "T07-079", "T07-081", "T07-084", "T07-085", "T07-086", "T07-091"]
          },
          {
            stemHanja: "\u620A",
            stemHangul: "\uBB34",
            element: "\u571F",
            yinyang: "\uC591",
            nature: "\uAD6C\uD68D \uC5C6\uB294 \uD06C\uACE0 \uB113\uC740 \uB545",
            metaphor: "\uB2E4\uBAA9\uC801\uB310\uC758 \uD070 \uC81C\uBC29\uC774\uC790 \uB9CC\uBB3C\uC744 \uD0A4\uC6B0\uB294 \uB300\uC9C0. \uBB34\uC5C7\uC774\uB4E0 \uB2F4\uC544 \uAE38\uB7EC\uB0B4\uB294 \uC5B4\uBA38\uB2C8 \uAC19\uC740 \uC874\uC7AC\uB2E4.",
            coreTraits: [
              "\uD3EC\uC6A9\uD558\uACE0 \uAE38\uB7EC\uB0B4\uB294 \uC911\uC2EC\uC758 \uB9C8\uC74C",
              "\uAC15\uD55C \uBBFF\uC74C\uACFC \uC2E0\uC758",
              "\uC2E0\uC911\uD558\uC9C0\uB9CC \uBCF4\uC218\uC801\uC778 \uC548\uC815 \uCD94\uAD6C",
              "\uBB3C(\uC790\uC6D0)\uC744 \uB9C9\uC544 \uC800\uC7A5\uD558\uB294 \uACBD\uC601 \uAC10\uAC01",
              "\uC870\uC9C1\uACFC \uACF5\uB3D9\uCCB4\uB97C \uC138\uC6B0\uB294 \uD1A0\uB300\uB825"
            ],
            growthNeeds: [
              "\uAC00\uCE58\uB97C \uB9CC\uB4E4\uC5B4\uC904 \uD070 \uB098\uBB34(\uAC00\uC7A5 \uC54C\uB9DE\uC740 \uC774\uC2DD\uC7AC)",
              "\uC801\uC808\uD55C \uC218\uBD84(\uB9D1\uC740 \uBB3C\uC774\uC5B4\uC57C \uC7AC\uBB3C\uC774 \uB41C\uB2E4)",
              "\uC0DD\uBA85\uC744 \uB3CB\uC6B0\uB294 \uC628\uAE30",
              "\uC5F4\uB9E4\uB97C \uAC70\uB450\uACE0 \uB2E4\uB4EC\uC744 \uC1E0",
              "\uD669\uBB34\uC9C0\uAC00 \uB418\uC9C0 \uC54A\uAC8C \uC2EC\uC744 \uC778\uC7AC\xB7\uBAA9\uD45C"
            ],
            careerDirections: [
              "\uBD80\uB3D9\uC0B0\xB7\uAC74\uC124\xB7\uD1A0\uBAA9",
              "\uACBD\uC601\xB7\uACBD\uC601\uC790 \uC5ED\uD560",
              "\uB18D\uC5C5\xB7\uC2DD\uD488",
              "\uAD50\uC721(\uC778\uC7AC \uC591\uC131)",
              "\uC885\uAD50\xB7\uC218\uC591 \uACC4\uC5F4(\uB545\uC774 \uB9D0\uB77C\uC788\uC744 \uB54C)"
            ],
            dangers: {
              excess: [
                "\uB545\uB9CC \uB113\uACE0 \uC2EC\uC744 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uC6B4\uB3D9\uC7A5\uCC98\uB7FC \uBE44\uC5B4 \uBCF4\uC778\uB2E4",
                "\uBB3C\uC744 \uACFC\uD558\uAC8C \uB9C9\uC73C\uBA74 \uD759\uD0D5\uBB3C\uC774 \uB418\uC5B4 \uC7AC\uBB3C\uC774 \uD769\uC5B4\uC9C4\uB2E4",
                "\uC548\uC815\uB9CC \uC887\uB2E4 \uAC1C\uD601 \uD0C0\uC774\uBC0D\uC744 \uB193\uCE5C\uB2E4"
              ],
              deficit: [
                "\uB2F4\uC544\uB458 \uADF8\uB987\uC774 \uC791\uC73C\uBA74 \uD070 \uAE30\uD68C\uB97C \uB193\uCE5C\uB2E4",
                "\uBB3C\uC744 \uB9C9\uC9C0 \uBABB\uD558\uBA74 \uC790\uC6D0\uC774 \uD758\uB7EC\uAC00 \uC815\uCC29\uC774 \uC5B4\uB835\uB2E4",
                "\uBBFF\uC74C\uC758 \uBFCC\uB9AC\uAC00 \uC57D\uD558\uBA74 \uC911\uC2EC\uC774 \uD754\uB4E4\uB9B0\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-114"],
            sources: ["T03-005", "T03-010", "T03-022", "T03-023", "T07-092", "T07-093", "T07-094", "T07-095", "T07-096", "T07-098", "T07-099", "T07-102", "T07-104", "T07-108", "T07-114"]
          },
          {
            stemHanja: "\u5DF1",
            stemHangul: "\uAE30",
            element: "\u571F",
            yinyang: "\uC74C",
            nature: "\uAD6C\uD68D\uC774 \uC815\uB9AC\uB41C \uC791\uC740 \uB545(\uC815\uC6D0)",
            metaphor: "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC9D1 \uC55E \uC815\uC6D0. \uC54C\uB9DE\uAC8C \uC2EC\uACE0 \uAC00\uAFB8\uBA74 \uC544\uB984\uB2F5\uC9C0\uB9CC, \uD070 \uB098\uBB34\uB97C \uC2EC\uC73C\uBA74 \uB545\uC774 \uAC08\uB77C\uC9C4\uB2E4.",
            coreTraits: [
              "\uAC00\uC815 \uC911\uC2EC\uC758 \uC815(\u60C5)\uACFC \uC628\uAE30",
              "\uBC1B\uC544 \uAE38\uB7EC\uB0B4\uB294 \uB108\uADF8\uB7EC\uC6C0",
              "\uC2E0\uC911\uD558\uACE0 \uC548\uC815\uC801\uC778 \uCC98\uC138",
              "\uC791\uC740 \uAC83\uC744 \uC815\uC131\uC2A4\uB808 \uB2E4\uB4EC\uB294 \uAF3C\uAF3C\uD568",
              "\uD070 \uBA85\uC608\uB97C \uBD80\uB974\uACE0 \uC2F6\uC740 \uC18D\uB9C8\uC74C"
            ],
            growthNeeds: [
              "\uC815\uC6D0\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uC791\uC740 \uB098\uBB34",
              "\uC791\uC740 \uBB3C(\uB9D1\uC740 \uBE44)",
              "\uC801\uB2F9\uD55C \uD587\uBE5B(\uAC15\uD558\uBA74 \uC815\uC6D0\uC774 \uB9C8\uB978\uB2E4)",
              "\uC804\uC9C0\uAC00\uC704 \uAC19\uC740 \uC791\uC740 \uCE7C",
              "\uAC10\uB2F9 \uBC94\uC704 \uC548\uC758 \uC7AC\uBB3C\uACFC \uBAA9\uD45C"
            ],
            careerDirections: [
              "\uC720\uC544\xB7\uCD08\xB7\uC911\xB7\uACE0 \uAD50\uC721, \uD559\uC6D0",
              "\uC870\uACBD\xB7\uC6D0\uC608\xB7\uAF43\uC9D1",
              "\uC18C\uADDC\uBAA8 \uBD80\uB3D9\uC0B0\xB7\uC784\uB300",
              "\uC131\uC9C1\xB7\uC0C1\uB2F4(\uB545\uC774 \uB9D0\uB77C\uC788\uC744 \uB54C)",
              "\uAC00\uC815 \uAE30\uBC18 \uC18C\uADDC\uBAA8 \uC0AC\uC5C5"
            ],
            dangers: {
              excess: [
                "\uC815\uC6D0\uC774 \uB458\uC774 \uB418\uBA74 \uB450 \uC9D1 \uC0B4\uB9BC\uCC98\uB7FC \uB9C8\uC74C\uC774 \uAC08\uB77C\uC9C4\uB2E4",
                "\uAC10\uB2F9 \uBABB \uD560 \uB098\uBB34\uB97C \uB4E4\uC774\uBA74 \uB545\uC774 \uAC08\uB77C\uC9C0\uACE0 \uAC00\uC815\uC774 \uD754\uB4E4\uB9B0\uB2E4"
              ],
              deficit: [
                "\uD070\uBB3C \uC55E\uC5D0\uC11C \uC81C\uBC29\uC774 \uBB34\uB108\uC9C0\uBA74 \uC0C1\uCC98\uAC00 \uD06C\uB2E4",
                "\uC791\uC740 \uC7AC\uBB3C\uC5D0\uB3C4 \uB9CC\uC871\uD558\uC9C0 \uBABB\uD558\uBA74 \uAD74\uBCF5\uC744 \uBC18\uBCF5\uD55C\uB2E4",
                "\uBE5B\uACFC \uBB3C\uC774 \uC5C6\uC73C\uBA74 \uC815\uC6D0\uC774 \uD669\uD3D0\uD574\uC9C4\uB2E4"
              ]
            },
            unverified: true,
            unverifiedSourceIds: ["T07-118", "T07-137"],
            sources: ["T03-011", "T03-022", "T03-024", "T07-115", "T07-116", "T07-117", "T07-118", "T07-119", "T07-121", "T07-122", "T07-125", "T07-127", "T07-128", "T07-132", "T07-137"]
          },
          {
            stemHanja: "\u5E9A",
            stemHangul: "\uACBD",
            element: "\u91D1",
            yinyang: "\uC591",
            nature: "\uD070 \uCE7C(\uC1E0\xB7\uBC14\uC704\xB7\uCCA0\uAC15\xB7\uC790\uB3D9\uCC28)",
            metaphor: "\uCE7C\uC790\uB8E8 \uB07C\uC6B4 \uB300\uAC80. \uB2E4\uB4EC\uC5B4\uC9C0\uBA74 \uC0AC\uD68C\uC758 \uB9AC\uB354\uAC00 \uB418\uACE0, \uCE7C\uC790\uB8E8 \uC5C6\uC774 \uD718\uB450\uB974\uBA74 \uC790\uAE30 \uC190\uC744 \uBCA4\uB2E4.",
            coreTraits: [
              "\uB0C9\uCCA0\uD55C \uACB0\uB2E8\uB825\uACFC \uC815\uB9AC \uB2A5\uB825",
              "\uADDC\uBC94\xB7\uADDC\uCE59\uC744 \uC9C0\uD0A4\uB294 \uCC45\uC784\uAC10\uACFC \uAD8C\uC704",
              "\uC633\uACE0 \uADF8\uB984\uC744 \uAC00\uB974\uB294 \uC815\uC758\uAC10",
              "\uC758\uB9AC\uC640 \uAC15\uD55C \uC18C\uC18D\uAC10",
              "\uC7AC\uBB3C\uB85C \uC790\uC2E0\uC744 \uC99D\uBA85\uD558\uACE0 \uC2F6\uC740 \uC695\uAD6C"
            ],
            growthNeeds: [
              "\uD070 \uCE7C\uC790\uB8E8(\uD070 \uB098\uBB34 \uAC19\uC740 \uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790)",
              "\uC2E4\uB825\uC744 \uB2F4\uAE08\uC9C8\uD560 \uB9D1\uC740 \uD070\uBB3C",
              "\uBB3C\uC744 \uAC00\uB458 \uD2BC\uD2BC\uD55C \uC81C\uBC29",
              "\uCE7C\uB0A0\uC744 \uBE5B\uB0B4\uC904 \uD0DC\uC591(\uB2E8, \uC9C0\uB098\uCE58\uBA74 \uBB34\uB38C\uC9C4\uB2E4)",
              "\uAD8C\uD55C\uC744 \uD589\uC0AC\uD560 \uBA85\uBD84\uACFC \uC790\uACA9"
            ],
            careerDirections: [
              "\uBC95\xB7\uAD70\xB7\uACBD \uB4F1 \uAD6D\uAC00 \uAD8C\uD55C \uC9C1\uAD70",
              "\uAE08\uC735\xB7\uACBD\uC601\xB7\uACBD\uC81C",
              "\uC758\uD559\xB7\uC0DD\uBA85\uACF5\uD559\xB7\uC758\uC57D",
              "\uAE30\uACC4\xB7\uAE08\uC18D\xB7\uC790\uB3D9\uCC28\xB7\uC804\uAE30",
              "\uC6B4\uB3D9\xB7\uCCB4\uC721"
            ],
            dangers: {
              excess: [
                "\uCE7C\uC790\uB8E8 \uC5C6\uC774 \uAD8C\uD55C\uC744 \uC4F0\uBA74 \uB0A8\uC640 \uC790\uC2E0 \uBAA8\uB450 \uB2E4\uCE5C\uB2E4",
                "\uD070 \uC5F4\uAE30 \uC18D\uC5D0 \uB4E4\uC5B4\uAC00\uBA74 \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9C0\uACE0 \uBA85\uC608\uAC00 \uC2E4\uCD94\uB41C\uB2E4",
                "\uBE44\uC2B7\uD55C \uCE7C\uB07C\uB9AC \uACB9\uCE58\uBA74 \uC790\uB9AC\uB97C \uB450\uACE0 \uB2E4\uD22C\uAC8C \uB41C\uB2E4"
              ],
              deficit: [
                "\uBB3C\uC774 \uC5C6\uC73C\uBA74 \uC2E4\uB825\uC744 \uB2F4\uAE08\uC9C8\uD560 \uAE30\uD68C\uAC00 \uC0AC\uB77C\uC9C4\uB2E4",
                "\uB2E4\uB4EC\uC744 \uB300\uC0C1\uC774 \uC5C6\uC73C\uBA74 \uCE7C\uC774 \uB179\uC2AC\uACE0 \uC874\uC7AC \uAC00\uCE58\uAC00 \uD750\uB824\uC9C4\uB2E4",
                "\uD759\uD0D5\uBB3C\uC5D0 \uBE60\uC9C0\uBA74 \uD310\uB2E8\uC774 \uD750\uB824\uC9C0\uACE0 \uB179\uC2A8\uB2E4"
              ]
            },
            unverified: false,
            sources: ["T03-013", "T03-014", "T03-026", "T07-138", "T07-139", "T07-140", "T07-141", "T07-142", "T07-144", "T07-145", "T07-146", "T07-148", "T07-150", "T07-152", "T07-156", "T07-158", "T07-160"]
          },
          {
            stemHanja: "\u8F9B",
            stemHangul: "\uC2E0",
            element: "\u91D1",
            yinyang: "\uC74C",
            nature: "\uC791\uC740 \uCE7C(\uBA54\uC2A4\xB7\uCE68\xB7\uAC00\uC704\xB7\uBCF4\uC11D)",
            metaphor: "\uC815\uBC00\uD55C \uBA54\uC2A4\uC640 \uC804\uC9C0\uAC00\uC704. \uC12C\uC138\uD558\uAC8C \uC4F0\uBA74 \uC0AC\uB78C\uC744 \uC0B4\uB9AC\uACE0 \uAC00\uAFB8\uC9C0\uB9CC, \uC790\uB8E8 \uC5C6\uC774 \uC4F0\uBA74 \uC790\uC2E0\uC744 \uBCA4\uB2E4.",
            coreTraits: [
              "\uC608\uB9AC\uD55C \uC9D1\uC911\uB825\uACFC \uC815\uBC00 \uC791\uC5C5 \uB2A5\uB825",
              "\uB0C9\uCCA0\uD55C \uD310\uB2E8\uACFC \uACB0\uB2E8",
              "\uAE34\uC7A5\uAC10 \uC788\uB294 \uADDC\uBC94 \uC900\uC218\uC640 \uC758\uB9AC",
              "\uBE5B\uB098\uB294 \uC790\uB9AC\uB97C \uAC08\uAD6C\uD558\uB294 \uBA85\uC608\uC695",
              "\uC18D\uB0B4\uB97C \uC798 \uB4DC\uB7EC\uB0B4\uC9C0 \uC54A\uB294 \uC608\uBBFC\uD568"
            ],
            growthNeeds: [
              "\uC54C\uB9DE\uC740 \uC791\uC740 \uCE7C\uC790\uB8E8(\uC791\uC740 \uB098\uBB34)",
              "\uC2E4\uB825\uC744 \uB2F4\uAE00 \uC801\uB2F9\uB7C9\uC758 \uB9D1\uC740 \uBB3C",
              "\uBB3C\uC744 \uB9C9\uC544\uC904 \uC54C\uB9DE\uC740 \uC791\uC740 \uC81C\uBC29",
              "\uC790\uC2E0\uC744 \uBE5B\uB0B4\uC904 \uD070 \uBE5B(\uB2E4\uB9CC \uD569\uC73C\uB85C \uBB36\uC774\uC9C0 \uC54A\uAC8C)",
              "\uD569\uB3D9\xB7\uC870\uC9C1\uC73C\uB85C \uD798\uC744 \uBCF4\uD0DC\uC904 \uB3D9\uB8CC"
            ],
            careerDirections: [
              "\uC758\uC0AC\xB7\uAC04\uD638\uC0AC\xB7\uD55C\uC758\uC0AC \uB4F1 \uC758\uB8CC \uACC4\uC5F4",
              "\uD68C\uACC4\xB7\uC138\uBB34\xB7\uBC95\uBB34 \uB4F1 \uAD6D\uAC00\uC790\uACA9\uC99D \uC804\uBB38\uC9C1",
              "\uBBF8\uC6A9\xB7\uD328\uC158\xB7\uB514\uC790\uC778(\uAC00\uC704)",
              "\uC815\uBC00 \uAE30\uACC4\xB7\uAE08\uC18D\xB7\uBCF4\uC11D",
              "\uD56D\uACF5\xB7\uC815\uBCF4\uCC98\uB7FC \uB0A0\uB835\uD55C \uBD84\uC57C"
            ],
            dangers: {
              excess: [
                "\uCE7C\uC774 \uC5EC\uB7EC \uAC1C \uACB9\uCE58\uBA74 \uC2E0\uACBD\uC804\uACFC \uC608\uBBFC\uD568\uC774 \uCEE4\uC9C4\uB2E4",
                "\uD070 \uC7AC\uBB3C\uC744 \uD640\uB85C \uBCA0\uB824\uB2E4 \uCE7C\uB0A0\uC774 \uC0C1\uD55C\uB2E4"
              ],
              deficit: [
                "\uCE7C\uC790\uB8E8\uAC00 \uC5C6\uC73C\uBA74 \uC798\uBABB\uB41C \uBC29\uD5A5\uC73C\uB85C \uD798\uC744 \uC368 \uC0C1\uCC98 \uC785\uB294\uB2E4",
                "\uBB3C\uC774 \uC5C6\uC73C\uBA74 \uC2E4\uB825\uC744 \uD3BC \uBB34\uB300\uAC00 \uC0AC\uB77C\uC9C4\uB2E4",
                "\uD070 \uBE5B\uC5D0 \uBD99\uC73C\uBA74 \uC81C \uBE5B\uC744 \uBABB \uB0B4\uACE0 \uAC00\uB824\uC9C4\uB2E4"
              ]
            },
            unverified: false,
            sources: ["T03-014", "T07-161", "T07-162", "T07-163", "T07-164", "T07-165", "T07-167", "T07-168", "T07-170", "T07-171", "T07-173", "T07-174", "T07-176", "T07-180", "T07-183"]
          },
          {
            stemHanja: "\u58EC",
            stemHangul: "\uC784",
            element: "\u6C34",
            yinyang: "\uC591",
            nature: "\uD070\uBB3C(\uD638\uC218\xB7\uAC15\xB7\uBC14\uB2E4)",
            metaphor: "\uB2E4\uBAA9\uC801\uB310\uC73C\uB85C \uAC00\uB454 \uD070 \uD638\uC218. \uC81C\uBC29\uC774 \uC788\uC73C\uBA74 \uC218\uB825\uC774 \uB418\uC9C0\uB9CC, \uC5C6\uC73C\uBA74 \uBC29\uD669\uD558\uB294 \uD64D\uC218\uAC00 \uB41C\uB2E4.",
            coreTraits: [
              "\uBAA8\uB4E0 \uAC83\uC744 \uD488\uB294 \uC778\uB0B4\uC640 \uCE68\uBB35",
              "\uC544\uB798\uB85C \uD750\uB974\uB4EF \uACB8\uC190\uD55C \uCC98\uC138",
              "\uB9C9\uD78C \uACF3\uC744 \uCC3E\uC544 \uD750\uB974\uB294 \uCE5C\uD654\uB825",
              "\uC7A5\uC560\uB97C \uD5E4\uCE58\uB294 \uC720\uC5F0\uD55C \uC9C0\uD61C",
              "\uAE30\uC5B5\uC744 \uC624\uB798 \uC800\uC7A5\uD558\uB294 \uB450\uB1CC"
            ],
            growthNeeds: [
              "\uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uD070 \uC81C\uBC29(\uAC00\uC7A5 \uC54C\uB9DE\uC740 \uD759)",
              "\uC81C\uBC29\uC744 \uAD73\uAC8C \uD560 \uC2EC\uAE34 \uB098\uBB34",
              "\uC218\uB7C9\uC744 \uC720\uC9C0\uD560 \uC218\uC6D0\uC9C0(\uC1E0)",
              "\uB9D1\uC74C\uC744 \uC9C0\uCF1C\uC904 \uAD00\uB9AC",
              "\uC218\uBA74 \uC704\uC5D0 \uB730 \uBE5B(\uBA85\uC608\uC758 \uBB34\uB300)"
            ],
            careerDirections: [
              "\uD574\uC678 \uC0AC\uC5C5\xB7\uC218\uCD9C\uC785",
              "\uC720\uD1B5\xB7\uBB3C\uB958\xB7\uBB34\uC5ED",
              "\uC74C\uC2DD\xB7\uC2DD\uD488",
              "\uC815\uBCF4\xB7\uAD50\uC721",
              "\uC218\uC790\uC6D0\xB7\uD574\uC591 \uAD00\uB828 \uC0B0\uC5C5"
            ],
            dangers: {
              excess: [
                "\uBB3C\uC774 \uACB9\uCCD0\uC9C0\uBA74 \uC81C\uBC29\uC774 \uBB34\uB108\uC9C0\uACE0 \uC0DD\uD65C \uC804\uBC18\uC774 \uD754\uB4E4\uB9B0\uB2E4",
                "\uC815\uD574\uC8FC\uB294 \uD798\uC774 \uC5C6\uC73C\uBA74 \uD55C\uACF3\uC5D0 \uBABB \uBA38\uBB3C\uACE0 \uB5A0\uB3C8\uB2E4"
              ],
              deficit: [
                "\uC218\uC6D0\uC774 \uB04A\uAE30\uBA74 \uD798\uC774 \uC0AC\uB77C\uC9C0\uACE0 \uC874\uC7AC \uC774\uC720\uAC00 \uD750\uB824\uC9C4\uB2E4",
                "\uD759\uD0D5\uBB3C\uC774 \uB418\uBA74 \uC7AC\uBB3C\uACFC \uBA85\uC608\uAC00 \uD568\uAED8 \uD750\uB824\uC9C4\uB2E4",
                "\uAC00\uB458 \uD798\uC774 \uC57D\uD558\uBA74 \uC791\uC740 \uC81C\uBC29\uACFC \uB9CC\uB098 \uC11C\uB85C \uBB34\uB108\uC9C4\uB2E4"
              ]
            },
            unverified: false,
            sources: ["T03-007", "T03-028", "T07-184", "T07-185", "T07-186", "T07-187", "T07-188", "T07-190", "T07-191", "T07-193", "T07-194", "T07-196", "T07-200", "T07-204", "T07-206"]
          },
          {
            stemHanja: "\u7678",
            stemHangul: "\uACC4",
            element: "\u6C34",
            yinyang: "\uC74C",
            nature: "\uC791\uC740 \uBB3C(\uBE44\xB7\uB208\xB7\uC774\uC2AC\xB7\uC0D8\uBB3C)",
            metaphor: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uB2E8\uBE44, \uB3CC \uC0AC\uC774\uC5D0\uC11C \uC0D8\uC19F\uB294 \uC11D\uAC04\uC218. \uC791\uC544\uB3C4 \uB9D1\uC73C\uBA74 \uC0DD\uBA85\uC744 \uAE30\uB978\uB2E4.",
            coreTraits: [
              "\uC870\uC6A9\uD788 \uC2A4\uBA70\uB4DC\uB294 \uC778\uB0B4\uB825",
              "\uBAA8\uB4E0 \uAC83\uC744 \uAE30\uC5B5\uD558\uB294 \uCE68\uBB35\uC758 \uB450\uB1CC",
              "\uB0AE\uC740 \uACF3\uC73C\uB85C \uD750\uB974\uB294 \uACB8\uC190\uACFC \uCE5C\uD654\uB825",
              "\uC7A5\uC560\uBB3C\uC744 \uB3CC\uC544\uAC00\uB294 \uC720\uC5F0\uD55C \uC9C0\uD61C",
              "\uB54C\uB85C\uB294 \uAF80\uB97C \uC4F0\uB294 \uC21C\uBC1C\uB825"
            ],
            growthNeeds: [
              "\uAC10\uB2F9 \uAC00\uB2A5\uD55C \uC791\uC740 \uC81C\uBC29(\uC815\uC6D0 \uD759)",
              "\uC81C\uBC29\uC5D0 \uC2EC\uC778 \uC791\uC740 \uB098\uBB34",
              "\uB9C8\uB974\uC9C0 \uC54A\uAC8C \uD574\uC904 \uC218\uC6D0\uC9C0(\uC1E0)",
              "\uC0DD\uBA85\uC744 \uB3CB\uC6B8 \uC628\uAE30(\uC791\uC740 \uBE5B)",
              "\uB9D1\uC74C\uC744 \uC9C0\uD0A4\uB294 \uC808\uC81C"
            ],
            careerDirections: [
              "\uD574\uC678\xB7\uC720\uD1B5\xB7\uC74C\uC2DD",
              "\uC601\uC5C5\xB7\uC11C\uBE44\uC2A4",
              "\uAD50\uC721(\uD2B9\uD788 \uAC00\uB974\uCE58\uB294 \uC785\xB7\uB9D0 \uC0B0\uC5C5)",
              "\uC2DD\uC218\xB7\uC74C\uB8CC\xB7\uBBF8\uC6A9 \uAC19\uC740 \uBB3C \uC0B0\uC5C5",
              "\uC0C1\uB2F4\xB7\uC815\uC2E0\uC138\uACC4 \uC548\uB0B4(\uC791\uC740 \uBE5B\uACFC \uACB0\uD569 \uC2DC)"
            ],
            dangers: {
              excess: [
                "\uD070 \uC81C\uBC29\uACFC \uB9CC\uB098 \uBB36\uC774\uACE0 \uD759\uD0D5\uBB3C\uC774 \uB418\uAE30 \uC27D\uB2E4",
                "\uBE44\uAC00 \uACB9\uCE58\uBA74 \uD759\uC744 \uC53B\uC5B4 \uC2DC\uC57C\uAC00 \uD750\uB824\uC9C4\uB2E4"
              ],
              deficit: [
                "\uC218\uB7C9\uC774 \uC791\uC544 \uD070 \uB098\uBB34\uB97C \uD0A4\uC6B0\uB2E4 \uC2A4\uC2A4\uB85C \uB9C8\uB978\uB2E4",
                "\uC81C\uBC29 \uC5C6\uC774 \uD758\uB7EC\uAC00\uBA74 \uD754\uC801\uB3C4 \uB0A8\uC9C0 \uC54A\uB294\uB2E4",
                "\uC624\uB798 \uBD93\uAE30\uB9CC \uD558\uBA74 \uC0DD\uBA85\uB825\uC774 \uACE0\uAC08\uB41C\uB2E4"
              ]
            },
            unverified: false,
            sources: ["T03-007", "T03-028", "T07-207", "T07-208", "T07-209", "T07-210", "T07-211", "T07-213", "T07-214", "T07-216", "T07-220", "T07-224", "T07-228", "T07-229", "T07-230", "T07-232"]
          }
        ]
      };
    }
  });

  // entry.cjs
  var require_entry = __commonJS({
    "entry.cjs"() {
      var { computeChart } = require_engine();
      var STEMS_SOURCE = require_stems().stems;
      var KEEP_FIELDS = [
        "stemHanja",
        "stemHangul",
        "element",
        "yinyang",
        "nature",
        "metaphor",
        "coreTraits",
        "growthNeeds",
        "unverified"
      ];
      var STEMS = STEMS_SOURCE.map((stem) => {
        const slim = {};
        for (const field of KEEP_FIELDS) slim[field] = stem[field];
        return slim;
      });
      var ELEMENT_HANJA = { \uBAA9: "\u6728", \uD654: "\u706B", \uD1A0: "\u571F", \uAE08: "\u91D1", \uC218: "\u6C34" };
      var ELEMENT_ORDER = ["\u6728", "\u706B", "\u571F", "\u91D1", "\u6C34"];
      globalThis.SajuRoot = {
        version: "0.1.0",
        computeChart,
        STEMS,
        ELEMENT_HANJA,
        ELEMENT_ORDER
      };
    }
  });
  require_entry();
})();
/*! Bundled license information:

manseryeok/dist/index.js:
  (**
   * 만세력(萬歲曆) 계산 라이브러리
   * Korean Saju (Four Pillars) and Manseryeok calculation library
   *
   * @author Yoohyojun
   * @license MIT
   *)
*/
