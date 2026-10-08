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
        const applyHistoricalDst = raw.applyHistoricalDst === void 0 ? true : Boolean(raw.applyHistoricalDst);
        if (typeof raw.applyHistoricalDst !== "undefined" && typeof raw.applyHistoricalDst !== "boolean") {
          throw new EngineError("applyHistoricalDst\uB294 \uBD88\uB9AC\uC5B8\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");
        }
        return {
          date,
          time,
          latitude,
          longitude,
          tzOffsetMinutes,
          dayBoundary,
          trueSolarTime,
          applyHistoricalDst
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
      var KOREA_HISTORICAL_DST = [
        { start: [1948, 6, 1, 0, 0], end: [1948, 9, 13, 0, 0] },
        { start: [1949, 4, 3, 0, 0], end: [1949, 9, 11, 0, 0] },
        { start: [1950, 4, 1, 0, 0], end: [1950, 9, 10, 0, 0] },
        { start: [1951, 5, 6, 0, 0], end: [1951, 9, 9, 0, 0] },
        { start: [1955, 5, 5, 0, 0], end: [1955, 9, 9, 0, 0] },
        { start: [1956, 5, 20, 0, 0], end: [1956, 9, 30, 0, 0] },
        { start: [1957, 5, 5, 0, 0], end: [1957, 9, 22, 0, 0] },
        { start: [1958, 5, 4, 0, 0], end: [1958, 9, 21, 0, 0] },
        { start: [1959, 5, 3, 0, 0], end: [1959, 9, 20, 0, 0] },
        { start: [1960, 5, 1, 0, 0], end: [1960, 9, 18, 0, 0] },
        { start: [1987, 5, 10, 2, 0], end: [1987, 10, 11, 3, 0] },
        { start: [1988, 5, 8, 2, 0], end: [1988, 10, 9, 3, 0] }
      ].map((iv) => ({
        startMs: Date.UTC(iv.start[0], iv.start[1] - 1, iv.start[2], iv.start[3], iv.start[4]),
        endMs: Date.UTC(iv.end[0], iv.end[1] - 1, iv.end[2], iv.end[3], iv.end[4]),
        label: `${iv.start[0]}-${String(iv.start[1]).padStart(2, "0")}-${String(iv.start[2]).padStart(2, "0")} ${String(iv.start[3]).padStart(2, "0")}:00 ~ ${iv.end[0]}-${String(iv.end[1]).padStart(2, "0")}-${String(iv.end[2]).padStart(2, "0")} ${String(iv.end[3]).padStart(2, "0")}:00`
      }));
      function koreaDstInterval(year, month, day, hour, minute) {
        const ms = Date.UTC(year, month - 1, day, hour, minute);
        return KOREA_HISTORICAL_DST.find((iv) => ms >= iv.startMs && ms < iv.endMs) || null;
      }
      function computeChart(raw) {
        const input = normalizeInput(raw);
        const hasTime = input.time !== null;
        const wallHour = hasTime ? input.time.hour : NOON_ASSUMPTION.hour;
        const wallMinute = hasTime ? input.time.minute : NOON_ASSUMPTION.minute;
        const wallMs = Date.UTC(input.date.year, input.date.month - 1, input.date.day, wallHour, wallMinute, 0);
        let dst = { applied: false, offsetMinutes: 0, interval: null };
        if (input.applyHistoricalDst && input.tzOffsetMinutes === DEFAULT_TZ_OFFSET_MINUTES) {
          const iv = koreaDstInterval(input.date.year, input.date.month, input.date.day, wallHour, wallMinute);
          if (iv) dst = { applied: true, offsetMinutes: 60, interval: iv.label };
        }
        const instantUTCms = wallMs - input.tzOffsetMinutes * 6e4 - dst.offsetMinutes * 6e4;
        const dstNote = dst.applied ? `\uCD9C\uC0DD \uAE30\uB85D \uC2DC\uAC01\uC774 \uD55C\uAD6D \uC11C\uBA38\uD0C0\uC784 \uAD6C\uAC04(${dst.interval})\uC5D0 \uC788\uC5B4 \uD45C\uC900\uC2DC\uB85C 60\uBD84 \uB418\uB3CC\uB824 \uACC4\uC0B0\uD588\uB2E4.` : null;
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
        const wallMinutesOfDay = wallHour * 60 + wallMinute - dst.offsetMinutes;
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
            applyHistoricalDst: input.applyHistoricalDst,
            calendar: "gregorian"
          },
          mode: hasTime ? "full" : "noHour",
          dst,
          assumptions: hasTime ? dst.applied ? [dstNote] : [] : [
            `\uCD9C\uC0DD\uC2DC\uAC01 \uBBF8\uC0C1: \uC5F0\xB7\uC6D4\xB7\uC77C\uC8FC\uB294 \uB2F9\uC77C ${NOON_ASSUMPTION.hour.toString().padStart(2, "0")}:${NOON_ASSUMPTION.minute.toString().padStart(2, "0")}(\uC785\uB825 \uC2DC\uAC04\uB300) \uAC00\uC815\uC73C\uB85C \uACC4\uC0B0\uD588\uB2E4. \uC815\uC624\uB294 \uC9C4\uD0DC\uC591\uC2DC \uBCF4\uC815\uC744 \uC801\uC6A9\uD574\uB3C4 \uAC19\uC740 \uB0A0 \uC548\uC5D0 \uBA38\uBB34\uB294 \uC548\uC804 \uC9C0\uC810\uC774\uB2E4.`,
            "\uC2DC\uC8FC\uB294 \uC81C\uACF5\uD558\uC9C0 \uC54A\uB294\uB2E4(hourPillar=null).",
            ...dst.applied ? [dstNote] : []
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
            dstApplied: dst.applied,
            dstOffsetMinutes: dst.offsetMinutes,
            dstInterval: dst.interval,
            dstNote,
            formula: dst.applied ? "total = (longitude - 135) * 4 + equationOfTime - (tzOffsetMinutes - 540), \uC11C\uBA38\uD0C0\uC784 60\uBD84\uC740 \uBCBD\uC2DC\uC2DC\uAC01\uC5D0\uC11C \uC120\uBC18\uC601" : "total = (longitude - 135) * 4 + equationOfTime - (tzOffsetMinutes - 540)"
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

  // node_modules/manseryeok/dist/constants.js
  var require_constants2 = __commonJS({
    "node_modules/manseryeok/dist/constants.js"(exports) {
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

  // node_modules/manseryeok/dist/validation.js
  var require_validation2 = __commonJS({
    "node_modules/manseryeok/dist/validation.js"(exports) {
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
      var constants_1 = require_constants2();
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

  // node_modules/manseryeok/dist/elements.js
  var require_elements2 = __commonJS({
    "node_modules/manseryeok/dist/elements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHeavenlyStemYinYang = getHeavenlyStemYinYang;
      exports.getHeavenlyStemElement = getHeavenlyStemElement;
      exports.getEarthlyBranchYinYang = getEarthlyBranchYinYang;
      exports.getEarthlyBranchElement = getEarthlyBranchElement;
      var constants_1 = require_constants2();
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/calendar/lunar-data.js
  var require_lunar_data2 = __commonJS({
    "node_modules/manseryeok/dist/calendar/lunar-data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LUNAR_BASE_UTC_MS = exports.LUNAR_MAX_YEAR = exports.LUNAR_MIN_YEAR = void 0;
      exports.getLeapMonth = getLeapMonth;
      exports.getLeapMonthDays = getLeapMonthDays;
      exports.getLunarMonthDays = getLunarMonthDays;
      exports.getLunarYearDays = getLunarYearDays;
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/calendar/convert.js
  var require_convert2 = __commonJS({
    "node_modules/manseryeok/dist/calendar/convert.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isValidSolarDate = isValidSolarDate;
      exports.lunarToSolar = lunarToSolar;
      exports.solarToLunar = solarToLunar;
      var lunar_data_1 = require_lunar_data2();
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/astro/solar-terms-data.js
  var require_solar_terms_data2 = __commonJS({
    "node_modules/manseryeok/dist/astro/solar-terms-data.js"(exports) {
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

  // node_modules/manseryeok/dist/astro/sun-longitude.js
  var require_sun_longitude2 = __commonJS({
    "node_modules/manseryeok/dist/astro/sun-longitude.js"(exports) {
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

  // node_modules/manseryeok/dist/time/korea-timezone.js
  var require_korea_timezone2 = __commonJS({
    "node_modules/manseryeok/dist/time/korea-timezone.js"(exports) {
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

  // node_modules/manseryeok/dist/time/true-solar-time.js
  var require_true_solar_time2 = __commonJS({
    "node_modules/manseryeok/dist/time/true-solar-time.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DEFAULT_LONGITUDE = void 0;
      exports.resolveInstant = resolveInstant;
      var sun_longitude_1 = require_sun_longitude2();
      var korea_timezone_1 = require_korea_timezone2();
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

  // node_modules/manseryeok/dist/ganji.js
  var require_ganji2 = __commonJS({
    "node_modules/manseryeok/dist/ganji.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ganjiIndexOf = ganjiIndexOf;
      exports.pillarFromGanji = pillarFromGanji;
      var constants_1 = require_constants2();
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

  // node_modules/manseryeok/dist/astro/solar-terms.js
  var require_solar_terms2 = __commonJS({
    "node_modules/manseryeok/dist/astro/solar-terms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SOLAR_TERM_NAMES_HANJA = exports.SOLAR_TERM_NAMES = void 0;
      exports.solarTermInstantMs = solarTermInstantMs;
      exports.getSolarTerm = getSolarTerm;
      exports.getSolarTermsOfYear = getSolarTermsOfYear;
      exports.sajuYearForInstant = sajuYearForInstant;
      exports.sajuMonthForInstant = sajuMonthForInstant;
      var sun_longitude_1 = require_sun_longitude2();
      var validation_1 = require_validation2();
      var solar_terms_data_1 = require_solar_terms_data2();
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

  // node_modules/manseryeok/dist/pillars.js
  var require_pillars2 = __commonJS({
    "node_modules/manseryeok/dist/pillars.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.computeFourPillars = computeFourPillars;
      var constants_1 = require_constants2();
      var ganji_1 = require_ganji2();
      var solar_terms_1 = require_solar_terms2();
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

  // node_modules/manseryeok/dist/features/ten-gods.js
  var require_ten_gods2 = __commonJS({
    "node_modules/manseryeok/dist/features/ten-gods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTenGod = getTenGod;
      exports.getBranchTenGod = getBranchTenGod;
      exports.getTenGodChart = getTenGodChart;
      var constants_1 = require_constants2();
      var elements_1 = require_elements2();
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/features/void-branches.js
  var require_void_branches2 = __commonJS({
    "node_modules/manseryeok/dist/features/void-branches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getVoidBranches = getVoidBranches;
      var constants_1 = require_constants2();
      var ganji_1 = require_ganji2();
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/features/luck-pillars.js
  var require_luck_pillars2 = __commonJS({
    "node_modules/manseryeok/dist/features/luck-pillars.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLuckPillars = getLuckPillars;
      var constants_1 = require_constants2();
      var ganji_1 = require_ganji2();
      var solar_terms_1 = require_solar_terms2();
      var validation_1 = require_validation2();
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

  // node_modules/manseryeok/dist/index.js
  var require_dist2 = __commonJS({
    "node_modules/manseryeok/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DEFAULT_LONGITUDE = exports.getLuckPillars = exports.getVoidBranches = exports.getTenGodChart = exports.getBranchTenGod = exports.getTenGod = exports.equationOfTimeMinutes = exports.apparentSolarLongitude = exports.SOLAR_TERM_NAMES_HANJA = exports.SOLAR_TERM_NAMES = exports.getSolarTermsOfYear = exports.getSolarTerm = exports.LUNAR_MAX_YEAR = exports.LUNAR_MIN_YEAR = exports.isValidSolarDate = exports.solarToLunar = exports.lunarToSolar = exports.getEarthlyBranchElement = exports.getEarthlyBranchYinYang = exports.getHeavenlyStemElement = exports.getHeavenlyStemYinYang = exports.TEN_GOD_HANJA = exports.FIVE_ELEMENTS = exports.YIN_YANG = exports.EARTHLY_BRANCHES_HANJA = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS_HANJA = exports.HEAVENLY_STEMS = void 0;
      exports.calculateFourPillars = calculateFourPillars;
      exports.fourPillarsToString = fourPillarsToString;
      var constants_1 = require_constants2();
      var elements_1 = require_elements2();
      var convert_1 = require_convert2();
      var lunar_data_1 = require_lunar_data2();
      var solar_terms_data_1 = require_solar_terms_data2();
      var true_solar_time_1 = require_true_solar_time2();
      var pillars_1 = require_pillars2();
      var ten_gods_1 = require_ten_gods2();
      var void_branches_1 = require_void_branches2();
      var luck_pillars_1 = require_luck_pillars2();
      var validation_1 = require_validation2();
      var constants_2 = require_constants2();
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
      var elements_2 = require_elements2();
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
      var convert_2 = require_convert2();
      Object.defineProperty(exports, "lunarToSolar", { enumerable: true, get: function() {
        return convert_2.lunarToSolar;
      } });
      Object.defineProperty(exports, "solarToLunar", { enumerable: true, get: function() {
        return convert_2.solarToLunar;
      } });
      Object.defineProperty(exports, "isValidSolarDate", { enumerable: true, get: function() {
        return convert_2.isValidSolarDate;
      } });
      var lunar_data_2 = require_lunar_data2();
      Object.defineProperty(exports, "LUNAR_MIN_YEAR", { enumerable: true, get: function() {
        return lunar_data_2.LUNAR_MIN_YEAR;
      } });
      Object.defineProperty(exports, "LUNAR_MAX_YEAR", { enumerable: true, get: function() {
        return lunar_data_2.LUNAR_MAX_YEAR;
      } });
      var solar_terms_1 = require_solar_terms2();
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
      var sun_longitude_1 = require_sun_longitude2();
      Object.defineProperty(exports, "apparentSolarLongitude", { enumerable: true, get: function() {
        return sun_longitude_1.apparentSolarLongitude;
      } });
      Object.defineProperty(exports, "equationOfTimeMinutes", { enumerable: true, get: function() {
        return sun_longitude_1.equationOfTimeMinutes;
      } });
      var ten_gods_2 = require_ten_gods2();
      Object.defineProperty(exports, "getTenGod", { enumerable: true, get: function() {
        return ten_gods_2.getTenGod;
      } });
      Object.defineProperty(exports, "getBranchTenGod", { enumerable: true, get: function() {
        return ten_gods_2.getBranchTenGod;
      } });
      Object.defineProperty(exports, "getTenGodChart", { enumerable: true, get: function() {
        return ten_gods_2.getTenGodChart;
      } });
      var void_branches_2 = require_void_branches2();
      Object.defineProperty(exports, "getVoidBranches", { enumerable: true, get: function() {
        return void_branches_2.getVoidBranches;
      } });
      var luck_pillars_2 = require_luck_pillars2();
      Object.defineProperty(exports, "getLuckPillars", { enumerable: true, get: function() {
        return luck_pillars_2.getLuckPillars;
      } });
      var true_solar_time_2 = require_true_solar_time2();
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
          unverifiedRule: "\uCF54\uD37C\uC2A4 source_status=\uBBF8\uD655\uC778 \uC5D4\uD2B8\uB9AC\uB97C \uADFC\uAC70\uB85C \uC4F4 \uAC1C\uCCB4\uB294 unverified=true\uC640 unverifiedSourceIds\uB97C \uD568\uAED8 \uD45C\uAE30\uD55C\uB2E4.",
          catchphraseNote: "\uBB34\uAE30 \uCE90\uCE58\uD504\uB808\uC774\uC988\uB294 \uAC01 \uCC9C\uAC04 \uBB3C\uC0C1(nature\xB7metaphor)\uC758 \uC6D0\uB9AC\uB97C 2\uC778\uCE6D \uD55C \uC904\uB85C \uC7AC\uAD6C\uC131\uD55C \uAC83\uC785\uB2C8\uB2E4. \uCD9C\uCC98\uB294 \uAC01 \uD56D\uBAA9 sources\uC640 \uB3D9\uC77C."
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
            unverifiedSourceIds: [
              "T07-007",
              "T07-024"
            ],
            sources: [
              "T03-001",
              "T03-016",
              "T07-002",
              "T07-003",
              "T07-004",
              "T07-005",
              "T07-006",
              "T07-007",
              "T07-024",
              "T07-009",
              "T07-010",
              "T07-011",
              "T07-012"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uD070 \uADF8\uB9BC\uC744 \uD55C \uBC88\uC5D0 \uC138\uC6B0\uB294 \uC904\uAE30\uC608\uC694."
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
            unverifiedSourceIds: [
              "T07-047"
            ],
            sources: [
              "T03-001",
              "T03-018",
              "T07-025",
              "T07-026",
              "T07-027",
              "T07-028",
              "T07-029",
              "T07-047",
              "T07-031",
              "T07-035",
              "T07-036"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC5B4\uB514\uC5D0\uB4E0 \uBFCC\uB9AC\uB0B4\uB9AC\uB294 \uC720\uC5F0\uD568\uC774\uC5D0\uC694."
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
            unverifiedSourceIds: [
              "T07-052",
              "T07-068"
            ],
            sources: [
              "T03-019",
              "T03-020",
              "T07-048",
              "T07-049",
              "T07-050",
              "T07-051",
              "T07-052",
              "T07-054",
              "T07-057",
              "T07-059",
              "T07-061",
              "T07-062",
              "T07-066",
              "T07-067",
              "T07-068"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC5B4\uB460\uC744 \uACE8\uB77C \uC7A1\uB294 \uCCAB \uBE5B\uC774\uC5D0\uC694."
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
            unverifiedSourceIds: [
              "T07-091"
            ],
            sources: [
              "T03-019",
              "T03-021",
              "T07-069",
              "T07-070",
              "T07-071",
              "T07-072",
              "T07-073",
              "T07-075",
              "T07-076",
              "T07-079",
              "T07-081",
              "T07-084",
              "T07-085",
              "T07-086",
              "T07-091"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC5B4\uB450\uC6B4 \uBC29\uC5D0\uC11C\uB3C4 \uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uC628\uAE30\uC608\uC694."
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
            unverifiedSourceIds: [
              "T07-114"
            ],
            sources: [
              "T03-005",
              "T03-010",
              "T03-022",
              "T03-023",
              "T07-092",
              "T07-093",
              "T07-094",
              "T07-095",
              "T07-096",
              "T07-098",
              "T07-099",
              "T07-102",
              "T07-104",
              "T07-108",
              "T07-114"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uD754\uB4E4\uB9AC\uC9C0 \uC54A\uB294 \uBB34\uAC8C\uAC10\uC774\uC5D0\uC694."
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
            unverifiedSourceIds: [
              "T07-118",
              "T07-137"
            ],
            sources: [
              "T03-011",
              "T03-022",
              "T03-024",
              "T07-115",
              "T07-116",
              "T07-117",
              "T07-118",
              "T07-119",
              "T07-121",
              "T07-122",
              "T07-125",
              "T07-127",
              "T07-128",
              "T07-132",
              "T07-137"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC2EC\uC73C\uBA74 \uC0B4\uB9AC\uB294 \uB2E4\uC815\uD568\uC774\uC5D0\uC694."
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
            sources: [
              "T03-013",
              "T03-014",
              "T03-026",
              "T07-138",
              "T07-139",
              "T07-140",
              "T07-141",
              "T07-142",
              "T07-144",
              "T07-145",
              "T07-146",
              "T07-148",
              "T07-150",
              "T07-152",
              "T07-156",
              "T07-158",
              "T07-160"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uAC70\uCE5C \uC6D0\uB8CC\uB97C \uB2E4\uB4EC\uB294 \uACB0\uB2E8\uC774\uC5D0\uC694."
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
            sources: [
              "T03-014",
              "T07-161",
              "T07-162",
              "T07-163",
              "T07-164",
              "T07-165",
              "T07-167",
              "T07-168",
              "T07-170",
              "T07-171",
              "T07-173",
              "T07-174",
              "T07-176",
              "T07-180",
              "T07-183"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC624\uB798\uB3C4\uB85D \uBE5B\uC744 \uC783\uC9C0 \uC54A\uB294 \uC815\uC81C\uC608\uC694."
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
            sources: [
              "T03-007",
              "T03-028",
              "T07-184",
              "T07-185",
              "T07-186",
              "T07-187",
              "T07-188",
              "T07-190",
              "T07-191",
              "T07-193",
              "T07-194",
              "T07-196",
              "T07-200",
              "T07-204",
              "T07-206"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uB113\uAC8C \uB2F4\uC544 \uCC9C\uCC9C\uD788 \uB0B4\uBCF4\uB0B4\uB294 \uAE4A\uC774\uC608\uC694."
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
            sources: [
              "T03-007",
              "T03-028",
              "T07-207",
              "T07-208",
              "T07-209",
              "T07-210",
              "T07-211",
              "T07-213",
              "T07-214",
              "T07-216",
              "T07-220",
              "T07-224",
              "T07-228",
              "T07-229",
              "T07-230",
              "T07-232"
            ],
            catchphrase: "\uB2F9\uC2E0\uC758 \uBB34\uAE30\uB294 \uC2A4\uBA70\uB4E4\uC5B4 \uAE38\uC744 \uB0B4\uB294 \uB048\uC9C8\uAE40\uC774\uC5D0\uC694."
          }
        ]
      };
    }
  });

  // ../content/relations.json
  var require_relations = __commonJS({
    "../content/relations.json"(exports, module) {
      module.exports = {
        meta: {
          service: "SAJU(\uAC00\uCE6D)",
          ticket: 12,
          built: "2026-10-02",
          method: "\uAD00\uACC4\uCE35(162\uC5D4\uD2B8\uB9AC)\uACFC \uAD81\uD569\xB7\uC548\uC2EC\uBC95 \uADFC\uAC70\uB97C \uADDC\uCE59 \uAD6C\uC870\uB85C \uC7AC\uAD6C\uC131\uD588\uB2E4. \uBB38\uC7A5\uC740 \uC0C8\uB85C \uC37C\uC73C\uBA70 \uC5F0\uC18D \uC778\uC6A9 \uAE08\uC9C0 \uADDC\uCE59\uC744 \uB530\uB978\uB2E4.",
          roleVocabulary: {
            \uC7AC\uC131: "\uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790(\uB0A8\uC790\uC5D0\uAC8C \uC5EC\uC790)",
            \uAD00\uC131: "\uC9C1\uC7A5\xB7\uC9C8\uC11C\xB7\uBA85\uC608(\uC5EC\uC790\uC5D0\uAC8C \uB0A8\uC790)",
            \uC778\uC131: "\uACF5\uBD80\xB7\uC5B4\uBA38\uB2C8\xB7\uBB3C(\uAE30\uC5B5)",
            \uC2DD\uC0C1: "\uD45C\uD604\xB7\uACB0\uC2E4\xB7\uAF43",
            \uBE44\uB3D9: "\uD615\uC81C\xB7\uACBD\uC7C1\uC790\xB7\uB098\uC640 \uAC19\uC740 \uC624\uD589"
          }
        },
        dayStemVsElements: {
          \u7532: {
            \u6728: {
              role: "\uBE44\uB3D9",
              tooMuch: "\uB098\uBB34\uAC00 \uC232\uC744 \uC774\uB8E8\uBA74 \uAC89\uC740 \uBB34\uC131\uD574 \uBCF4\uC5EC\uB3C4 \uC18D\uC740 \uC5B4\uB461\uACE0 \uACE0\uBBFC\uC774 \uB9CE\uC544\uC9C4\uB2E4. \uB450 \uADF8\uB8E8\uBA74 \uAC11\uAC11\uD558\uACE0, \uC14B \uC774\uC0C1\uC774\uBA74 \uB545\uC774 \uC808\uC2E4\uD574 \uBD80\uB3D9\uC0B0\xB7\uD1A0\uC9C0 \uACC4\uC5F4\uC774 \uB9DE\uB294\uB2E4.",
              tooLittle: "\uAC19\uC740 \uD3B8\uC774 \uC57D\uD558\uBA74 \uC7AC\uBB3C\xB7\uBA85\uC608\uAC00 \uC640\uB3C4 \uAC10\uB2F9\uD560 \uBFCC\uB9AC\uAC00 \uC5C6\uB2E4. \uBFCC\uB9AC\uAC00 \uC0DD\uAE30\uB294 \uC2DC\uAE30\uC5D0 \uD070 \uC77C\uC774 \uAC00\uB2A5\uD558\uB2E4.",
              balance: "\uD070 \uB098\uBB34\uB294 \uD55C \uACF3\uC5D0 \uC624\uB798 \uC11C\uC57C \uD55C\uB2E4. \uACBD\uC7C1\uC790\uB294 \uAC19\uC740 \uBB3C\uC904\uAE30 \uC7C1\uD0C8\uC804\uC73C\uB85C \uBCF4\uACE0, \uADF8\uB97C \uAC77\uC5B4\uC904 \uD759\uC758 \uC2DC\uAE30\uC5D0 \uC2B9\uBD80\uAC00 \uB09C\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-012"],
              sources: ["T07-012", "T07-014"]
            },
            \u706B: { role: "\uC2DD\uC0C1", tooMuch: "\uC5F4\uAE30 \uACFC\uB2E4\uB294 \uBB3C\uC744 \uB9D0\uB9AC\uACE0 \uB545\uC744 \uAC08\uB77C \uC131\uC9C8\uC744 \uC870\uAE09\uD558\uAC8C \uB9CC\uB4E4\uACE0 \uAC74\uAC15 \uB9AC\uC2A4\uD06C\uAC00 \uCEE4\uC9C4\uB2E4. \uC2DC\uC6D0\uD55C \uBB3C\uCABD \uC9C0\uC5ED\xB7\uBC30\uC6B0\uC790\xB7\uD574\uC678\uAC00 \uCC98\uBC29\uC774\uB2E4.", tooLittle: "\uBE5B\uC774 \uC5C6\uC73C\uBA74 \uAF43\uC744 \uBABB \uD53C\uC6CC \uACB0\uACFC\uAE4C\uC9C0 \uC624\uB798 \uAC78\uB9B0\uB2E4. \uC9C0\uC9C0\uB9CC\uC5D0 \uBE5B\uC774 \uC788\uC73C\uBA74 \uC81C\uB3C4\uAD8C\uBCF4\uB2E4 \uC7AC\uC57C\uC5D0\uC11C \uD53C\uC6B4\uB2E4.", balance: "\uD070 \uBE5B\uC744 \uBC1B\uC544 \uD070 \uAF43\uC744 \uD53C\uC6B0\uB294 \uAC83\uC774 \uC778\uC0DD\uC758 \uBAA9\uD45C \uADF8\uB9BC\uC774\uB2E4. \uBC30\uC6B4 \uAC83\uC744 \uC138\uC0C1\uC5D0 \uB4DC\uB7EC\uB0B4 \uC778\uC815\uBC1B\uB294 \uC2DC\uAE30\uAC00 \uACB0\uC2E4\uAE30\uB2E4.", sources: ["T07-011", "T07-016"] },
            \u571F: { role: "\uC7AC\uC131", tooMuch: "\uC2EC\uC744 \uACF3\uC774 \uB108\uBB34 \uB9CE\uC73C\uBA74 \uC62E\uACA8 \uB2E4\uB2C8\uBA70 \uAC00\uC815\xB7\uC9C1\uC7A5\uC774 \uD754\uB4E4\uB9B0\uB2E4. \uD558\uB098\uC758 \uD130\uC804\uC5D0 \uAC74\uBB3C\uC744 \uC9D3\uB4EF \uC815\uCC29\uD558\uB294 \uCC98\uBC29\uC774 \uD544\uC694\uD558\uB2E4.", tooLittle: "\uC7AC\uBB3C\uC758 \uB545\uC774 \uC5C6\uC73C\uBA74 \uB298 \uC0C8 \uD130\uC804\uB9CC \uCC3E\uB294\uB2E4. \uC5C6\uB294 \uAC83\uC744 \uCD94\uAD6C\uD558\uB294 \uB9CC\uD07C \uC695\uC2EC\uC774 \uCEE4\uC9C0\uB2C8 \uD55C \uC77C\uC5D0 \uCD5C\uC120\uC774 \uB2F5\uC774\uB2E4. \uD759\uC6B4\uC5D0 \uBD80\uB3D9\uC0B0\uC774 \uC0DD\uAE38 \uC218 \uC788\uB2E4.", balance: "\uD070 \uB098\uBB34\uB294 \uD070 \uB545\uC5D0 \uC2EC\uC5B4\uC57C \uD55C\uB2E4. \uC791\uC740 \uC815\uC6D0 \uD759\uC5D0 \uC2EC\uC73C\uBA74 \uC2DC\uAC04\uC774 \uAC08\uC218\uB85D \uC11C\uB85C\uB97C \uAC08\uB77C\uB193\uC544 \uAC00\uC815 \uBB38\uC81C\uB85C \uC774\uC5B4\uC9C4\uB2E4.", sources: ["T07-009", "T07-018", "T07-019"] },
            \u91D1: {
              role: "\uAD00\uC131",
              tooMuch: "\uCE7C\uC774 \uB9CE\uC73C\uBA74 \uB2E4\uB4EC\uAE30\uBCF4\uB2E4 \uBCA0\uC778\uB2E4. \uC608\uBBFC\xB7\uC2E0\uACBD\uC804\xB7\uAD00\uC7AC\uAD6C\uC124 \uB9AC\uC2A4\uD06C\uAC00 \uCEE4\uC9C0\uACE0, \uC9C0\uC9C0\uAC00 \uD754\uB4E4\uB9AC\uB294 \uC2DC\uAE30\uC5D4 \uC0AC\uACE0\xB7\uC218\uC220 \uC8FC\uC758\uAC00 \uD544\uC694\uD558\uB2E4.",
              tooLittle: "\uB2E4\uB4EC\uC5B4\uC904 \uD798\uC774 \uC5C6\uC73C\uBA74 \uC7A1\uBAA9\uC774 \uB41C\uB2E4. \uC790\uAE30 \uADDC\uC728\uC774\uB098 \uC1E0 \uACC4\uC5F4 \uC77C\uC744 \uD1B5\uD574 \uC808\uC81C\uB97C \uB9CC\uB4E4\uC5B4\uC57C \uD55C\uB2E4.",
              balance: "\uD070 \uCE7C\uC790\uB8E8\uAC00 \uD070 \uCE7C\uC744 \uC7A1\uC73C\uBA74 \uB9AC\uB354\uC758 \uBA85\uC608\uAC00 \uC0DD\uAE34\uB2E4. \uC791\uC740 \uCE7C\uACFC\uB294 \uCC3D\uCC98\uB7FC \uAE34 \uAD00\uACC4\uB77C \uC870\uC9C1\uC0DD\uD65C\uC774 \uB9DE\uB294\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-012"],
              sources: ["T07-012", "T07-020", "T07-021"]
            },
            \u6C34: { role: "\uC778\uC131", tooMuch: "\uBB3C\uC774 \uB118\uCE58\uBA74 \uBFCC\uB9AC\uAC00 \uC369\uACE0 \uBD80\uC720\uD55C\uB2E4. \uC81C\uBC29(\uD759)\uC774 \uC2DC\uAE09\uD558\uBA70, \uC5C6\uC73C\uBA74 \uD574\uC678\uB85C \uD758\uB824\uBCF4\uB0B4 \uC815\uCC29\uD558\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4.", tooLittle: "\uACF5\uBD80\uC640 \uC131\uC7A5\uC758 \uC6D0\uCC9C\uC774 \uB9D0\uB77C \uC774\uB3D9\uC774 \uC7A6\uC544\uC9C4\uB2E4. \uC791\uC740 \uBB3C\uB9CC\uC73C\uB85C\uB294 \uD070 \uB098\uBB34\uAC00 \uB9C8\uB974\uB2C8 \uC1E0(\uC218\uC6D0\uC9C0) \uC77C\uB85C \uBCF4\uCDA9\uC774 \uD544\uC694\uD558\uB2E4.", balance: "\uB113\uC740 \uB545\uC5D0 \uB9CE\uC740 \uBB3C\uC774 \uD569\uCCD0\uC838\uC57C \uBE44\uC625\uD558\uB2E4. \uC5B4\uBA38\uB2C8\xB7\uD559\uC5C5\uC758 \uB3C4\uC6C0\uC774 \uC131\uC7A5\uAE30\uC758 \uD575\uC2EC \uC5F0\uB8CC\uB2E4.", sources: ["T07-010", "T07-022", "T07-023"] }
          },
          \u4E59: {
            \u6728: { role: "\uBE44\uB3D9", tooMuch: "\uB11D\uCFE8\uB07C\uB9AC \uC5C9\uD0A4\uBA74 \uC11C\uB85C\uB97C \uAC10\uC544 \uC131\uC7A5\uC744 \uB9C9\uB294\uB2E4. \uC2DC\uAC04\uC774 \uAC08\uC218\uB85D \uAC08\uB4F1\uC774 \uCEE4\uC9C0\uB2C8 \uC815\uB9AC\uD574\uC904 \uC1E0\uC758 \uC2DC\uAE30\uAC00 \uAD00\uAC74\uC774\uB2E4.", tooLittle: "\uBFCC\uB9AC\uAC00 \uC5C6\uC73C\uBA74 \uC27D\uAC8C \uBF51\uD600 \uC62E\uACA8 \uB2E4\uB2CC\uB2E4. \uAE30\uB308 \uACF3\uACFC \uC791\uC740 \uD130\uC804 \uD655\uBCF4\uAC00 \uC6B0\uC120\uC774\uB2E4.", balance: "\uB450 \uADF8\uB8E8\uB294 \uC5B4\uB9B4 \uB54C\uB294 \uC11C\uB85C \uB3CB\uBCF4\uC774\uC9C0\uB9CC \uC624\uB798 \uC5BD\uD788\uBA74 \uD574\uB86D\uB2E4. \uD55C \uC778\uC5F0, \uD55C \uC77C\uD130\uB97C \uC624\uB798 \uC9C0\uD0A4\uB294 \uAC83\uC774 \uC778\uC0DD\uC758 \uCD95\uC774\uB2E4.", sources: ["T07-036", "T07-039"] },
            \u706B: { role: "\uC2DD\uC0C1", tooMuch: "\uAC15\uD55C \uBE5B\uC740 \uC78E\uC744 \uD0DC\uC6B4\uB2E4. \uC870\uAE09\uD568\uC774 \uCEE4\uC9C0\uACE0 \uC77C\uC744 \uADF8\uB974\uCE58\uB2C8 \uADF8\uB298(\uBB3C)\uC744 \uCC3E\uC544 \uC774\uB3D9\uD558\uB294 \uD328\uD134\uC774 \uBC18\uBCF5\uB41C\uB2E4.", tooLittle: "\uAF43\uC774 \uC548 \uD53C\uC6CC \uACB0\uC2E4\uC774 \uB2A6\uB2E4. \uC624\uB798 \uC900\uBE44\uD55C \uB4A4 \uC7AC\uC57C\xB7\uCD9C\uD310\xB7\uC815\uC2E0\uC138\uACC4\uC5D0\uC11C \uD53C\uB294 \uD615\uD0DC\uAC00 \uB9DE\uB2E4.", balance: "\uC815\uC6D0\uC758 \uAF43\uC740 \uC9D1 \uC548\uC758 \uC628\uD654\uD55C \uBE5B\uC73C\uB85C\uB3C4 \uD53C\uC6B4\uB2E4. \uD070 \uBE5B \uD558\uB098\uC640 \uC801\uB2F9\uD55C \uC628\uAE30\uBA74 \uCDA9\uBD84\uD788 \uC544\uB984\uB2F5\uB2E4.", sources: ["T07-033"] },
            \u571F: { role: "\uC7AC\uC131", tooMuch: "\uACF3\uACF3\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uB824\uB2E4 \uC9D1\xB7\uC9C1\uC7A5\xB7\uAD00\uACC4\uAC00 \uBAA8\uB450 \uD754\uB4E4\uB9B0\uB2E4. \uD070 \uB545\uC740 \uB0B4 \uB545\uC774 \uC544\uB2C8\uB77C \uAE30\uB308 \uD070 \uB098\uBB34\uC758 \uC601\uC5ED\uC73C\uB85C \uBCF4\uB294 \uCC98\uC138\uAC00 \uB9DE\uB2E4.", tooLittle: "\uC7AC\uBB3C\uC758 \uD130\uC804\uC774 \uC5C6\uC5B4 \uC0B6\uC774 \uB5A0\uB3C4\uB294 \uB290\uB08C\uC774 \uB4E0\uB2E4. \uD55C \uC77C, \uD55C \uAD00\uACC4\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uB294 \uB178\uB825\uC774 \uCC98\uBC29\uC774\uB2E4. \uB9D0\uB77C\uC788\uB294 \uB545\uC774\uBA74 \uBB3C(\uD574\uC678\xB7\uC720\uD1B5)\uB85C \uBCF4\uC644\uD55C\uB2E4.", balance: "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC791\uC740 \uB545\uC774 \uCD5C\uC801 \uD658\uACBD\uC774\uB2E4. \uD070 \uB4E4\uB158\uC740 \uB0B4 \uC601\uC5ED\uC774 \uC544\uB2C8\uBA70, \uAC70\uAE30\uC120 \uAE30\uB300\uC5B4 \uC790\uB77C\uB294 \uC804\uB7B5\uC774 \uB9DE\uB2E4.", sources: ["T07-031", "T07-041", "T07-042"] },
            \u91D1: { role: "\uAD00\uC131", tooMuch: "\uD06C\uACE0 \uB9CE\uC740 \uCE7C\uC740 \uC791\uC740 \uBAB8\uC744 \uC0C1\uD558\uAC8C \uD55C\uB2E4. \uC608\uBBFC\uD574\uC9C0\uACE0 \uB0A8\uC790\xB7\uC870\uC9C1 \uBB38\uC81C\uB85C \uB9C8\uC74C\uC758 \uC0C1\uCC98\uC640 \uBF08 \uAC74\uAC15 \uC774\uC288\uAC00 \uC0DD\uAE38 \uC218 \uC788\uB2E4.", tooLittle: "\uB2E4\uB4EC\uC5B4\uC904 \uD798\uC774 \uC5C6\uC73C\uBA74 \uC81C\uBA4B\uB300\uB85C \uC790\uB780\uB2E4. \uBC95\xB7\uAE08\uC735\xB7\uC758\uD559 \uAC19\uC740 \uC1E0 \uACC4\uC5F4 \uC77C\uC744 \uC120\uD0DD\uD574 \uC808\uC81C\uB97C \uC5BB\uB294 \uCC98\uBC29\uC774 \uD544\uC694\uD558\uB2E4.", balance: "\uC791\uC740 \uCE7C\uC774 \uC54C\uB9DE\uC740 \uC790\uB8E8\uC640 \uB9CC\uB098\uBA74 \uC815\uBC00\uD55C \uBA85\uC608(\uC758\uB8CC\xB7\uAE30\uC220)\uAC00 \uC0DD\uAE34\uB2E4. \uD070 \uCE7C\uACFC \uB9CC\uB098\uBA74 \uBB36\uC774\uC9C0\uB9CC, \uADF8 \uBB36\uC74C\uC774 \uAD6D\uAC00 \uC81C\uBCF5\uC758 \uAE38\uC774 \uB418\uAE30\uB3C4 \uD55C\uB2E4.", sources: ["T07-034", "T07-043", "T07-044", "T07-035"] },
            \u6C34: { role: "\uC778\uC131", tooMuch: "\uD070\uBB3C \uC704\uC5D0 \uB72C \uBD80\uC720 \uC0C1\uD0DC\uAC00 \uB418\uC5B4 \uAC00\uC815\xB7\uC9C1\uC5C5\uC774 \uC548\uC815\uB418\uC9C0 \uC54A\uB294\uB2E4. \uD070 \uC81C\uBC29\uC774 \uD544\uC694\uD558\uBA70, \uC5C6\uC73C\uBA74 \uD574\uC678\uB85C \uD758\uB824 \uC815\uCC29\uD558\uB294 \uAC8C \uB0AB\uB2E4.", tooLittle: "\uC131\uC7A5\uC774 \uBA48\uCD94\uACE0 \uC77C\uC774 \uB04A\uAE34\uB2E4. \uBB3C \uCC3E\uC544 \uC774\uB3D9\uD558\uAC70\uB098 \uBB3C \uAD00\uB828 \uC0B0\uC5C5\xB7\uC678\uAD6D\uACC4\uB85C \uBC29\uD5A5\uC744 \uC7A1\uB294 \uAC83\uC774 \uB9DE\uB2E4.", balance: "\uB9D1\uC740 \uC791\uC740 \uBB3C\uC774\uBA74 \uCDA9\uBD84\uD558\uB2E4. \uB2E8\uBE44\uAC00 \uB0B4\uB9AC\uB294 \uC2DC\uAE30\uC5D0 \uC131\uC7A5\uC774 \uAC00\uC18D\uB41C\uB2E4.", sources: ["T07-032", "T07-046"] }
          },
          \u4E19: {
            \u6728: {
              role: "\uC778\uC131",
              tooMuch: "\uB0B4 \uC5F4\uC774 \uB108\uBB34 \uC138\uBA74 \uAE30\uC6B8 \uB545\uC774 \uB418\uC5B4 \uB098\uBB34\uAC00 \uC131\uC7A5\uC744 \uBA48\uCD98\uB2E4. \uBB3C\uC774 \uC624\uB294 \uC2DC\uAE30\uC5D0\uC57C \uD68C\uBCF5\uB41C\uB2E4.",
              tooLittle: "\uBE5B\uC744 \uBC1B\uC544\uC904 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uC131\uCDE8\uC758 \uBB34\uB300\uAC00 \uC0AC\uB77C\uC9C4\uB2E4. \uAC00\uB974\uCE58\uACE0 \uBE5B\uB0B4\uC904 \uB300\uC0C1\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD55C\uB2E4.",
              balance: "\uD0DC\uC591\uC740 \uB098\uBB34\uC758 \uAF43\uC744 \uC704\uD574 \uC874\uC7AC\uD55C\uB2E4. \uD070 \uB098\uBB34\uB97C \uD53C\uC6B0\uBA74 \uD070 \uBA85\uC608, \uC791\uC740 \uB098\uBB34\uB97C \uD53C\uC6B0\uBA74 \uB530\uB73B\uD55C \uC131\uCDE8\uAC00 \uB41C\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-054"],
              sources: ["T07-054", "T07-059", "T07-060"]
            },
            \u706B: { role: "\uBE44\uB3D9", tooMuch: "\uD0DC\uC591\uC774 \uB458 \uC774\uC0C1\uC774\uBA74 \uC11C\uB85C\uB97C \uAC00\uB824 \uC624\uD788\uB824 \uC5B4\uB461\uB2E4. \uC14B\uC774 \uB418\uBA74 \uB2E4\uC2DC \uBC1D\uC544\uC9C0\uB294 \uD2B9\uC131\uC774 \uC788\uB2E4.", tooLittle: "\uBE5B\uC758 \uBC00\uB3C4\uAC00 \uC57D\uD558\uBA74 \uC874\uC7AC\uAC10\uC774 \uD750\uB824\uC9C4\uB2E4.", balance: "\uC720\uC77C\uBB34\uC774\uD574\uC57C \uBE5B\uB09C\uB2E4. \uB098\uB97C \uAC00\uB824\uC904 \uB098\uBB34\uB098 \uAC77\uC5B4\uC904 \uC791\uC740 \uCE7C\uC774 \uC788\uC73C\uBA74 \uB2E8\uB3C5 \uC870\uBA85\uC73C\uB85C \uB3CC\uC544\uC628\uB2E4.", sources: ["T07-057", "T07-061"] },
            \u571F: { role: "\uC2DD\uC0C1", tooMuch: "\uC5F4\uAE30\uAC00 \uC9C0\uB098\uCE58\uBA74 \uB545\uC774 \uAC08\uB77C\uC9C0\uACE0 \uC544\uBB34\uAC83\uB3C4 \uBABB \uC790\uB780\uB2E4. \uC885\uAD50\xB7\uC218\uC591\uC73C\uB85C \uC5F4\uC744 \uC870\uC808\uD558\uB294 \uC0B6\uC774 \uB4F1\uC7A5\uD55C\uB2E4.", tooLittle: "\uC628\uAE30\uB97C \uB193\uC744 \uB545\uC774 \uC5C6\uC73C\uBA74 \uBE5B\uC774 \uB9C9\uD600 \uC131\uACFC\uB85C \uC774\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4.", balance: "\uD0DC\uC591\uC740 \uB545\uC5D0 \uC0DD\uBA85\uC744 \uC2EC\uAC8C \uD55C\uB2E4. \uD759\uC774 \uC81C\uBC29\uC774 \uB418\uC5B4 \uBB3C\uC744 \uB9C9\uACE0, \uADF8 \uC704\uC5D0 \uB098\uBB34\uAC00 \uC11C\uBA74 \uACB0\uC2E4\uB85C \uB3CC\uC544\uC628\uB2E4.", sources: ["T07-055", "T07-063", "T07-064"] },
            \u91D1: { role: "\uC7AC\uC131", tooMuch: "\uC7AC\uBB3C\uC774 \uB9CE\uC544\uB3C4 \uBE5B\uC744 \uAC00\uB9AC\uB294 \uAD6C\uB984\uC774 \uB418\uBA74 \uC190\uD574\uB2E4. \uC791\uC740 \uCE7C\uCABD \uC7AC\uBB3C\uC740 \uC624\uD788\uB824 \uB098\uB97C \uBB36\uB294\uB2E4.", tooLittle: "\uBC18\uC9DD\uD560 \uC7AC\uBB3C\uC774 \uC5C6\uC5B4\uB3C4 \uBA85\uC608 \uC911\uC2EC\uC73C\uB85C \uC0B4\uBA74 \uBB3C\uC774 \uC0DD\uACA8 \uB9CC\uD68C\uB41C\uB2E4.", balance: "\uD070 \uCE7C\uC740 \uB179\uC5EC \uCDE8\uD560 \uC218 \uC788\uC73C\uB098 \uBFCC\uB9AC\uAC00 \uD2BC\uD2BC\uD574\uC57C \uD55C\uB2E4. \uC7AC\uBB3C\uBCF4\uB2E4 \uBA85\uC608\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uBB3C\uC774 \uC0DD\uACA8 \uC7AC\uBB3C\uC774 \uB530\uB77C\uC628\uB2E4.", sources: ["T07-056", "T07-065", "T07-066"] },
            \u6C34: {
              role: "\uAD00\uC131",
              tooMuch: "\uD070\uBB3C\uC774 \uB450 \uAC1C\uBA74 \uC5B4\uB514\uC5D0 \uB730\uC9C0 \uD63C\uB780\uC2A4\uB7FD\uACE0, \uC791\uC740 \uBE44\uB294 \uBE5B\uC744 \uAC00\uB824 \uC758\uC695\uC744 \uAEBE\uB294\uB2E4.",
              tooLittle: "\uBA85\uC608\uC758 \uBB3C\uC774 \uC5C6\uC5B4 \uBB34\uAD00 \uC0C1\uD0DC\uAC00 \uB41C\uB2E4. \uC2A4\uC2A4\uB85C \uC7AC\uBB3C\uACFC \uD569\uD574 \uBA85\uC608\uB97C \uB9CC\uB4DC\uB294 \uCC98\uBC29\uC774 \uC4F0\uC778\uB2E4.",
              balance: "\uB9D1\uC740 \uD070\uBB3C \uC704\uC5D0 \uB5A0\uC57C \uCD5C\uC0C1\uC774\uB2E4. \uD759 \uC81C\uBC29\uACFC \uB098\uBB34\uAC00 \uBB3C\uC744 \uC815\uD654\uD574\uC57C \uBA85\uC608\uAC00 \uC2E4\uCD94\uB418\uC9C0 \uC54A\uB294\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-054"],
              sources: ["T07-054", "T07-067", "T07-066"]
            }
          },
          \u4E01: {
            \u6728: { role: "\uC778\uC131", tooMuch: "\uC9C0\uC9C0\uB300 \uB098\uBB34\uAC00 \uB108\uBB34 \uB9CE\uC73C\uBA74 \uBE5B\uC744 \uAC00\uB824 \uBE44\uCD94\uB294 \uBC94\uC704\uAC00 \uC881\uC544\uC9C4\uB2E4. \uC8FC\uBCC0 \uC778\uAC04\uAD00\uACC4\uAC00 \uBE5B\uC744 \uAC00\uB9AC\uB294 \uC2DC\uAE30 \uC8FC\uC758.", tooLittle: "\uAC00\uB85C\uB4F1\uC758 \uC9C0\uC8FC\uAC00 \uC5C6\uC5B4 \uBE5B\uC744 \uC138\uC6B8 \uACF3\uC774 \uC5C6\uB2E4. \uD070 \uB098\uBB34 \uAC19\uC740 \uC9C0\uC9C0\uB300\uAC00 \uC624\uB294 \uC2DC\uAE30\uC5D0 \uD06C\uAC8C \uBC1C\uD718\uD55C\uB2E4.", balance: "\uC791\uC740 \uBE5B\uC740 \uB098\uBB34\uB97C \uD53C\uC6B0\uAE30 \uC704\uD574 \uC874\uC7AC\uD55C\uB2E4. \uC9C0\uC9C0\uB300\uAC00 \uD06C\uBA74 \uBA40\uB9AC \uBE44\uCD94\uACE0, \uC791\uC73C\uBA74 \uACC1\uC744 \uB3CC\uBCF4\uB294 \uBE5B\uC774 \uB41C\uB2E4.", sources: ["T07-075", "T07-081", "T07-082"] },
            \u706B: { role: "\uBE44\uB3D9", tooMuch: "\uB2EC\uC774 \uB458\uC9F8 \uB418\uBA74 \uC11C\uB85C \uC5B4\uB461\uB2E4. \uBCC4\xB7\uAC00\uB85C\uB4F1 \uCABD\uC774\uB77C\uBA74 \uC624\uD788\uB824 \uC5EC\uB7FF\uC774 \uB354 \uBC1D\uC544 \uC815\uC2E0\uC138\uACC4\uC640 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C4\uB2E4.", tooLittle: "\uBC24\uD558\uB298\uC774 \uD145 \uBE44\uBA74 \uACE0\uB3C5\uC774 \uCEE4\uC9C4\uB2E4.", balance: "\uB0B4 \uBE5B\uC758 \uC885\uB958(\uB2EC\xB7\uBCC4\xB7\uAC00\uB85C\uB4F1)\uB97C \uBA3C\uC800 \uD310\uBCC4\uD574\uC57C \uADDC\uCE59\uC774 \uAC08\uB9B0\uB2E4. \uAC19\uC740 \uC885\uB958\uC758 \uBCC4\uC740 \uC6B0\uC815, \uB2E4\uB978 \uC885\uB958\uC758 \uB2EC\uC740 \uACBD\uC7C1\uC774\uB2E4.", sources: ["T07-079", "T07-084"] },
            \u571F: { role: "\uC2DD\uC0C1", tooMuch: "\uC774\uC0C1\uB9CC \uC887\uB2E4 \uD604\uC2E4 \uD130\uC804\uC774 \uC57D\uD574\uC9C8 \uC218 \uC788\uB2E4. \uB098\uBB34\uB97C \uC2EC\uC744 \uAD6C\uCCB4\uC801 \uB545(\uC77C\xB7\uC790\uB9AC)\uC774 \uD544\uC694\uD558\uB2E4.", tooLittle: "\uBE5B\uC744 \uB193\uC744 \uC815\uC6D0\uC774 \uC5C6\uC5B4 \uACB0\uC2E4\uC774 \uB9FA\uD788\uC9C0 \uC54A\uB294\uB2E4.", balance: "\uBC8C\uD310\uC5D0 \uD640\uB85C \uB72C \uB2EC\uC740 \uB204\uAD70\uAC00\uB97C \uAE30\uB2E4\uB9B0\uB2E4. \uC791\uC740 \uC815\uC6D0\uC5D0 \uB098\uBB34\uB97C \uC2EC\uB294 \uC77C(\uAD50\uC721\xB7\uAC00\uC815 \uAFB8\uB9AC\uAE30)\uC774 \uACB0\uC2E4\uB85C \uC774\uC5B4\uC9C4\uB2E4.", sources: ["T07-078", "T07-085", "T07-086"] },
            \u91D1: { role: "\uC7AC\uC131", tooMuch: "\uD070 \uCE7C \uC7AC\uBB3C\uC740 \uC791\uC740 \uBD88\uB85C \uB2E4\uB8E8\uAE30 \uC5B4\uB835\uB2E4. \uC5B5\uC9C0\uB85C \uCDE8\uD558\uB824\uB2E4 \uAC08\uB4F1\uC774 \uC0DD\uAE34\uB2E4.", tooLittle: "\uC7AC\uBB3C\uC758 \uAE08\uC18D\uC774 \uC5C6\uC5B4 \uBC24\uC774 \uAE38\uB2E4. \uCE7C\uC744 \uC904\uC5EC\uC8FC\uB294 \uB098\uBB34 \uC7A5\uCE58\uAC00 \uC624\uBA74 \uCDE8\uD560 \uC218 \uC788\uB2E4.", balance: "\uC791\uC740 \uCE7C\uC740 \uCDE8\uD560 \uC218 \uC788\uC73C\uB098 \uADF8 \uCE7C\uC774 \uBD80\uB974\uB294 \uD070 \uBE5B \uB54C\uBB38\uC5D0 \uD604\uC2E4\xB7\uC774\uC0C1 \uAC08\uB4F1\uC774 \uB530\uB978\uB2E4. \uBA85\uC608\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uC7AC\uBB3C\uC774 \uB530\uB978\uB2E4.", sources: ["T07-077", "T07-087", "T07-088"] },
            \u6C34: { role: "\uAD00\uC131", tooMuch: "\uD070\uBB3C\uC5D0 \uBB36\uC5EC \uB098\uBB34\uB85C \uBCC0\uD55C\uB2E4. \uAD50\uC721\xB7\uAC74\uCD95\xB7\uC0AC\uB78C \uC77C\uB85C \uBC29\uD5A5\uC774 \uC815\uD574\uC9C0\uBA70, \uD480\uB9AC\uB294 \uC2DC\uAE30\uC5D0 \uBD80\uB3D9\uC0B0\uC774 \uC0DD\uAE34\uB2E4.", tooLittle: "\uBC24\uC758 \uBC30\uACBD\uC774 \uC5C6\uC5B4 \uBE5B\uC774 \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294\uB2E4.", balance: "\uBC24\uC740 \uB0B4 \uBB34\uB300\uB2E4. \uBE44(\uC791\uC740 \uBB3C)\uC5D0\uB3C4 \uAC00\uB85C\uB4F1\uC740 \uAEBC\uC9C0\uC9C0 \uC54A\uC73C\uB2C8 \uC5B4\uB450\uC6B4 \uC2DC\uAE30\uC77C\uC218\uB85D \uC5ED\uB7C9\uC774 \uB4DC\uB7EC\uB09C\uB2E4.", sources: ["T07-076", "T07-089", "T07-090"] }
          },
          \u620A: {
            \u6728: {
              role: "\uAD00\uC131",
              tooMuch: "\uB113\uC740 \uBC8C\uC5D0 \uC7A1\uCD08\uB9CC \uBB34\uC131\uD574\uC9C0\uBA74 \uB545 \uAC00\uCE58\uAC00 \uB5A8\uC5B4\uC9C4\uB2E4. \uC18E\uC544\uC904 \uC1E0\uC640 \uC815\uC6D0 \uD759\uC758 \uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uB2E4.",
              tooLittle: "\uC2EC\uC744 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uD669\uBB34\uC9C0\uAC00 \uB41C\uB2E4. \uC9C8\uC11C(\uC9C1\uC7A5\xB7\uB0A8\uD3B8)\uAC00 \uC5C6\uB294 \uC0B6\uC774 \uB418\uAE30 \uC27D\uB2E4.",
              balance: "\uD070 \uB545\uC5D0 \uD070 \uB098\uBB34\uAC00 \uC2EC\uAE30\uBA74 \uCD5C\uC0C1\uC774\uB2E4. \uB098\uBB34\uAC00 \uC9C0\uD558\uC218\uB97C \uB04C\uC5B4\uC62C\uB824 \uC7AC\uBB3C\uACFC \uBA85\uC608\uB97C \uB3D9\uC2DC\uC5D0 \uB9CC\uB4E0\uB2E4. \uACB0\uD63C\xB7\uAD50\uC721\uC774 \uB098\uBB34 \uC2EC\uAE30\uC5D0 \uD574\uB2F9\uD55C\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-114"],
              sources: ["T07-098", "T07-104", "T07-105", "T07-114"]
            },
            \u706B: {
              role: "\uC778\uC131",
              tooMuch: "\uC5F4\uAE30 \uACFC\uB2E4\uB294 \uBB3C\uC744 \uB9D0\uB824 \uC7AC\uBB3C \uACE0\uAC08\uB85C \uC774\uC5B4\uC9C4\uB2E4. \uBE5B \uAD00\uB828 \uC77C\uC5D0\uC11C \uAC08\uB4F1\uC774 \uC99D\uD3ED\uB41C\uB2E4.",
              tooLittle: "\uAF43\uC744 \uD53C\uC6B8 \uC628\uAE30\uAC00 \uC5C6\uC5B4 \uC131\uACFC\uAC00 \uB354\uB514\uB2E4. \uC870\uC9C1\uC0DD\uD65C \uC911\uC2EC\uC73C\uB85C \uBC84\uD2F0\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4.",
              balance: "\uB0B4 \uB545\uC5D0 \uC2EC\uAE34 \uB098\uBB34\uAC00 \uD53C\uC6CC\uC57C \uBA85\uC608\uAC00 \uB41C\uB2E4. \uCC38\uBAA8\xB7\uC5B4\uBA38\uB2C8\uC758 \uB3C4\uC6C0\uC774 \uACB0\uC2E4\uC758 \uC870\uAC74\uC774\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-100"],
              sources: ["T07-100", "T07-106", "T07-107"]
            },
            \u571F: { role: "\uBE44\uB3D9", tooMuch: "\uB545\uC774 \uB458\uC774 \uB418\uBA74 \uC601\uC5ED\uC774 \uB113\uC5B4 \uD22C\uC7A1\xB7\uCD95\uC7AC \uC695\uC2EC\uC774 \uCEE4\uC9C0\uACE0, \uAD6C\uB450\uC1E0 \uAE30\uC9C8\uC774 \uC0DD\uAE38 \uC218 \uC788\uB2E4. \uC0B0\uC774 \uB418\uBA74 \uC815\uC2E0\uC138\uACC4 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C4\uB2E4.", tooLittle: "\uADF8\uB987\uC774 \uC791\uC544 \uD070 \uC7AC\uBB3C\xB7\uD070 \uC870\uC9C1\uC744 \uB2F4\uAE30 \uC5B4\uB835\uB2E4.", balance: "\uC815\uB9AC\uB41C \uC791\uC740 \uB545\uACFC\uB294 \uD569\uCCD0\uC9C0\uC9C0 \uC54A\uB294\uB2E4. \uC11C\uB85C\uC758 \uC5ED\uD560\uC774 \uB2E4\uB984\uC744 \uC778\uC815\uD558\uB294 \uD611\uC5C5\uC774 \uB9DE\uB2E4. \uAC19\uC740 \uD070 \uB545\uB07C\uB9AC\uB294 \uC791\uC740 \uC7AC\uBB3C\uC744 \uAC77\uC5B4\uC904 \uB54C \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4.", sources: ["T07-102", "T07-108", "T07-109"] },
            \u91D1: { role: "\uC2DD\uC0C1", tooMuch: "\uBB3C\uC774 \uB298\uC5B4\uB3C4 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uD759\uD0D5\uC774 \uC2EC\uD574\uC9C4\uB2E4. \uC1E0 \uAD00\uB828 \uC77C\uC774 \uC624\uD788\uB824 \uD0C1\uC218\uB97C \uD0A4\uC6B8 \uC218 \uC788\uB2E4.", tooLittle: "\uC218\uC6D0\uC9C0\uAC00 \uC5C6\uC5B4 \uC7AC\uBB3C\uACFC \uBA85\uC608\uB97C \uB9CC\uB4E4 \uCCB4\uC778\uC774 \uB04A\uAE34\uB2E4.", balance: "\uC1E0\uB294 \uBB3C\uC744 \uB9CC\uB4E4\uACE0 \uB098\uBB34\uB97C \uB2E4\uB4EC\uC5B4 \uC7AC\uBB3C\xB7\uBA85\uC608\uB97C \uD568\uAED8 \uC138\uC6B4\uB2E4. \uCE7C\uB85C \uB098\uBB34\uB97C \uAC00\uC9C0\uB7F0\uD788 \uD558\uBA74 \uB545 \uAC00\uCE58\uAC00 \uC62C\uB77C\uAC04\uB2E4.", sources: ["T07-101", "T07-110", "T07-111"] },
            \u6C34: { role: "\uC7AC\uC131", tooMuch: "\uC81C\uBC29\uC774 \uACAC\uB514\uC9C0 \uBABB\uD558\uBA74 \uD759\uD0D5\uBB3C\uC774 \uB418\uC5B4 \uC7AC\uBB3C\uC774 \uD769\uC5B4\uC9C4\uB2E4. \uBB3C\uC774 \uB108\uBB34 \uB9CE\uC740\uB370 \uD574\uC678\uAE4C\uC9C0 \uAC00\uBA74 \uC545\uD654\uB418\uB2C8 \uC8FC\uC758.", tooLittle: "\uC7AC\uBB3C\uC758 \uBB3C\uC774 \uC5C6\uC73C\uBA74 \uB098\uBB34\uB3C4 \uBABB \uD0A4\uC6B4\uB2E4. \uAD6D\uB0B4 \uC7AC\uC6B4\uC774 \uC5C6\uC73C\uBA74 \uD574\uC678\xB7\uC678\uAD6D\uACC4\uB85C \uBC29\uD5A5\uC744 \uC7A1\uB294\uB2E4. \uC6D0\uAD6D\uC758 \uBB3C\uC740 \uACE0\uC5EC \uC788\uC744 \uBFD0\uC774\uB2C8 \uC6B4\uC774 \uD758\uB7EC\uC57C \uC0AC\uC5C5\uC774 \uB41C\uB2E4.", balance: "\uD070 \uC81C\uBC29\uC5D0 \uB9D1\uC740 \uBB3C\uC774 \uAC00\uB46C\uC838\uC57C \uC790\uC6D0\uC774 \uB41C\uB2E4. \uBA85\uC608(\uB098\uBB34)\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uC7AC\uBB3C\uB3C4 \uC548\uC815\uB41C\uB2E4.", sources: ["T07-099", "T07-112", "T07-113"] }
          },
          \u5DF1: {
            \u6728: { role: "\uAD00\uC131", tooMuch: "\uC791\uC740 \uB545\uC5D0 \uD070 \uB098\uBB34\uB294 \uC7AC\uC559\uC774\uB2E4. \uC2DC\uAC04\uC774 \uAC08\uC218\uB85D \uB545\uC774 \uAC08\uB77C\uC838 \uAC00\uC815\xB7\uAD00\uACC4\uAC00 \uD754\uB4E4\uB9B0\uB2E4. \uD070 \uBA85\uC608 \uCD94\uAD6C\uB97C \uC808\uC81C\uD574\uC57C \uD55C\uB2E4.", tooLittle: "\uC2EC\uC744 \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uAC00\uC815\uC774 \uB2A6\uAC8C \uD615\uC131\uB41C\uB2E4. \uB098\uBB34\uC758 \uBFCC\uB9AC\uB098 \uBB3C\uC774 \uC9C0\uC9C0\uC5D0 \uC788\uC744 \uB54C \uC791\uC740 \uB098\uBB34\uB97C \uC2EC\uB294 \uC2DC\uAE30\uAC00 \uC778\uC0DD\uC758 \uC804\uAE30\uAC00 \uB41C\uB2E4.", balance: "\uC815\uC6D0\uC5D0\uB294 \uC791\uC740 \uB098\uBB34\uAC00 \uC5B4\uC6B8\uB9B0\uB2E4. \uD070 \uB098\uBB34\uB294 \uB04C\uC5B4\uC640\uB3C4 \uC904\uC5EC\uC11C \uC2EC\uC5B4\uC57C \uC11C\uB85C\uB97C \uC9C0\uD0A8\uB2E4. \uACB0\uD63C\uC740 \uB098\uBB34 \uC2EC\uAE30\uB85C \uBCF8\uB2E4.", sources: ["T07-119", "T07-121", "T07-127"] },
            \u706B: { role: "\uC778\uC131", tooMuch: "\uC815\uC6D0\uC774 \uD0C0\uB4E4\uC5B4\uAC00 \uBB3C\uC774 \uB9C8\uB974\uACE0 \uB098\uBB34\uAC00 \uC2DC\uB4E0\uB2E4. \uADF8\uB298(\uC791\uC740 \uBB3C\xB7\uC1E0\uC758 \uD569)\uC774 \uD544\uC694\uD558\uB2E4.", tooLittle: "\uAF43\uC744 \uD53C\uC6B8 \uBE5B\uC774 \uC5C6\uC5B4 \uC9D1\uC548\uC774 \uC5B4\uB461\uB2E4.", balance: "\uC9D1 \uC548\uC758 \uC628\uD654\uD55C \uBE5B\uC73C\uB85C\uB3C4 \uAF43\uC740 \uD540\uB2E4. \uD544\uC694\uD558\uBA74 \uBE5B\uC774 \uBB3C\uC744 \uC904\uC5EC \uC801\uB2F9\uD55C \uD06C\uAE30\uB85C \uB9CC\uB4E4\uC5B4 \uC2EC\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-123", "T07-129", "T07-130"] },
            \u571F: { role: "\uBE44\uB3D9", tooMuch: "\uC815\uC6D0\uC774 \uB458\uC9F8 \uB418\uBA74 \uB450 \uC9D1 \uC0B4\uB9BC\xB7\uD22C\uC7A1\uC774 \uB4F1\uC7A5\uD55C\uB2E4. \uC9D1\uC744 \uD558\uB098 \uB354 \uB9C8\uB828\uD558\uBA74 \uC624\uD788\uB824 \uC548\uC815\uB41C\uB2E4.", tooLittle: "\uD63C\uC790 \uAC10\uB2F9\uD560 \uC601\uC5ED\uC774 \uC881\uC544 \uC18C\uBC15\uD568\uC744 \uAC15\uC694\uBC1B\uB294\uB2E4.", balance: "\uD070 \uB545\uACFC\uB294 \uAD6C\uC870\uAC00 \uB2EC\uB77C \uD569\uCCD0\uC9C0\uC9C0 \uC54A\uB294\uB2E4. \uD070 \uB545 \uCABD \uC7AC\uBB3C\uC744 \uC904\uC5EC \uB0B4 \uB545\uC5D0 \uB098\uBB34\uB97C \uC2EC\uC5B4\uC8FC\uBA74 \uBA85\uC608\uAC00 \uC62C\uB77C\uAC04\uB2E4. \uD070 \uB545\uC5D0 \uC2EC\uAE34 \uB098\uBB34\uAC00 \uC790\uB77C\uBA74 \uB0B4 \uB545\uC73C\uB85C \uC62E\uACA8 \uC2EC\uB294 \uBC1C\uC804 \uACBD\uB85C\uAC00 \uC0DD\uAE34\uB2E4.", sources: ["T07-125", "T07-131", "T07-132"] },
            \u91D1: { role: "\uC2DD\uC0C1", tooMuch: "\uBB3C\uC774 \uB108\uBB34 \uB298\uBA74 \uC624\uD788\uB824 \uC81C\uBC29\uC744 \uC9C0\uD0A4\uAE30 \uC5B4\uB835\uB2E4. \uBB3C \uAD00\uB9AC \uAD00\uC810\uC5D0\uC11C \uC811\uADFC\uD574\uC57C \uD55C\uB2E4.", tooLittle: "\uBB3C\uC744 \uB9CC\uB4E4\uACE0 \uAC00\uC9C0\uB97C \uCE58\uB294 \uD798\uC774 \uC5C6\uC5B4 \uC815\uC6D0 \uAD00\uB9AC\uAC00 \uC5B4\uB835\uB2E4.", balance: "\uC804\uC9C0\uAC00\uC704\uB294 \uC815\uC6D0\uC744 \uC544\uB984\uB2F5\uAC8C \uD558\uACE0 \uBB3C\uC744 \uB9CC\uB4E0\uB2E4. \uD070 \uCE7C\uC740 \uC791\uC740 \uB098\uBB34\uB97C \uB370\uB824\uC640 \uC2EC\uC5B4\uC8FC\uB294 \uC5ED\uD560\uB3C4 \uD55C\uB2E4.", sources: ["T07-124", "T07-133", "T07-134"] },
            \u6C34: { role: "\uC7AC\uC131", tooMuch: "\uC791\uC740 \uC81C\uBC29\uC740 \uD070\uBB3C\uC744 \uBABB \uB9C9\uB294\uB2E4. \uBB34\uB108\uC9C0\uBA74 \uC7AC\uBB3C\xB7\uAC00\uC815\uC774 \uD568\uAED8 \uD754\uB4E4\uB9AC\uB2C8, \uBB3C\uC744 \uD758\uB824\uBCF4\uB0B4\uB4EF \uD574\uC678\xB7\uC678\uAD6D\uACC4 \uBC29\uD5A5\uC774 \uCC98\uBC29\uC774\uB2E4.", tooLittle: "\uC815\uC6D0\uC774 \uB9D0\uB77C \uBE44\uC625\uD568\uC744 \uC783\uB294\uB2E4. \uC791\uC740 \uBB3C\uC774 \uC624\uB294 \uC2DC\uAE30\uAC00 \uC7AC\uBB3C\uC758 \uACC4\uC808\uC774\uB2E4.", balance: "\uB9D1\uC740 \uC791\uC740 \uBB3C\uC740 \uC815\uC6D0\uC758 \uC0DD\uBA85\uC774\uB2E4. \uB2E4\uB9CC \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uBB3C\uB9CC \uD759\uD0D5\uC774 \uB418\uB2C8 \uB098\uBB34\uB97C \uBA3C\uC800 \uC2EC\uC5B4\uC57C \uD55C\uB2E4.", sources: ["T07-122", "T07-135"] }
          },
          \u5E9A: {
            \u6728: { role: "\uC7AC\uC131", tooMuch: "\uCE7C\uC790\uB8E8(\uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790)\uAC00 \uB108\uBB34 \uB9CE\uAC70\uB098 \uAC15\uD558\uBA74 \uCE7C\uB0A0\uC774 \uC0C1\uD55C\uB2E4. \uC5EC\uB7EC \uC778\uC5F0\uC744 \uC887\uC73C\uBA74 \uBAB8\uACFC \uC0AC\uC5C5\uC774 \uD568\uAED8 \uB2E4\uCE5C\uB2E4.", tooLittle: "\uCE7C\uC790\uB8E8\uAC00 \uC5C6\uC73C\uBA74 \uBB34\uC7AC \uC0C1\uD0DC\uB85C, \uC0AC\uC5C5\uBCF4\uB2E4 \uC870\uC9C1\uC774 \uB9DE\uACE0 \uC7AC\uBB3C\uC6B4\uC774 \uC62C \uB54C\uB9CC \uC6C0\uC9C1\uC5EC\uC57C \uD55C\uB2E4.", balance: "\uD070 \uCE7C\uC5D0\uB294 \uD070 \uCE7C\uC790\uB8E8\uAC00 \uCD5C\uC801\uC774\uB2E4. \uC790\uB8E8(\uB098\uBB34)\uC758 \uBFCC\uB9AC\uAE4C\uC9C0 \uD2BC\uD2BC\uD574\uC57C \uC7AC\uBB3C\uC774 \uBAA8\uC778\uB2E4. \uACB0\uD63C\uC740 \uC790\uB8E8\uAC00 \uB07C\uC6CC\uC9C0\uB294 \uC2DC\uAE30\uB85C \uBCF8\uB2E4.", sources: ["T07-142", "T07-144", "T07-150", "T07-160"] },
            \u706B: { role: "\uAD00\uC131", tooMuch: "\uC774\uBBF8 \uC644\uC131\uB41C \uCE7C\uC774 \uB2E4\uC2DC \uBD88\uC5D0 \uB4E4\uC5B4\uAC00\uBA74 \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9C4\uB2E4. \uACFC\uC5F4\uAE30\uC5D0\uB294 \uADF8\uB298(\uBB3C\xB7\uC791\uC740 \uCE7C\uC758 \uD569)\uC774 \uD544\uC694\uD558\uB2E4.", tooLittle: "\uAD8C\uD55C\xB7\uBA85\uC608\uC758 \uBD88\uC774 \uC5C6\uC5B4 \uB9AC\uB354 \uC790\uB9AC\uAC00 \uBA40\uB2E4.", balance: "\uD0DC\uC591\uC774 \uBB3C \uC704\uC5D0 \uB728\uACE0 \uCE7C\uC774 \uBB3C\uC5D0\uC11C \uC798 \uB180\uBA74 \uBA85\uC608\xB7\uC7AC\uBB3C\uC774 \uD568\uAED8 \uC628\uB2E4. \uAD8C\uB825\uC744 \uB0A8\uC6A9\uD558\uBA74 \uC790\uB8E8\uAC00 \uD0C4\uB2E4.", sources: ["T07-152", "T07-153"] },
            \u571F: { role: "\uC778\uC131", tooMuch: "\uD070 \uC81C\uBC29\uACFC \uC791\uC740 \uBB3C\uC774 \uB9CC\uB098\uBA74 \uD759\uD0D5\uC774 \uB418\uC5B4 \uC624\uD788\uB824 \uD574\uB86D\uB2E4.", tooLittle: "\uBB3C\uC744 \uAC00\uB458 \uC81C\uBC29\uC774 \uC5C6\uC5B4 \uC2E4\uB825\uC774 \uD758\uB7EC\uAC04\uB2E4.", balance: "\uC81C\uBC29\uC5D0 \uC790\uB8E8\uAC00 \uB420 \uB098\uBB34\uAC00 \uC2EC\uAE30\uACE0 \uBB3C\uC774 \uB9D1\uC544\uC9C0\uBA74 \uC219\uC0B4\uAD8C\uC774 \uC644\uC131\uB41C\uB2E4. \uC6B4\uC5D0\uC11C \uB098\uBB34\uAC00 \uC624\uBA74 \uC9C1\uC811 \uC9D3\uB294 \uC77C(\uAC74\uCD95\xB7\uBD80\uB3D9\uC0B0)\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-146", "T07-154", "T07-155"] },
            \u91D1: { role: "\uBE44\uB3D9", tooMuch: "\uCE7C\uC774 \uC5EC\uB7EC \uAC1C\uBA74 \uC790\uB8E8 \uC7C1\uD0C8\uC804\uC774 \uBC8C\uC5B4\uC9C4\uB2E4. \uACBD\uC7C1\uC790\uB97C \uAC77\uC5B4\uC904 \uB098\uBB34\uC758 \uC2DC\uAE30\uC5D0 \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4.", tooLittle: "\uB3D9\uB8CC\uC758 \uD798\uC774 \uC57D\uD574 \uD070 \uD310\uC744 \uBC8C\uC774\uAE30 \uC5B4\uB835\uB2E4.", balance: "\uC791\uC740 \uCE7C\uACFC \uD568\uAED8\uBA74 \uB0B4\uAC00 \uC8FC\uB3C4\uD558\uB418 \uADF8 \uCE7C\uC774 \uBD88\uB7EC\uC628 \uBA85\uC608\uC640 \uBB3C\uC744 \uD65C\uC6A9\uD558\uB294 \uD611\uC5C5\uC774 \uB9DE\uB2E4. \uCE7C\uB07C\uB9AC \uBD80\uB52A\uCE58\uB294 \uC694\uB780\uD568\uC774 \uC131\uD5A5\uC73C\uB85C \uB0A8\uB294\uB2E4.", sources: ["T07-148", "T07-156", "T07-157"] },
            \u6C34: { role: "\uC2DD\uC0C1", tooMuch: "\uAE09\uB958\uB294 \uCE7C\uB0A0\uC744 \uBB34\uB514\uAC8C \uD55C\uB2E4. \uBB3C\uC774 \uB118\uCE58\uACE0 \uB098\uBB34\uAC00 \uD06C\uBA74 \uC624\uD788\uB824 \uBCA0\uAE30 \uC5B4\uB824\uC6CC \uC7AC\uBB3C\uC774 \uC5B4\uB824\uC6CC\uC9C4\uB2E4.", tooLittle: "\uB2F4\uAE08\uC9C8\uD560 \uBB3C\uC774 \uC5C6\uC5B4 \uC2E4\uB825\uC774 \uBB34\uC6A9\uC9C0\uBB3C\uC774 \uB41C\uB2E4. \uBB3C\uC744 \uCC3E\uC544 \uD574\uC678\uB97C \uB118\uB098\uB4DC\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4.", balance: "\uC1E0\uB294 \uB9D1\uC740 \uD070\uBB3C\uC5D0\uC11C \uB180\uC544\uC57C \uD55C\uB2E4. \uD759\uD0D5\uBB3C\uC5D0\uC11C\uB294 \uB179\uC2AC\uB2C8, \uBB3C\uC758 \uB9D1\uC74C\uC774 \uACE7 \uC2E4\uB825\uC758 \uC870\uAC74\uC774\uB2E4.", sources: ["T07-145", "T07-158", "T07-159"] }
          },
          \u8F9B: {
            \u6728: { role: "\uC7AC\uC131", tooMuch: "\uC791\uC740 \uCE7C\uB85C \uD070 \uB098\uBB34\uB97C \uBCA0\uB824\uB2E4 \uCE7C\uB0A0\uC774 \uC0C1\uD55C\uB2E4. \uD070 \uC7AC\uBB3C \uC695\uC2EC\uC774 \uC0AC\uC5C5(\uD68C\uC0AC)\uC744 \uC704\uD0DC\uB86D\uAC8C \uD55C\uB2E4.", tooLittle: "\uCE7C\uC790\uB8E8\uAC00 \uC5C6\uC73C\uBA74 \uC790\uD574\xB7\uD3ED\uB825\uC801 \uC0AC\uC6A9 \uC704\uD5D8\uC774 \uCEE4\uC9C4\uB2E4. \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4\uC904 \uD759\uC758 \uD569\uC774 \uC624\uBA74 \uD574\uC18C\uB41C\uB2E4.", balance: "\uC54C\uB9DE\uC740 \uC791\uC740 \uC790\uB8E8\uAC00 \uC0DD\uBA85\uC774\uB2E4. \uD070 \uC790\uB8E8\uC640\uB294 \uCC3D \uAD00\uACC4\uB77C \uC870\uC9C1\uC774 \uB9DE\uACE0, \uC790\uB8E8\uAC00 \uC54C\uB9DE\uC544\uC9C0\uB294 \uC2DC\uAE30\uC5D0 \uC7AC\uBB3C\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-165", "T07-167", "T07-173", "T07-174"] },
            \u706B: { role: "\uAD00\uC131", tooMuch: "\uD070 \uBD88\uC5D0 \uBB36\uC774\uBA74 \uBE5B\uC744 \uC783\uB294\uB2E4. \uAD6D\uAC00 \uBE44\uACF5\uAC1C \uC9C1\uAD70\uCC98\uB7FC \uC5B4\uB460 \uC18D \uC5ED\uD560\uC774\uB098, \uC5F4\uC744 \uAC77\uC5B4\uC904 \uC7A5\uCE58\uAC00 \uD544\uC694\uD558\uB2E4.", tooLittle: "\uBE5B\uC744 \uB0B4\uC904 \uBA85\uC608\uAC00 \uC57D\uD574 \uC874\uC7AC\uAC00 \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294\uB2E4.", balance: "\uD070 \uBE5B\uC744 \uC9C1\uC811 \uB04C\uC5B4\uC640 \uC790\uC2E0\uC744 \uBC1D\uD78C\uB2E4. \uB300\uC2E0 \uD569\uC73C\uB85C \uBB36\uC774\uB2C8, \uBA85\uC608\uB294 \uC2A4\uC2A4\uB85C \uC887\uAE30\uBCF4\uB2E4 \uC77C\uC744 \uC798\uD574 \uC778\uC815\uBC1B\uB294 \uAE38\uC774 \uB0AB\uB2E4. \uC791\uC740 \uBD88\uC740 \uBA85\uC608\uC640 \uC2E4\uB9AC\uB97C \uD568\uAED8 \uC8FC\uB294 \uC0C1\uB300\uB2E4.", sources: ["T07-170", "T07-175", "T07-176"] },
            \u571F: { role: "\uC778\uC131", tooMuch: "\uD070 \uC81C\uBC29\uC740 \uC791\uC740 \uBB3C\uC744 \uD759\uD0D5\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uC624\uD788\uB824 \uD574\uB86D\uB2E4.", tooLittle: "\uBB3C\uC744 \uB9C9\uC544\uC904 \uC81C\uBC29\uC774 \uC5C6\uC5B4 \uC2E4\uB825\uC774 \uD758\uB7EC\uAC04\uB2E4.", balance: "\uC790\uB8E8\uAC00 \uB420 \uB098\uBB34\uAC00 \uC81C\uB300\uB85C \uC2EC\uAE30\uACE0 \uBB3C\uC774 \uC54C\uB9DE\uAC8C \uB9C9\uD600\uC57C \uB2A5\uB825\uC774 \uC644\uC131\uB41C\uB2E4. \uC6B4\uC758 \uD569\uC73C\uB85C \uC81C\uBC29\uC774 \uC54C\uB9DE\uC740 \uD06C\uAE30\uAC00 \uB418\uBA74 \uB098\uBB34 \uC2EC\uAE30(\uC7AC\uBB3C)\uAC00 \uC5F4\uB9B0\uB2E4.", sources: ["T07-169", "T07-177", "T07-178"] },
            \u91D1: { role: "\uBE44\uB3D9", tooMuch: "\uCE7C\uC774 \uACB9\uCE58\uBA74 \uC608\uBBFC\uD568\uACFC \uACBD\uC7C1\uC774 \uCEE4\uC9C4\uB2E4. \uB450 \uCE7C\uC740 \uC548\uD14C\uB098\uCC98\uB7FC \uC815\uBCF4\uB97C \uBAA8\uC73C\uB294 \uD2B9\uC131\uC774 \uB41C\uB2E4.", tooLittle: "\uB3D9\uB8CC\uC758 \uD798\uC774 \uC57D\uD574 \uD569\uB3D9 \uADDC\uBAA8\uC758 \uC77C\uC744 \uBC8C\uC774\uAE30 \uC5B4\uB835\uB2E4.", balance: "\uD070 \uCE7C\uACFC \uD568\uAED8\uBA74 \uC77C\uB300\uC77C\uB85C \uBD88\uB9AC\uD558\uB2C8, \uB098\uC758 \uBFCC\uB9AC(\uC785\xB7\uC190\uC7AC\uC8FC)\uAC00 \uD2BC\uD2BC\uD55C\uC9C0\uAC00 \uAE30\uC900\uC774\uB2E4. \uD569\uC73C\uB85C \uD070 \uCE7C\uC744 \uC904\uC774\uBA74 \uB450 \uCE7C\uC774 \uD568\uAED8 \uBA85\uC608\uB97C \uBD80\uB978\uB2E4. \uD569\uB3D9 \uBC95\uBB34\xB7\uD68C\uACC4\uCC98\uB7FC \uD798\uC744 \uBAA8\uC73C\uBA74 \uD070 \uC7AC\uBB3C\uC774 \uAC00\uB2A5\uD558\uB2E4.", sources: ["T07-171", "T07-179", "T07-180"] },
            \u6C34: { role: "\uC2DD\uC0C1", tooMuch: "\uAC15\uD55C \uBB3C\uC0B4\uC740 \uCE7C\uB0A0\uC744 \uBB34\uB514\uAC8C \uD55C\uB2E4. \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uC7A5\uCE58\uAC00 \uC624\uBA74 \uACAC\uB518\uB2E4.", tooLittle: "\uB2F4\uAE00 \uBB3C\uC774 \uC5C6\uC5B4 \uC2E4\uB825\uC774 \uBE5B\uB098\uC9C0 \uBABB\uD55C\uB2E4. \uC774\uB54C \uD574\uC678\uAC00 \uCC98\uBC29\uC774\uB2E4.", balance: "\uC801\uB2F9\uB7C9\uC758 \uB9D1\uC740 \uBB3C\uC774 \uCD5C\uC801\uC774\uB2E4. \uBB3C\uC774 \uC788\uC73C\uBA74 \uC0AC\uB78C\uC744 \uC0B4\uB9AC\uB294 \uC815\uBC00 \uAE30\uC220(\uC758\uB8CC \uB4F1)\uB85C \uBA85\uC608\uB97C \uC5BB\uB294\uB2E4.", sources: ["T07-168", "T07-181", "T07-182"] }
          },
          \u58EC: {
            \u6728: { role: "\uC2DD\uC0C1", tooMuch: "\uB098\uBB34\uAC00 \uBB3C\uC744 \uB108\uBB34 \uB9C8\uC2DC\uBA74 \uC218\uB7C9\uC774 \uC900\uB2E4. \uC131\uC7A5 \uD45C\uD604\uC774 \uACFC\uD558\uBA74 \uC790\uC6D0\uC774 \uACE0\uAC08\uB41C\uB2E4.", tooLittle: "\uD758\uB7EC\uAC08 \uBC29\uD5A5\uACFC \uC2A4\uBA70\uB4E4 \uB300\uC0C1\uC774 \uC5C6\uC5B4 \uACE0\uC778 \uBB3C\uC774 \uB41C\uB2E4.", balance: "\uBB3C\uC740 \uB098\uBB34\uB97C \uD0A4\uC6CC \uC874\uC7AC \uAC00\uCE58\uB97C \uC99D\uBA85\uD55C\uB2E4. \uC81C\uBC29 \uC704\uC5D0 \uB098\uBB34\uAC00 \uC2EC\uAE30\uBA74 \uD759\uD0D5\uC774 \uB9C9\uD600 \uAC00\uC815\xB7\uC9C1\uC7A5\uC774 \uAD73\uC5B4\uC9C4\uB2E4. \uB098\uBB34 \uC5C6\uC73C\uBA74 \uAD50\uC721\xB7\uAC74\uCD95 \uC77C\uB85C \uC9C1\uC811 \uC2EC\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4.", sources: ["T07-191", "T07-196"] },
            \u706B: { role: "\uC7AC\uC131", tooMuch: "\uC7AC\uBB3C\uC758 \uBE5B\uC774 \uC5EC\uB7FF\uC774\uBA74 \uC5B4\uB514\uC5D0 \uB730\uC9C0 \uD63C\uB780\uC2A4\uB7FD\uACE0, \uC791\uC740 \uBE44\uB294 \uC218\uBA74\uC744 \uD750\uB9B0\uB2E4.", tooLittle: "\uC7AC\uBB3C\uC758 \uD0DC\uC591\uC774 \uC5C6\uC5B4 \uBB34\uC7AC \uC0C1\uD0DC\uAC00 \uB41C\uB2E4. \uBB3C\uC774 \uC2A4\uC2A4\uB85C \uBD88\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uC5F0\uACB0\uC774 \uC788\uC73C\uBA74 \uADF9\uBCF5\uB41C\uB2E4.", balance: "\uB9D1\uC740 \uD638\uC218 \uC704\uC758 \uD0DC\uC591\uC774 \uCD5C\uC0C1 \uADF8\uB9BC\uC774\uB2E4. \uC7AC\uBB3C\uBCF4\uB2E4 \uBA85\uC608\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uC7AC\uBB3C\uC774 \uB530\uB77C\uC624\uB294 \uC21C\uC11C\uAC00 \uC6D0\uCE59\uC774\uB2E4.", sources: ["T07-192", "T07-198", "T07-199"] },
            \u571F: { role: "\uAD00\uC131", tooMuch: "\uD070\uBB3C\uC5D0 \uC81C\uBC29\uC774 \uB9CE\uC73C\uBA74 \uC624\uD788\uB824 \uAC07\uD78C \uB290\uB08C\uC774\uC9C0\uB9CC, \uC5C6\uB294 \uAC83\uBCF4\uB2E4\uB294 \uB0AB\uB2E4.", tooLittle: "\uC81C\uBC29 \uC5C6\uB294 \uBB3C\uC740 \uC815\uCC29\uC5D0 \uC2E4\uD328\uD574 \uBC29\uD669\uD55C\uB2E4. \uD759 \uAD00\uB828 \uC77C\uC774\uB098 \uC1E0 \uC77C\uB85C \uBCF4\uCDA9\uC774 \uD544\uC694\uD558\uB2E4.", balance: "\uD06C\uACE0 \uD2BC\uD2BC\uD55C \uC81C\uBC29\uC774 \uC808\uB300 \uC870\uAC74\uC774\uB2E4. \uC791\uC740 \uC81C\uBC29\uC740 \uAC19\uC774 \uBB34\uB108\uC9C0\uB2C8 \uD06C\uAE30\uAC00 \uB9DE\uC544\uC57C \uD55C\uB2E4. \uC81C\uBC29\uC774 \uC0DD\uAE30\uB294 \uC2DC\uAE30\uAC00 \uACB0\uD63C\xB7\uC815\uCC29\uC758 \uC2DC\uAE30\uB2E4.", sources: ["T07-188", "T07-190", "T07-200", "T07-201", "T07-206"] },
            \u91D1: { role: "\uC778\uC131", tooMuch: "\uC218\uC6D0\uC9C0\uAC00 \uB108\uBB34 \uB9CE\uC544 \uBB3C\uC774 \uB118\uCE58\uBA74 \uC81C\uBC29 \uBD80\uB2F4\uC774 \uCEE4\uC9C4\uB2E4.", tooLittle: "\uC218\uC6D0\uC774 \uB9D0\uB77C \uC874\uC7AC\uAC00 \uC704\uD0DC\uB86D\uB2E4. \uD574\uC678\xB7\uC678\uAD6D\uACC4\xB7\uC1E0 \uC77C\uB85C \uBB3C\uC744 \uB9CC\uB4DC\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4. \uB2E8 \uD759\uD0D5 \uC0C1\uD0DC\uC5D0\uC120 \uC1E0 \uC77C\uC774 \uD0C1\uC218\uB97C \uD0A4\uC6B0\uB2C8 \uB098\uBB34 \uBA3C\uC800\uB2E4.", balance: "\uC218\uC6D0\uC9C0\uB294 \uD638\uC218\uB97C \uCC44\uC6B0\uACE0, \uCE7C\uC740 \uBB3C\uC5D0\uC11C \uB180\uBA70 \uC11C\uB85C\uB97C \uC0B4\uB9B0\uB2E4. \uBA85\uC608\uB85C \uC5F0\uACB0\uB418\uB294 \uAD6C\uC870\uAC00 \uC644\uC131\uB418\uBA74 \uCD5C\uC0C1\uC758 \uD65C\uC57D\uC774 \uAC00\uB2A5\uD558\uB2E4.", sources: ["T07-193", "T07-202", "T07-203"] },
            \u6C34: { role: "\uBE44\uB3D9", tooMuch: "\uBB3C\uC774 \uACB9\uCE58\uBA74 \uC81C\uBC29\uC774 \uBC84\uD2F0\uC9C0 \uBABB\uD558\uACE0 \uB098\uBB34\uAE4C\uC9C0 \uBF51\uD78C\uB2E4. \uC218\uB7C9 \uC870\uC808\uC774 \uCD5C\uC6B0\uC120 \uACFC\uC81C\uB2E4.", tooLittle: "\uD63C\uC790\uC778 \uBB3C\uC740 \uD798\uC774 \uC57D\uD558\uB2E4.", balance: "\uBB3C\uC740 \uD569\uCCD0\uC838 \uD06C\uC9C0\uB9CC \uC815\uD574\uC8FC\uB294 \uD798\uC774 \uD544\uC694\uD558\uB2E4. \uC791\uC740 \uBD88\uC744 \uD1B5\uD574 \uC904\uC774\uB294 \uCC98\uBC29\uC774 \uC4F0\uC774\uBA74 \uC815\uC2E0\uC138\uACC4\xB7\uC885\uAD50 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C4\uB2E4.", sources: ["T07-194", "T07-204"] }
          },
          \u7678: {
            \u6728: { role: "\uC2DD\uC0C1", tooMuch: "\uC791\uC740 \uBB3C\uB85C \uD070 \uB098\uBB34\uB97C \uD0A4\uC6B0\uB2E4 \uC2A4\uC2A4\uB85C \uB9C8\uB978\uB2E4. \uAE34 \uACF5\uBD80\xB7\uD070 \uAC74\uCD95\uC774 \uC624\uD788\uB824 \uC7AC\uC559\uC774 \uB41C\uB2E4.", tooLittle: "\uC2A4\uBA70\uB4E4 \uB300\uC0C1\uC774 \uC5C6\uC5B4 \uC874\uC7AC \uAC00\uCE58\uAC00 \uC0AC\uB77C\uC9C4\uB2E4.", balance: "\uC791\uC740 \uB098\uBB34\uC5D0 \uB0B4\uB9AC\uB294 \uB2E8\uBE44\uAC00 \uCD5C\uC801 \uADF8\uB9BC\uC774\uB2E4. \uD070 \uB098\uBB34\uB294 \uBB3C\uC744 \uBCF4\uCDA9\uD560 \uC218\uC6D0\uC9C0\uC640 \uD574\uC678\uAC00 \uD568\uAED8 \uC788\uC744 \uB54C\uB9CC \uCF1C\uB3C4 \uB41C\uB2E4.", sources: ["T07-214", "T07-219", "T07-220"] },
            \u706B: { role: "\uC7AC\uC131", tooMuch: "\uAC15\uD55C \uC5F4\uAE30\uB294 \uB098\uB97C \uB9D0\uB9B0\uB2E4. \uADF8\uB298(\uBB3C\uC744 \uB9CC\uB4DC\uB294 \uC1E0\uC758 \uD569)\uC774 \uC5C6\uC73C\uBA74 \uC7AC\uBB3C \uC55E\uC5D0\uC11C \uBB34\uB98E \uAFC7\uB294\uB2E4.", tooLittle: "\uC628\uAE30\uAC00 \uC5C6\uC5B4 \uC0DD\uBA85\uC744 \uAE30\uB974\uC9C0 \uBABB\uD55C\uB2E4.", balance: "\uC791\uC740 \uBE5B\uC740 \uC7AC\uBB3C\uC774\uC790 \uC815\uC2E0\uC138\uACC4\uC758 \uB3D9\uBC18\uC790\uB2E4. \uC778\uC7AC\uB97C \uD0A4\uC6CC \uAF43 \uD53C\uC6B0\uB294 \uACBD\uC601\uD615 \uAD6C\uC870\uC640 \uC798 \uB9DE\uB294\uB2E4.", sources: ["T07-215", "T07-221", "T07-222"] },
            \u571F: { role: "\uAD00\uC131", tooMuch: "\uD070 \uC81C\uBC29\uACFC \uB9CC\uB098\uBA74 \uBB36\uC774\uACE0 \uD759\uD0D5\uC774 \uB41C\uB2E4. \uC218\uB7C9 \uBCF4\uCDA9(\uC1E0 \uC77C)\uC774 \uC808\uB300 \uD544\uC694\uD558\uB2E4. \uBD80\uB3D9\uC0B0 \uD589\uC6B4\uB3C4 \uC774 \uD569\uC5D0\uC11C \uC628\uB2E4.", tooLittle: "\uC81C\uBC29 \uC5C6\uC774 \uD758\uB7EC \uD754\uC801 \uC5C6\uC774 \uC0AC\uB77C\uC9C8 \uC218 \uC788\uB2E4. \uD574\uC678\xB7\uC678\uAD6D\uACC4\xB7\uC1E0 \uC77C\uB85C \uBB3C\uC744 \uCC44\uC6B0\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4.", balance: "\uC54C\uB9DE\uC740 \uC791\uC740 \uC81C\uBC29\uC774 \uC0DD\uBA85\uC774\uB2E4. \uC81C\uBC29\uC774 \uC624\uB294 \uC2DC\uAE30\uAC00 \uACB0\uD63C\xB7\uC548\uC815\uC758 \uC2DC\uAE30\uB2E4. \uD070 \uC81C\uBC29\uC740 \uD759\uD0D5 \uB9AC\uC2A4\uD06C\uB85C \uAD00\uB9AC \uB300\uC0C1\uC774\uB2E4.", sources: ["T07-211", "T07-213", "T07-223", "T07-224", "T07-229"] },
            \u91D1: { role: "\uC778\uC131", tooMuch: "\uC218\uC6D0\uC9C0 \uACFC\uB2E4\uB294 \uBB3C\uC744 \uB298\uB9AC\uC9C0\uB9CC \uC81C\uBC29 \uBD80\uB2F4\uC73C\uB85C \uB3CC\uC544\uC628\uB2E4.", tooLittle: "\uC218\uB7C9\uC774 \uC791\uC544 \uAE08\uBC29 \uACE0\uAC08\uB41C\uB2E4. \uC1E0 \uC77C\uB85C \uBB3C\uC744 \uACC4\uC18D \uB9CC\uB4DC\uB294 \uAC83\uC774 \uD544\uC218 \uCC98\uBC29\uC774\uB2E4.", balance: "\uB3CC \uD2C8 \uC0D8\uBB3C\uCC98\uB7FC \uC218\uC6D0\uC9C0\uAC00 \uB9D1\uC74C\uC744 \uC9C0\uD0A8\uB2E4. \uC0C1\uB300\uC758 \uC2E4\uB825(\uCE7C)\uC744 \uC0B4\uB9AC\uB294 \uBB3C\uC774 \uB418\uC5B4 \uC11C\uB85C \uC131\uC7A5\uD558\uB294 \uAD6C\uC870\uC640 \uC798 \uB9DE\uB294\uB2E4.", sources: ["T07-216", "T07-225", "T07-226"] },
            \u6C34: { role: "\uBE44\uB3D9", tooMuch: "\uBE44\uAC00 \uACB9\uCE58\uBA74 \uB545\uC744 \uC53B\uC5B4 \uB0B4\uB824\uAC04\uB2E4. \uD070 \uC81C\uBC29\uC774 \uAC70\uB46C\uC8FC\uB294 \uC2DC\uAE30\uC5D0\uC57C \uC548\uC815\uB41C\uB2E4.", tooLittle: "\uD63C\uC790\uC778 \uC0D8\uC740 \uC27D\uAC8C \uB9D0\uB77C \uC0AC\uB77C\uC9C4\uB2E4.", balance: "\uBB3C\uC740 \uC720\uC77C\uD558\uAC8C \uD569\uCCD0\uC9C0\uB294 \uC624\uD589\uC774\uB2E4. \uD070\uBB3C\uC5D0 \uD569\uB958\uD574 \uD798\uC744 \uC5BB\uB418, \uC0C1\uB300\uAC00 \uBB3C\uACFC \uB098\uBB34\uB97C \uAD00\uB9AC\uD574\uC8FC\uB294\uC9C0\uAC00 \uC131\uD328 \uC870\uAC74\uC774\uB2E4.", sources: ["T07-217", "T07-227", "T07-228"] }
          }
        },
        dayStemVsStems: {
          \u7532: {
            \u7532: { image: "\uB098\uBB34\uC640 \uB098\uBB34", rule: "\uB450 \uADF8\uB8E8\uBA74 \uAC11\uAC11\uD558\uB2E4. \uC6B4\uC5D0\uC11C \uD759\uC774 \uC640 \uBE44\uACAC\uC744 \uAC77\uC5B4\uC904 \uB54C \uB2A5\uB825\uC774 \uBC1C\uD718\uB418\uACE0, \uC14B \uC774\uC0C1\uC774\uBA74 \uC232\uC774 \uB418\uC5B4 \uB9CE\uC740 \uB545(\uBD80\uB3D9\uC0B0 \uC77C)\uC774 \uD544\uC694\uD574\uC9C4\uB2E4.", sources: ["T07-014"] },
            \u4E59: { image: "\uB098\uBB34\uC640 \uB11D\uCFE8", rule: "\uC2A4\uC2B9\uACFC \uC81C\uC790, \uC0C1\uC0AC\uC640 \uBD80\uD558\uC758 \uACF5\uC0DD\uC774\uB2E4. \uB11D\uCFE8\uC774 \uD070 \uB098\uBB34\uC5D0 \uC624\uB974\uBA74 \uC11C\uB85C \uC774\uB86D\uACE0, \uB11D\uCFE8\uC774 \uAD6D\uAC00\uC790\uB9AC\uC5D0 \uC788\uC73C\uBA74 \uAD6D\uAC00 \uAD8C\uD55C(\uC790\uACA9\uC99D)\uC744 \uB04C\uC5B4\uC640 \uC4F4\uB2E4.", sources: ["T07-015", "T07-038"] },
            \u4E19: { image: "\uB098\uBB34\uC640 \uD0DC\uC591", rule: "\uD070 \uBE5B\uC744 \uBC1B\uC544 \uD070 \uAF43\uC744 \uD53C\uC6B4\uB2E4. \uBC30\uC6B4 \uAC83\uC774 \uC138\uC0C1\uC5D0 \uC778\uC815\uBC1B\uB294 \uAD6C\uC870\uC774\uBA70, \uBE5B\uC774 \uB450 \uAC1C \uC774\uC0C1 \uACB9\uCE60 \uB54C\uB294 \uB098\uBB34\uAC00 \uD558\uB098\uB97C \uAC00\uB824 \uAC08\uB4F1\uC744 \uD47C\uB2E4.", sources: ["T07-016", "T07-062"] },
            \u4E01: { image: "\uB098\uBB34\uC640 \uB2EC\uBE5B", rule: "\uB2EC\uBE5B \uC544\uB798 \uB098\uBB34 \uBC11\uC5D0\uC11C \uC0AC\uB78C\uB4E4\uC774 \uAFC8\uC744 \uD0A4\uC6B4\uB2E4(\uC5F0\uC560\xB7\uBD04). \uC774\uC5B4 \uD759\uC774 \uC624\uBA74 \uC2EC\uAE30\uB294 \uC2DC\uAE30(\uACB0\uD63C)\uAC00 \uB41C\uB2E4. \uBB3C\uC774 \uC5C6\uC73C\uBA74 \uB2EC\uC774 \uBB3C\uC744 \uB04C\uC5B4\uC640 \uC131\uC7A5\uC744 \uB3D5\uB294\uB2E4.", sources: ["T07-017"] },
            \u620A: { image: "\uB098\uBB34\uC640 \uB4E4\uB158", rule: "\uD070 \uB545\uC5D0 \uC2EC\uAE30\uBA74 \uC548\uC815\uC801\uC73C\uB85C \uB2A5\uB825\uC744 \uBC1C\uD718\uD55C\uB2E4. \uBB3C\uC774 \uC5C6\uC73C\uBA74 \uB545\uC774 \uBB3C\uC744 \uBD80\uB974\uC9C0\uB9CC \uC784\uC2DC\uBC29\uD3B8\uC774\uACE0, \uBB3C\uC6B4\uC774 \uC624\uBA74 \uD070 \uC7AC\uBB3C\uB85C \uC774\uC5B4\uC9C4\uB2E4.", sources: ["T07-018"] },
            \u5DF1: { image: "\uB098\uBB34\uC640 \uC815\uC6D0", rule: "\uC791\uC740 \uB545\uC5D0 \uBB36\uC774\uB294 \uD569\uC774\uB77C \uBC1C\uD718\uAC00 \uC5B4\uB835\uACE0, \uC138\uC6D4\uC774 \uAC00\uBA74 \uB545\uC774 \uAC08\uB77C\uC838 \uAC00\uC815 \uBB38\uC81C\uAC00 \uC0DD\uAE34\uB2E4. \uAC19\uC740 \uC131\uBD84\uC774 \uC6B4\uC5D0\uC11C \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB824 \uAC1C\uC6B4\uB41C\uB2E4.", sources: ["T07-019"] },
            \u5E9A: { image: "\uC790\uB8E8\uC640 \uD070 \uCE7C", rule: "\uD070 \uCE7C\uC790\uB8E8\uAC00 \uD070 \uCE7C\uC744 \uC7A1\uB294 \uB9AC\uB354 \uAD6C\uC870\uB2E4. \uBA85\uC608\uAC00 \uB192\uC544\uC9C0\uACE0 \uBD80\uD558(\uB11D\uCFE8)\uB97C \uB04C\uC5B4\uC624\uBA70, \uAC74\uCD95\xB7\uD1A0\uBAA9 \uAC19\uC740 \uC9D3\uB294 \uC77C\uB3C4 \uAC00\uB2A5\uD574\uC9C4\uB2E4.", sources: ["T07-020"] },
            \u8F9B: { image: "\uC790\uB8E8\uC640 \uC791\uC740 \uCE7C(\uCC3D)", rule: "\uAE34 \uC790\uB8E8\uC5D0 \uC791\uC740 \uCE7C\uC774 \uCC3D\uC774 \uB418\uC5B4 \uC870\uC9C1\uC0DD\uD65C\uC774 \uB9DE\uB2E4. \uD759\uC774 \uC624\uBA74 \uC790\uB8E8\uAC00 \uC54C\uB9DE\uC740 \uD06C\uAE30\uB85C \uC904\uC5B4 \uC2E4\uB825\uC774 \uC0B4\uACE0, \uC791\uC740 \uCE7C\uC774 \uBE5B\uACFC \uBB3C\uC744 \uBCF4\uD0DC\uC900\uB2E4.", sources: ["T07-021"] },
            \u58EC: { image: "\uB098\uBB34\uC640 \uD070\uBB3C", rule: "\uB9CE\uC740 \uBB3C\uC774 \uC131\uC7A5\uC758 \uC5F0\uB8CC\uB2E4. \uC81C\uBC29 \uC704\uC5D0 \uC2EC\uAE30\uBA74 \uD070 \uC7AC\uBB3C\uC774 \uB418\uC9C0\uB9CC, \uC5C6\uC73C\uBA74 \uBD80\uC720\uD55C\uB2E4. \uC6B4\uC5D0\uC11C \uC81C\uBC29\uC774 \uC624\uBA74 \uCDE8\uC5C5\xB7\uC2B9\uC9C4\xB7\uACB0\uD63C\xB7\uBD80\uB3D9\uC0B0\uC774 \uACB9\uCE5C\uB2E4.", sources: ["T07-022"] },
            \u7678: { image: "\uB098\uBB34\uC640 \uB2E8\uBE44", rule: "\uC0DD\uC874\uD560 \uBB3C\uC740 \uB418\uC9C0\uB9CC \uD06C\uAC8C \uC790\uB77C\uAE30\uC5D4 \uBD80\uC871\uD558\uB2E4. \uD130\uC804\uC774 \uC5C6\uC744 \uB54C\uB294 \uC791\uC740 \uBB3C\uC774 \uD070 \uC81C\uBC29\uC744 \uBD88\uB7EC \uC815\uCC29\uC744 \uB3D5\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-023"] }
          },
          \u4E59: {
            \u7532: { image: "\uB11D\uCFE8\uACFC \uD070 \uB098\uBB34", rule: "\uAE30\uB300\uC624\uB984(\uB4F1\uB77C\uACC4\uAC11)\uC774\uB2E4. \uC0C1\uB300\uC758 \uBFCC\uB9AC\uAC00 \uD2BC\uD2BC\uD574\uC57C \uC62C\uB77C\uAC08 \uC218 \uC788\uACE0, \uC0C1\uB300\uAC00 \uD759\uACFC \uBB36\uC5EC \uC57D\uD574\uC9C0\uBA74 \uC11C\uB85C \uC5C9\uCF1C \uC2E4\uD328\uD55C\uB2E4. \uC0C1\uB300\uAC00 \uAD6D\uAC00\uC790\uB9AC\uC5D0 \uC788\uC73C\uBA74 \uAD6D\uAC00\uB97C \uC774\uC6A9\uD55C \uBA85\uC608\uAC00 \uC5F4\uB9B0\uB2E4.", sources: ["T07-038", "T07-035"] },
            \u4E59: { image: "\uB11D\uCFE8\uACFC \uB11D\uCFE8", rule: "\uC11C\uB85C \uC5C9\uD0A4\uBA74 \uB458 \uB2E4 \uC798 \uC790\uB77C\uC9C0 \uBABB\uD55C\uB2E4. \uD070 \uCE7C\uC774 \uC640 \uD558\uB098\uB97C \uC815\uB9AC\uD574\uC904 \uB54C \uBE44\uB85C\uC18C \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4(\uCDE8\uC5C5\xB7\uC2B9\uC9C4\xB7\uACB0\uD63C\xB7\uC0AC\uC5C5 \uAC1C\uC6B4).", sources: ["T07-036", "T07-039"] },
            \u4E19: { image: "\uAF43\uACFC \uD0DC\uC591", rule: "\uBC1D\uC740 \uBE5B\uC5D0 \uD5A5\uAE30\uB85C\uC6B4 \uAF43\uC774 \uD540\uB2E4. \uB2E4\uB9CC \uBE5B\uC774 \uC9C0\uB098\uCE58\uBA74 \uC2DC\uB4E4\uC5B4 \uBB3C(\uBE44)\uC774 \uAC00\uB824\uC918\uC57C \uD55C\uB2E4. \uBB3C\uC774 \uBD80\uC871\uD560 \uB54C\uB294 \uC0C1\uB300\uAC00 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uAE30\uB3C4 \uD55C\uB2E4.", sources: ["T07-033", "T07-039"] },
            \u4E01: { image: "\uAF43\uACFC \uB2EC\uBE5B", rule: "\uBC24\uC5D0 \uD53C\uB294 \uAF43\uC774\uB2E4. \uC0C1\uB300\uAC00 \uC785\uC758 \uBFCC\uB9AC\uC640 \uD568\uAED8 \uC624\uBA74 \uBC24 \uC77C\uD130(\uC220\uC9D1\xB7\uCEE4\uD53C\uC20D) \uC778\uC5F0\uC774 \uAC80\uC99D\uB41C\uB2E4. \uBB3C\uC774 \uC5C6\uC73C\uBA74 \uB2EC\uC774 \uBB3C\uC744 \uC904\uC5EC \uD0A4\uC6B4\uB2E4.", sources: ["T07-082"] },
            \u620A: { image: "\uAF43\uACFC \uB4E4\uB158", rule: "\uCC99\uBC15\uD55C \uD070 \uB545\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uBA74 \uAD74\uACE1\uC774 \uC2EC\uD558\uACE0 \uD070 \uC7AC\uBB3C\uC740 \uC5B4\uB835\uB2E4. \uC6B4\uC5D0\uC11C \uC791\uC740 \uBB3C\uC774 \uC640 \uB545\uC744 \uC904\uC774\uBA74 \uCDE8\uB4DD\uC774 \uAC00\uB2A5\uD558\uACE0, \uD070 \uB098\uBB34\uAC00 \uC624\uBA74 \uAE30\uB300\uC624\uB984\uC73C\uB85C \uC2B9\uC9C4\xB7\uBD80\uB3D9\uC0B0\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-041"] },
            \u5DF1: { image: "\uAF43\uACFC \uC815\uC6D0", rule: "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC815\uC6D0\uC5D0 \uC2EC\uAE30\uBA74 \uD654\uBAA9\uD55C \uAC00\uC815\uACFC \uC548\uC815\uC774 \uC628\uB2E4. \uC0C1\uB300\uAC00 \uD070 \uB098\uBB34\uB97C \uBD88\uB7EC\uB0B4 \uAE30\uB300\uC624\uB984 \uC870\uAC74\uB3C4 \uB9CC\uB4E4\uC5B4\uC900\uB2E4.", sources: ["T07-042"] },
            \u5E9A: { image: "\uC790\uB8E8\uC640 \uD070 \uCE7C", rule: "\uD070 \uCE7C\uC5D0 \uBB36\uC774\uC9C0\uB9CC, \uBB36\uC74C\uC774 \uC0C1\uB300\uB97C \uC904\uC5EC \uC791\uC740 \uCE7C\uB85C \uB9CC\uB4E4\uBA74 \uD070 \uBE5B(\uAD6D\uAC00)\uC744 \uBD88\uB7EC\uC628\uB2E4. \uC0C1\uB300\uAC00 \uAD6D\uAC00\uC790\uB9AC\uC5D0 \uC788\uC73C\uBA74 \uC81C\uBCF5 \uC9C1\uAD70(\uAD70\xB7\uACBD\xB7\uC138\uAD00)\uC774 \uAC00\uB2A5\uD574\uC9C4\uB2E4.", sources: ["T07-043", "T07-034"] },
            \u8F9B: { image: "\uC790\uB8E8\uC640 \uC791\uC740 \uCE7C", rule: "\uC815\uBC00\uD55C \uBA85\uC608\uC758 \uC870\uD569\uC774\uB2E4. \uBA54\uC2A4(\uC758\uC0AC)\xB7\uC8FC\uC0AC\uAE30(\uAC04\uD638)\xB7\uC124\uACC4(\uAC74\uCD95\uC0AC)\uB85C \uC774\uC5B4\uC9C0\uACE0, \uCE7C\uC774 \uB458\uC774\uBA74 \uAC00\uC704(\uBBF8\uC6A9\xB7\uC7AC\uB2E8)\uAC00 \uB41C\uB2E4. \uCE7C\uC774 \uAC15\uD558\uACE0 \uBFCC\uB9AC\uAC00 \uC5C6\uC73C\uBA74 \uBCA0\uC77C \uC704\uD5D8\uC774 \uC788\uB2E4.", sources: ["T07-044"] },
            \u58EC: {
              image: "\uAF43\uACFC \uD070\uBB3C",
              rule: "\uD070\uBB3C \uC704\uC5D0 \uB72C \uBD80\uC720 \uC0C1\uD0DC\uB77C \uC815\uCC29\uC774 \uC5B4\uB835\uACE0 \uAC00\uC815\xB7\uC9C1\uC5C5\uC774 \uC790\uC8FC \uBC14\uB010\uB2E4. \uC81C\uBC29\uC774 \uB9C9\uC544\uB3C4 \uBFCC\uB9AC\uB294 \uCC99\uBC15\uD558\uB2C8, \uCC28\uB77C\uB9AC \uD574\uC678\xB7\uC720\uD1B5 \uBC29\uD5A5\uC774\uB098 \uBB3C\uC744 \uC904\uC5EC\uC8FC\uB294 \uC791\uC740 \uBD88\uC774 \uCC98\uBC29\uC774\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T07-045"],
              sources: ["T07-032", "T07-045"]
            },
            \u7678: { image: "\uAF43\uACFC \uB2E8\uBE44", rule: "\uC801\uB2F9\uD55C \uBE44\uAC00 \uB0B4\uB9AC\uBA74 \uC6B0\uD6C4\uC8FD\uC21C\uCC98\uB7FC \uC131\uC7A5\uD55C\uB2E4. \uBE44\uAC00 \uD070 \uC81C\uBC29\uC744 \uC54C\uB9DE\uC740 \uD06C\uAE30\uB85C \uC904\uC5EC \uC2EC\uAE30\uBA74 \uC7AC\uBB3C\uACFC \uC0B6\uC774 \uD3B8\uC548\uD574\uC9C0\uACE0, \uAE30\uB300\uC624\uB984 \uC870\uAC74\uAE4C\uC9C0 \uC5F4\uB9B0\uB2E4.", sources: ["T07-046"] }
          },
          \u4E19: {
            \u7532: { image: "\uD0DC\uC591\uACFC \uD070 \uB098\uBB34", rule: "\uD070 \uB098\uBB34\uB97C \uD53C\uC6B0\uBA74 \uD070 \uACB0\uC2E4\uC774\uB2E4. \uB098 \uC790\uC2E0\uC774 \uC5B4\uB450\uC6CC\uC9C8 \uB54C\uB098 \uBE5B\uB07C\uB9AC \uAC08\uB4F1\uD560 \uB54C, \uD070 \uB098\uBB34\uAC00 \uD558\uB098\uB97C \uAC00\uB824 \uD574\uACB0\uD574\uC900\uB2E4.", sources: ["T07-059", "T07-061"] },
            \u4E59: { image: "\uD0DC\uC591\uACFC \uAF43", rule: "\uACB0\uC2E4\uC740 \uC791\uC9C0\uB9CC \uC0C1\uB300\uB294 \uD5A5\uAE30\uB85C\uC6CC\uC9C4\uB2E4. \uC0C1\uB300\uAC00 \uD070 \uCE7C\uC744 \uB04C\uC5B4\uC640 \uC81C\uBCF5 \uBA85\uC608\uB97C \uB9CC\uB4E4\uBA70, \uADF8 \uACFC\uC815\uC5D0\uC11C \uB098\uAE4C\uC9C0 \uBB36\uC77C \uC218 \uC788\uC5B4 \uC7AC\uBB3C \uD0D0\uC695\uC744 \uC808\uC81C\uD574\uC57C \uD55C\uB2E4.", sources: ["T07-060"] },
            \u4E19: { image: "\uD0DC\uC591\uACFC \uD0DC\uC591", rule: "\uB458\uC774\uBA74 \uC11C\uB85C \uAC00\uB824 \uC5B4\uB450\uC6CC\uC9C4\uB2E4. \uB098\uBB34\uAC00 \uAC00\uC6B4\uB370 \uC11C\uBA74 \uB2E4\uC2DC \uBC1D\uACE0, \uC6B4\uC5D0\uC11C \uC791\uC740 \uCE7C\uC774 \uD558\uB098\uB97C \uAC77\uC5B4\uC8FC\uBA74 \uB2E8\uB3C5 \uC870\uBA85\uC774 \uB41C\uB2E4. \uC14B\uC774 \uB418\uBA74 \uB450 \uAC1C\uBCF4\uB2E4 \uBC1D\uC544\uC9C4\uB2E4.", sources: ["T07-061", "T07-048"] },
            \u4E01: { image: "\uD0DC\uC591\uACFC \uB2EC", rule: "\uB0AE\uACFC \uBC24\uC774 \uB3D9\uC2DC\uC5D0 \uB5A0 \uC788\uB294 \uD615\uC0C1\uC73C\uB85C \uD604\uC2E4\uACFC \uC774\uC0C1\uC758 \uAC08\uB4F1\uC774 \uC0DD\uAE34\uB2E4. \uD070 \uB098\uBB34\uAC00 \uAC00\uB9AC\uAC70\uB098, \uC6B4\uC758 \uD070\uBB3C\uC774 \uB2EC\uC744 \uBB36\uC5B4 \uD574\uC18C\uB41C\uB2E4.", sources: ["T07-062"] },
            \u620A: { image: "\uD0DC\uC591\uACFC \uB4E4\uB158", rule: "\uB545\uC5D0 \uC0DD\uBA85\uC744 \uBE44\uCD94\uACE0, \uB545\uC774 \uBB3C\uC744 \uB9C9\uC544 \uD638\uC218\uAC00 \uB418\uBA70, \uADF8 \uC704\uC5D0 \uB098\uBB34\uAC00 \uC11C\uBA74 \uBA85\uC608\uB85C\uC6B4 \uACB0\uC2E4\uC774 \uC644\uC131\uB41C\uB2E4. \uC0C1\uD638 \uAC15\uD654\uC758 \uC88B\uC740 \uC9DD\uC774\uB2E4.", sources: ["T07-063"] },
            \u5DF1: { image: "\uD0DC\uC591\uACFC \uC815\uC6D0", rule: "\uC815\uC6D0\uC5D0 \uB0AE\uC774 \uBE44\uCD94\uB294 \uD615\uC0C1\uC774\uB2E4. \uC0C1\uB300\uAC00 \uD070 \uB098\uBB34\uB97C \uBD88\uB7EC \uAC08\uB4F1\uC744 \uAC00\uB824\uC8FC\uACE0, \uC791\uC740 \uAF43\uC774 \uD53C\uBA74 \uD589\uBCF5\uD55C \uAC00\uC815\uC774 \uB41C\uB2E4.", sources: ["T07-064"] },
            \u5E9A: { image: "\uD0DC\uC591\uACFC \uD070 \uCE7C", rule: "\uD070 \uCE7C\uC744 \uB179\uC5EC \uD070 \uC7AC\uBB3C\uC744 \uCDE8\uD560 \uC218 \uC788\uC73C\uB098 \uB098\uC758 \uBFCC\uB9AC\uAC00 \uD2BC\uD2BC\uD574\uC57C \uD55C\uB2E4. \uC791\uC740 \uCE7C\uCABD \uC7AC\uBB3C\uC740 \uD3EC\uAE30\uD574\uC57C \uD558\uBA70, \uC7AC\uBB3C\uBCF4\uB2E4 \uBA85\uC608\uAC00 \uC6D0\uCE59\uC774\uB2E4.", sources: ["T07-065"] },
            \u8F9B: { image: "\uD0DC\uC591\uACFC \uC791\uC740 \uCE7C", rule: "\uC791\uC740 \uC7AC\uBB3C\uC5D0 \uBB36\uC5EC \uBE5B\uC744 \uC783\uB294\uB2E4. \uB2E4\uB9CC \uC6D0\uAD6D\uC5D0 \uBB3C\uC774 \uC5C6\uC744 \uB54C\uB294 \uC774 \uBB36\uC74C\uC774 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uC0DD\uBA85\uC904\uC774 \uB41C\uB2E4.", sources: ["T07-066"] },
            \u58EC: { image: "\uD0DC\uC591\uACFC \uD070\uBB3C", rule: "\uB9D1\uC740 \uD638\uC218 \uC704\uC5D0 \uB728\uB294 \uCD5C\uC0C1\uC758 \uBA85\uC608 \uD615\uC0C1\uC774\uB2E4. \uC81C\uBC29\uACFC \uB098\uBB34\uAC00 \uBB3C\uC744 \uC815\uD654\uD574\uC57C \uD558\uBA70, \uBA85\uC608\uC5D0\uC11C \uBA85\uC608\uB85C \uC774\uC5B4\uC9C0\uB294 \uAD6C\uC870\uB77C \uBA85\uC608 \uCD94\uAD6C\uAC00 \uC815\uB2F5\uC774\uB2E4.", sources: ["T07-067"] },
            \u7678: { image: "\uD0DC\uC591\uACFC \uBE44", rule: "\uBE44\uB294 \uB098\uB97C \uAC00\uB824 \uC5B4\uB461\uAC8C \uD55C\uB2E4. \uD070 \uC81C\uBC29\uC774 \uC640 \uBE44\uB97C \uAC70\uB450\uBA74 \uB2E4\uC2DC \uBC1D\uC544\uC838 \uB2A5\uB825\uC774 \uC0B4\uC544\uB09C\uB2E4.", sources: ["T07-067"] }
          },
          \u4E01: {
            \u7532: { image: "\uAC00\uB85C\uB4F1\uACFC \uC9C0\uC8FC", rule: "\uC9C0\uC9C0\uB300\uAC00 \uB418\uB294 \uD070 \uB098\uBB34\uAC00 \uC788\uC73C\uBA74 \uD06C\uAC8C \uBC1C\uD718\uD55C\uB2E4. \uAF43 \uD53C\uC6B0\uAE30\uB294 \uC791\uC544 \uACB0\uC2E4\uC740 \uC791\uC740 \uD3B8\uC774\uB2E4.", sources: ["T07-081", "T07-075"] },
            \u4E59: { image: "\uB2EC\uBE5B\uACFC \uC815\uC6D0 \uAF43", rule: "\uC815\uC6D0\uC758 \uAF43\uC744 \uBC1D\uD600 \uD589\uBCF5\uD55C \uAC00\uC815\uC774 \uB41C\uB2E4. \uC0C1\uB300\uAC00 \uC785\uC758 \uBFCC\uB9AC\uC640 \uD568\uAED8 \uC624\uBA74 \uBC24 \uC77C\uD130 \uC778\uC5F0\uC774 \uB418\uACE0, \uD070 \uCE7C\uC744 \uC904\uC5EC \uC7AC\uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB098 \uADF8 \uBE5B \uB54C\uBB38\uC5D0 \uAC08\uB4F1\uC774 \uB530\uB978\uB2E4.", sources: ["T07-082"] },
            \u4E19: { image: "\uB2EC\uACFC \uD0DC\uC591", rule: "\uD604\uC2E4\uACFC \uC774\uC0C1\uC758 \uAC08\uB4F1\uC774\uB2E4. \uC6B4\uC5D0\uC11C \uC791\uC740 \uCE7C\uC774 \uD070 \uBE5B\uC744 \uAC77\uC5B4\uC8FC\uB294 \uAC83\uC774 \uCD5C\uC120\uC774\uACE0, \uBE44\uAC00 \uAC00\uB9AC\uAC70\uB098 \uB098\uBB34\uAC00 \uC11C\uB3C4 \uB41C\uB2E4. \uAD6D\uB0B4\uC5D0\uC11C \uD574\uC18C\uAC00 \uC548 \uB418\uBA74 \uD574\uC678\uAC00 \uCC98\uBC29\uC774\uB2E4.", sources: ["T07-083"] },
            \u4E01: { image: "\uB2EC\uACFC \uB2EC", rule: "\uB2EC\uC740 \uB458\uC9F8 \uB418\uBA74 \uC5B4\uB461\uC9C0\uB9CC, \uBCC4\xB7\uAC00\uB85C\uB4F1\uC740 \uC5EC\uB7FF\uC774 \uB354 \uBC1D\uB2E4. \uC14B\uC774 \uBCC4\uBB34\uB9AC\uAC00 \uB418\uBA74 \uC815\uC2E0\uC138\uACC4 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C0\uACE0, \uC9C0\uC8FC\uAC00 \uC624\uBA74 \uC870\uBA85 \uC0AC\uC5C5\uB3C4 \uAC00\uB2A5\uD558\uB2E4. \uBE44\uACAC\uC774 \uC788\uC73C\uBA74 \uC7AC\uBB3C\xB7\uBA85\uC608\uB97C \uBA3C\uC800 \uAE54\uC544\uC57C \uD55C\uB2E4.", sources: ["T07-084"] },
            \u620A: { image: "\uB2EC\uACFC \uBC8C\uD310", rule: "\uD5C8\uBC8C\uD310\uC5D0 \uD640\uB85C \uB72C \uB2EC\uC774\uB2E4. \uB204\uAD70\uAC00\uB97C \uAE30\uB2E4\uB9AC\uB294 \uB9C8\uC74C\uC758 \uD615\uC0C1\uC774\uBA70, \uD070\uBB3C\uC744 \uBD88\uB7EC \uB098\uBB34\uB85C \uB9CC\uB4E4\uC5B4 \uC2EC\uC73C\uBA74 \uAD50\uC721\xB7\uD559\uC6D0 \uACC4\uC5F4\uC5D0\uC11C \uC131\uACFC\uAC00 \uB09C\uB2E4.", sources: ["T07-085"] },
            \u5DF1: { image: "\uB2EC\uACFC \uC815\uC6D0", rule: "\uC791\uC740 \uC9D1 \uCC3D \uB108\uBA38 \uB2EC\uC774 \uBE44\uCD94\uB294 \uD615\uC0C1\uC774\uB2E4. \uD070\uBB3C\uC744 \uBD88\uB7EC \uB098\uBB34\uB85C \uB9CC\uB4E4\uC5B4 \uC2EC\uC73C\uBA74 \uAC00\uC815\uC744 \uAFB8\uB9AC\uB294 \uC77C\uC774 \uB418\uACE0, \uC5EC\uC790\uB77C\uBA74 \uB0A8\uD3B8 \uC9C1\uC5C5(\uC791\uC740 \uAD50\uC721)\uAE4C\uC9C0 \uC720\uCD94\uB41C\uB2E4.", sources: ["T07-086"] },
            \u5E9A: { image: "\uCD1B\uBD88\uACFC \uD070 \uCE7C", rule: "\uC791\uC740 \uBD88\uB85C \uD070 \uCE7C\uC740 \uBABB \uB179\uC778\uB2E4. \uD070\uBB3C\uC744 \uBD88\uB7EC \uB098\uBB34 \uC790\uB8E8\uB97C \uB9CC\uB4E4\uBA74 \uC0C1\uB300\uB97C \uC7A1\uC544 \uC7AC\uBB3C\uC774 \uB418\uACE0, \uC5EC\uC790\uB77C\uBA74 \uACB0\uD63C\uC774 \uACBD\uC81C\uC801 \uC548\uC815\uC73C\uB85C \uC774\uC5B4\uC9C4\uB2E4.", sources: ["T07-087"] },
            \u8F9B: { image: "\uCD1B\uBD88\uACFC \uC791\uC740 \uCE7C", rule: "\uC791\uC740 \uCE7C\uC740 \uC7AC\uBB3C\uB85C \uCDE8\uD558\uB098 \uADF8 \uCE7C\uC774 \uBD80\uB974\uB294 \uD070 \uBE5B \uB54C\uBB38\uC5D0 \uAC08\uB4F1\uC774 \uC0DD\uAE34\uB2E4. \uD070\uBB3C\uB85C \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4 \uBA85\uC608\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uD3B8\uC548\uD574\uC9C4\uB2E4.", sources: ["T07-088"] },
            \u58EC: { image: "\uCD1B\uBD88\uACFC \uD070\uBB3C", rule: "\uD070\uBB3C\uC5D0 \uBB36\uC5EC \uB098\uBB34\uB85C \uBCC0\uD55C\uB2E4. \uAD50\uC721\xB7\uAC74\uCD95\xB7\uC0AC\uB78C\uC744 \uC0C1\uB300\uD558\uB294 \uC77C\uB85C \uBC29\uD5A5\uC774 \uC815\uD574\uC9C0\uBA70, \uBB36\uC74C\uC774 \uD480\uB9AC\uACE0 \uB098\uBB34\uAC00 \uC2EC\uAE30\uBA74 \uBD80\uB3D9\uC0B0\uC774 \uC0DD\uAE34\uB2E4.", sources: ["T07-089"] },
            \u7678: { image: "\uAC00\uB85C\uB4F1\uACFC \uB2E8\uBE44", rule: "\uBE44\uAC00 \uB0B4\uB824\uB3C4 \uAC00\uB85C\uB4F1\uC740 \uAEBC\uC9C0\uC9C0 \uC54A\uB294\uB2E4. \uBE44\uAC00 \uD070 \uC81C\uBC29\uC744 \uC54C\uB9DE\uAC8C \uC904\uC5EC \uC2EC\uAE30\uBA74 \uC791\uC740 \uBD80\uB3D9\uC0B0\uC774 \uC0DD\uAE34\uB2E4.", sources: ["T07-090"] }
          },
          \u620A: {
            \u7532: { image: "\uB4E4\uB158\uACFC \uD070 \uB098\uBB34", rule: "\uCD5C\uC801\uC758 \uC2DD\uC7AC\uB2E4. \uB098\uBB34\uAC00 \uC9C0\uD558\uC218\uB97C \uB04C\uC5B4\uC62C\uB824 \uC7AC\uBB3C\uC744 \uB9CC\uB4E4\uACE0 \uADF8 \uBB3C\uB85C \uC131\uC7A5\uD574 \uBA85\uC608\uAE4C\uC9C0 \uC62C\uB9B0\uB2E4. \uC774 \uC77C(\uAD50\uC721\xB7\uAC74\uCD95\xB7\uC0AC\uB78C) \uC790\uCCB4\uAC00 \uBA85\uC804 \uC7AC\uD6C4\uAC00 \uB41C\uB2E4.", sources: ["T07-104", "T07-098"] },
            \u4E59: { image: "\uB4E4\uB158\uACFC \uB11D\uCFE8", rule: "\uB11D\uCFE8\uB9CC \uBB34\uC131\uD558\uBA74 \uC7A1\uCD08\uBC24\uC774 \uB41C\uB2E4. \uC0C1\uB300\uAC00 \uD070 \uCE7C\uC744 \uB04C\uC5B4\uC640 \uB2E4\uB4EC\uC5B4\uC9C0\uACE0 \uBB3C\uC744 \uC5BB\uC73C\uBA74 \uD070 \uB098\uBB34\uB85C \uD0A4\uC6B8 \uC218 \uC788\uACE0, \uD070 \uB098\uBB34\uAC00 \uC624\uBA74 \uAE30\uB300\uC624\uB984\uC73C\uB85C \uBA85\uC608\uAC00 \uC0DD\uAE34\uB2E4.", sources: ["T07-105"] },
            \u4E19: { image: "\uB4E4\uB158\uACFC \uD0DC\uC591", rule: "\uBC1D\uC740 \uD587\uBE5B\uC5D0 \uB098\uBB34\uAC00 \uD53C\uC6CC \uBA85\uC608(\uBC30\uC6B4 \uAC83\uC758 \uC778\uC815)\uAC00 \uB41C\uB2E4. \uC5F4\uC774 \uC9C0\uB098\uCE58\uBA74 \uBB3C\uC774 \uB9C8\uB974\uB2C8, \uC791\uC740 \uCE7C\uC774 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uC2DC\uAE30\uC5D0 \uBD80\uC640 \uBA85\uC608\uAC00 \uD568\uAED8 \uC628\uB2E4.", sources: ["T07-106"] },
            \u4E01: { image: "\uB4E4\uB158\uACFC \uB2EC\uBE5B", rule: "\uBB3C\uC774 \uC5C6\uC744 \uB54C \uC791\uC740 \uBE5B\uC774 \uD070\uBB3C\uC744 \uBD88\uB7EC \uC7AC\uBB3C\uACFC \uB098\uBB34\uB97C \uD568\uAED8 \uB9CC\uB4E4\uC5B4\uC900\uB2E4. \uC6B4\uC5D0\uC11C \uBB3C\uC774 \uC624\uBA74 \uAC74\uCD95\uBB3C\uC774 \uC0DD\uAE38 \uC218 \uC788\uB2E4.", sources: ["T07-107"] },
            \u620A: { image: "\uB4E4\uB158\uACFC \uB4E4\uB158", rule: "\uB545\uC774 \uB450 \uBC30\uB85C \uB113\uC5B4\uC9C4\uB2E4. \uD22C\uC7A1\xB7\uCD95\uC7AC \uC695\uC2EC\uC774 \uC0DD\uAE30\uACE0 \uBB3C\uC744 \uAC00\uB450\uC5B4 \uC7AC\uBB3C\uC744 \uC313\uC9C0\uB9CC, \uBB3C\uC774 \uBCF4\uC774\uC9C0 \uC54A\uAC8C \uC800\uC7A5\uD558\uB294 \uAD6C\uB450\uC1E0 \uAE30\uC9C8\uC774 \uC0DD\uAE38 \uC218 \uC788\uB2E4. \uC0B0\uC774 \uB418\uBA74 \uC815\uC2E0\uC138\uACC4\xB7\uC885\uAD50 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C4\uB2E4.", sources: ["T07-108"] },
            \u5DF1: { image: "\uB4E4\uB158\uACFC \uC815\uC6D0", rule: "\uC815\uB9AC\uB41C \uC791\uC740 \uB545\uC740 \uB0B4 \uAC83\uACFC \uD569\uCCD0\uC9C0\uC9C0 \uC54A\uB294\uB2E4. \uB300\uC2E0 \uC0C1\uB300\uAC00 \uD070 \uB098\uBB34\uB97C \uBD88\uB7EC \uB0B4 \uB545\uC5D0 \uC2EC\uC5B4\uC8FC\uB294 \uC5ED\uD560\uC744 \uD574 \uBA85\uC608\uB97C \uB192\uC5EC\uC900\uB2E4. \uD559\uAD50\xB7\uAD50\uC721 \uC778\uC5F0\uACFC \uC798 \uB9DE\uB294\uB2E4.", sources: ["T07-109", "T07-102"] },
            \u5E9A: { image: "\uB4E4\uB158\uACFC \uD070 \uCE7C", rule: "\uD070 \uCE7C\uC774 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uACF5\uAE09\uD558\uB294 \uC218\uC6D0\uC9C0 \uC5ED\uD560\uC744 \uD55C\uB2E4. \uB098\uBB34\uAC00 \uC788\uC73C\uBA74 \uB2E4\uB4EC\uB294 \uC77C(\uAC74\uCD95)\uB85C \uC774\uC5B4\uC9C4\uB2E4.", sources: ["T07-110"] },
            \u8F9B: { image: "\uB4E4\uB158\uACFC \uC791\uC740 \uCE7C", rule: "\uC791\uC740 \uCE7C\uC774 \uD070 \uBE5B\uC744 \uBD88\uB7EC \uAF43\uC744 \uD53C\uC6B0\uB294 \uC778\uD14C\uB9AC\uC5B4\xB7\uB514\uC790\uC778 \uC77C\uB85C \uC5F0\uACB0\uB418\uACE0, \uBB3C\uC744 \uB9CC\uB4DC\uB294 \uD569\uC774 \uB418\uBA74 \uC7AC\uBB3C\uB3C4 \uC0DD\uAE34\uB2E4.", sources: ["T07-111"] },
            \u58EC: { image: "\uC81C\uBC29\uACFC \uD070\uBB3C", rule: "\uD070 \uC7AC\uBB3C\uC744 \uAC00\uB458 \uC218 \uC788\uB294 \uCD5C\uC0C1\uC758 \uC81C\uBC29 \uAD00\uACC4\uB2E4. \uB2E4\uB9CC \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uBB3C\uC774 \uD759\uD0D5\uC774 \uB418\uC5B4 \uC7AC\uBB3C\uC774 \uBAA8\uC774\uC9C0 \uC54A\uC73C\uB2C8, \uBA85\uC608(\uB098\uBB34)\uB97C \uBA3C\uC800 \uC138\uC6CC\uC57C \uD55C\uB2E4.", sources: ["T07-112"] },
            \u7678: { image: "\uC81C\uBC29\uACFC \uB2E8\uBE44", rule: "\uC791\uC740 \uBB3C\uC5D0 \uBB36\uC774\uACE0 \uD070 \uB545\uC5D0 \uC791\uC740 \uBB3C\uC740 \uD759\uD0D5\uC774 \uB418\uAE30 \uC27D\uB2E4. \uB098\uBB34\uAC00 \uC790\uB77C\uBA74 \uC791\uC740 \uBB3C\uC774 \uB9C8\uB974\uB2C8, \uB300\uD559\uAD50\uC721\uAE4C\uC9C0 \uAC00\uB294 \uAE34 \uACF5\uBD80\uB294 \uC7AC\uBB3C\uC744 \uB9D0\uB9AC\uB294 \uC5ED\uC124\uC774 \uC788\uB2E4.", sources: ["T07-113"] }
          },
          \u5DF1: {
            \u7532: { image: "\uC815\uC6D0\uACFC \uD070 \uB098\uBB34", rule: "\uBB36\uC774\uB294 \uD569\uC774\uB77C \uB2A5\uB825\uC774 \uAC07\uD788\uACE0, \uB098\uBB34\uAC00 \uC790\uB77C\uBA74 \uC815\uC6D0\uC774 \uAC08\uB77C\uC9C4\uB2E4. \uD070 \uBA85\uC608(\uB0A8\uD3B8\xB7\uC870\uC9C1)\uB97C \uADF8\uB300\uB85C \uD488\uC73C\uBA74 \uAC00\uC815\uC774 \uD754\uB4E4\uB9B0\uB2E4\uB294 \uC2E4\uC804 \uADDC\uCE59\uC774 \uC788\uB2E4.", sources: ["T07-127"] },
            \u4E59: { image: "\uC815\uC6D0\uACFC \uAF43\uB098\uBB34", rule: "\uAC00\uC7A5 \uC54C\uB9DE\uC740 \uC2DD\uC7AC\uB2E4. \uD589\uBCF5\uD55C \uAC00\uC815\uC774 \uB418\uACE0 \uC791\uC740 \uAD50\uC721(\uC720\uC544\xB7\uCD08\uC911\uACE0) \uC778\uC5F0\uC774 \uC0DD\uAE30\uBA70, \uC0C1\uB300\uAC00 \uD070 \uCE7C\uC744 \uC904\uC5EC \uD070 \uBE5B\uC744 \uBD88\uB7EC\uC624\uBA74 \uAD6D\uAC00\xB7\uAE08\uC735\xB7\uC815\uCE58 \uAD00\uC2EC\uAE4C\uC9C0 \uC5F4\uB9B0\uB2E4.", sources: ["T07-128"] },
            \u4E19: { image: "\uC815\uC6D0\uACFC \uD0DC\uC591", rule: "\uC815\uC6D0\uC5D0 \uB0AE\uC774 \uBE44\uCD94\uB294 \uD615\uC0C1\uC774\uB2E4. \uAF43\uC774 \uC788\uC73C\uBA74 \uC544\uB984\uB2F5\uC9C0\uB9CC \uC5F4\uC774 \uC9C0\uB098\uCE58\uBA74 \uBB3C\uC774 \uB9C8\uB974\uB2C8, \uC791\uC740 \uCE7C\uC758 \uD569\uC774\uB098 \uBE44\uAC00 \uAC00\uB824\uC918\uC57C \uD55C\uB2E4.", sources: ["T07-129"] },
            \u4E01: { image: "\uC815\uC6D0\uACFC \uB2EC\uBE5B", rule: "\uC9D1 \uC548\uC5D0\uC11C\uB3C4 \uAF43\uC740 \uD540\uB2E4. \uAF43\uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uC791\uC740 \uBE5B\uC774 \uBB3C\uC744 \uC904\uC5EC \uB098\uBB34\uB97C \uB9CC\uB4E4\uC5B4 \uC2EC\uC5B4\uC8FC\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-130"] },
            \u620A: { image: "\uC815\uC6D0\uACFC \uB4E4\uB158", rule: "\uC791\uC740 \uB545\uC774 \uD070 \uB545\uC73C\uB85C \uD655\uC7A5\uB418\uB294 \uBC1C\uC804 \uACBD\uB85C\uB2E4. \uC815\uC6D0\uC774 \uBA3C\uC800\uBA74 \uC9D1\uC548\uC758 \uB3C4\uC6C0\uC73C\uB85C \uD06C\uACE0, \uB4E4\uB158\uC774 \uBA3C\uC800\uBA74 \uC791\uAC8C \uC2DC\uC791\uD574 \uC790\uC218\uC131\uAC00\uD558\uB294 \uD328\uD134\uC774 \uB41C\uB2E4.", sources: ["T07-131"] },
            \u5DF1: { image: "\uC815\uC6D0\uACFC \uC815\uC6D0", rule: "\uC815\uC6D0\uC774 \uB458\uC774 \uB418\uBA74 \uB450 \uC9D1 \uC0B4\uB9BC\xB7\uD22C\uC7A1\uC774 \uB41C\uB2E4. \uC9D1\uC744 \uD558\uB098 \uB354 \uB9C8\uB828\uD558\uBA74 \uC624\uD788\uB824 \uC548\uC815\uB418\uB294 \uCC98\uBC29\uC774 \uC788\uB2E4.", sources: ["T07-132"] },
            \u5E9A: { image: "\uC815\uC6D0\uACFC \uD070 \uCE7C", rule: "\uB098\uBB34\uAC00 \uC5C6\uC744 \uB54C \uD070 \uCE7C\uC774 \uC791\uC740 \uB098\uBB34\uB97C \uB04C\uC5B4\uC640 \uC2EC\uC5B4\uC8FC\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4. \uC0C1\uB300\uAC00 \uC904\uC5B4\uB4E4\uC5B4 \uD070 \uBE5B\uC744 \uBD80\uB974\uBA74 \uAD6D\uAC00 \uC77C\uC774 \uAC00\uB2A5\uD558\uC9C0\uB9CC \uC9C1\uC811\uBCF4\uB2E4 \uB354 \uB9CE\uC740 \uB178\uB825\uC774 \uB4E0\uB2E4.", sources: ["T07-133"] },
            \u8F9B: { image: "\uC815\uC6D0\uACFC \uC791\uC740 \uCE7C", rule: "\uC815\uC6D0\uC758 \uAF43\uB098\uBB34\uAC00 \uC0C1\uB300\uC758 \uC790\uB8E8\uAC00 \uB418\uBA74 \uC7AC\uBB3C\uC774 \uC0DD\uAE34\uB2E4. \uC0C1\uB300\uAC00 \uC9C1\uC811 \uD070 \uBE5B\uC744 \uBD88\uB7EC \uBB3C\uC744 \uB9CC\uB4E4\uBA74 \uAD6D\uAC00 \uAD00\uB828 \uC77C\uB3C4 \uC5F4\uB9B0\uB2E4.", sources: ["T07-134"] },
            \u58EC: { image: "\uC81C\uBC29\uACFC \uD070\uBB3C", rule: "\uC791\uC740 \uC81C\uBC29\uC740 \uD070\uBB3C\uC744 \uAC10\uB2F9 \uBABB \uD55C\uB2E4. \uBB3C\uC744 \uD758\uB824\uBCF4\uB0B4\uB4EF \uD574\uC678\xB7\uC1E0 \uC77C \uBC29\uD5A5\uC774 \uCC98\uBC29\uC774\uACE0, \uC6B4\uC758 \uC791\uC740 \uBE5B\uC774 \uB098\uBB34\uB97C \uC2EC\uC5B4\uC8FC\uBA74 \uAC00\uC815\uC774 \uC548\uC815\uB418\uBA70 \uBD80\uB3D9\uC0B0\uC774 \uC0DD\uAE34\uB2E4. \uD070 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uD0A4\uC6B0\uBA74 \uACB0\uAD6D \uC81C\uBC29\uC774 \uBB34\uB108\uC9C4\uB2E4.", sources: ["T07-135"] },
            \u7678: { image: "\uC81C\uBC29\uACFC \uB2E8\uBE44", rule: "\uC798 \uB9C9\uACE0 \uBE44\uC625\uD558\uAC8C \uD558\uB294 \uC0C1\uC0DD \uC870\uD569\uC774\uB2E4. \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uBB3C\uB9CC \uD759\uD0D5\uC774 \uB418\uB2C8, \uB098\uBB34\uB97C \uC2EC\uB294 \uC77C(\uACB0\uD63C)\uC774 \uC7AC\uBB3C\uACFC \uBA85\uC608\uB97C \uD568\uAED8 \uD47C\uB2E4.", sources: ["T07-119", "T07-122"] }
          },
          \u5E9A: {
            \u7532: { image: "\uD070 \uCE7C\uACFC \uD070 \uC790\uB8E8", rule: "\uCD5C\uC801\uC758 \uC9DD\uC774\uB2E4. \uD0C1\uC218 \uC0C1\uD669\uC5D0\uC11C\uB3C4 \uB098\uBB34\uAC00 \uC81C\uBC29\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uBA74 \uBB3C\uC774 \uB9D1\uC544\uC9C0\uACE0 \uC7AC\uBB3C\uC774 \uC313\uC778\uB2E4. \uB9AC\uB354\uC758 \uC870\uAC74\uC774 \uC644\uC131\uB41C\uB2E4.", sources: ["T07-150"] },
            \u4E59: { image: "\uD070 \uCE7C\uACFC \uC791\uC740 \uC790\uB8E8", rule: "\uC791\uC740 \uC790\uB8E8\uC5D0 \uBB36\uC778\uB2E4. \uBB36\uC74C\uC774 \uAD6D\uAC00\uC758 \uBE5B\uC744 \uBD88\uB7EC \uC81C\uBCF5 \uC9C1\uAD70(\uAD70\xB7\uACBD)\uC774 \uB418\uAE30\uB3C4 \uD558\uB098, \uC790\uB8E8\uAC00 \uC791\uC544 \uBB34\uB9AC\uD558\uBA74 \uBCF8\uC778\uC774 \uB2E4\uCE5C\uB2E4. \uAD8C\uD55C \uB0A8\uC6A9 \uAE08\uC9C0\uAC00 \uD575\uC2EC \uCC98\uBC29\uC774\uB2E4.", sources: ["T07-151"] },
            \u4E19: { image: "\uD070 \uCE7C\uACFC \uD0DC\uC591", rule: "\uBC18\uC0AC\uACBD\uCC98\uB7FC \uBE5B\uC744 \uBC1B\uC544 \uBA85\uC608\uAC00 \uB192\uC544\uC9C4\uB2E4. \uC5F4\uC774 \uC9C0\uB098\uCE58\uBA74 \uCE7C\uC774 \uBB34\uB38C\uC9C0\uB2C8 \uC791\uC740 \uCE7C\uC758 \uD569\uC774\uB098 \uBE44\uB85C \uAC00\uB824\uC57C \uD558\uACE0, \uB108\uBB34 \uD070 \uAD8C\uB825\uC740 \uC624\uD788\uB824 \uCE7C\uC744 \uB179\uC778\uB2E4.", sources: ["T07-152"] },
            \u4E01: { image: "\uD070 \uCE7C\uACFC \uCD1B\uBD88", rule: "\uC791\uC740 \uBD88\uC740 \uB098\uB97C \uB179\uC774\uC9C0 \uBABB\uD55C\uB2E4. \uB300\uC2E0 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uB180\uC774\uD130\uB97C \uC8FC\uACE0 \uB098\uBB34 \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4 \uC2E4\uB825\uC744 \uC0B4\uB9B0\uB2E4.", sources: ["T07-153"] },
            \u620A: { image: "\uD070 \uCE7C\uACFC \uC81C\uBC29", rule: "\uC81C\uBC29\uC774 \uC790\uB8E8\uAC00 \uB420 \uB098\uBB34\uB97C \uC7AC\uBC30\uD558\uACE0 \uBB3C\uC744 \uAC00\uB450\uC5B4 \uC2E4\uB825\uC758 \uAE30\uBC18\uC744 \uB9CC\uB4E0\uB2E4. \uC6B4\uC5D0\uC11C \uB098\uBB34\uAC00 \uC624\uBA74 \uC9C1\uC811 \uC9D3\uB294 \uC77C(\uAC74\uCD95\xB7\uBD80\uB3D9\uC0B0)\uB85C \uC7AC\uBB3C\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-154"] },
            \u5DF1: { image: "\uD070 \uCE7C\uACFC \uC815\uC6D0", rule: "\uC0C1\uB300\uC5D0\uAC8C \uC791\uC740 \uB098\uBB34\uB97C \uC2EC\uC5B4\uC8FC\uBA70 \uC791\uC740 \uBD80\uB3D9\uC0B0\uC744 \uCDE8\uB4DD\uD558\uACE0, \uC0C1\uB300\uAC00 \uB098\uBB34\uB97C \uC904\uC5EC \uBD88\uB7EC\uC624\uBA74 \uC81C\uBCF5 \uC9C1\uAD70\uC774 \uB41C\uB2E4.", sources: ["T07-155"] },
            \u5E9A: { image: "\uD070 \uCE7C\uACFC \uD070 \uCE7C", rule: "\uC790\uB8E8\uAC00 \uB458 \uC788\uC73C\uBA74 \uC88B\uC9C0\uB9CC \uD558\uB098\uBA74 \uC7C1\uD0C8\uC804\uC774 \uBC8C\uC5B4\uC9C4\uB2E4. \uC6B4\uC758 \uC791\uC740 \uB098\uBB34\uAC00 \uACBD\uC7C1\uC790\uB97C \uAC77\uC5B4\uC904 \uB54C \uC7AC\uBB3C\uC744 \uCC28\uC9C0\uD55C\uB2E4. \uAE54\uACE0 \uC788\uB294 \uC7AC\uAD00\uC758 \uC9C8\uC774 \uACBD\uC7C1\uB825\uC744 \uAC00\uB978\uB2E4.", sources: ["T07-156"] },
            \u8F9B: { image: "\uD070 \uCE7C\uACFC \uC791\uC740 \uCE7C", rule: "\uC0C1\uB300\uAC00 \uD070 \uBE5B\uC744 \uBD88\uB7EC \uBA85\uC608\uB97C \uB192\uC774\uACE0 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB2C8 \uC774\uC6A9\uD558\uB294 \uD611\uC5C5\uC774 \uB9DE\uB2E4. \uB2E4\uB9CC \uCE7C\uB07C\uB9AC \uBD80\uB52A\uCE58\uB294 \uC694\uB780\uD568\uC774 \uC0B6\uC758 \uC0C9\uC774 \uB41C\uB2E4.", sources: ["T07-157"] },
            \u58EC: { image: "\uD070 \uCE7C\uACFC \uD070\uBB3C", rule: "\uD070\uBB3C\uC5D0\uC11C \uC798 \uB178\uB294 \uCD5C\uC0C1\uC758 \uD65C\uB3D9 \uC870\uAC74\uC774\uB2E4. \uBB3C\uC774 \uB098\uBB34 \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uACE0, \uD0C1\uC218 \uC0C1\uD0DC\uC5D0\uC11C \uB098\uBB34\uAC00 \uC624\uBA74 \uB9D1\uC544\uC838 \uC2E4\uB825\uACFC \uBD80\uB3D9\uC0B0 \uC7AC\uBB3C\uC774 \uD568\uAED8 \uC628\uB2E4.", sources: ["T07-158"] },
            \u7678: { image: "\uD070 \uCE7C\uACFC \uB2E8\uBE44", rule: "\uBB3C\uC774 \uC801\uC5B4 \uC81C\uB300\uB85C \uB180\uAE30 \uC5B4\uB835\uB2E4. \uB300\uC2E0 \uBE44\uAC00 \uD070 \uC81C\uBC29\uC744 \uBD88\uB7EC \uC790\uB8E8 \uC7AC\uBC30\uB97C \uB3D5\uB294\uB2E4. \uBB3C\uC774 \uACE0\uAC08\uB418\uAC70\uB098 \uD759\uD0D5\uC774 \uB418\uBA74 \uB2A5\uB825\uC774 \uB9C9\uD78C\uB2E4.", sources: ["T07-159"] }
          },
          \u8F9B: {
            \u7532: { image: "\uC791\uC740 \uCE7C\uACFC \uD070 \uC790\uB8E8", rule: "\uAE34 \uC790\uB8E8\uC758 \uCC3D\uC774 \uB418\uC5B4 \uC870\uC9C1\uC0DD\uD65C\uC774 \uB9DE\uB2E4. \uD070 \uC7AC\uBB3C\uC744 \uBCA0\uB824\uB2E4 \uCE7C\uB0A0\uC774 \uC0C1\uD558\uB2C8 \uC695\uC2EC\uC744 \uC808\uC81C\uD574\uC57C \uD558\uACE0, \uC6B4\uC758 \uD759\uC774 \uC790\uB8E8\uB97C \uC54C\uB9DE\uAC8C \uC904\uC774\uBA74 \uC7AC\uBB3C\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-173"] },
            \u4E59: { image: "\uC791\uC740 \uCE7C\uACFC \uC791\uC740 \uC790\uB8E8", rule: "\uC815\uBC00 \uBA85\uC608\uC758 \uC644\uC131 \uC870\uD569\uC774\uB2E4. \uC815\uC6D0\uC5D0 \uC2EC\uAE34 \uC790\uB8E8\uC640 \uB9D1\uC740 \uBB3C\uC774 \uC788\uC73C\uBA74 \uC758\uB8CC\xB7\uC804\uBB38\uC9C1\uC758 \uC219\uC0B4\uAD8C\uC774 \uC644\uC131\uB41C\uB2E4.", sources: ["T07-174"] },
            \u4E19: { image: "\uC791\uC740 \uCE7C\uACFC \uD0DC\uC591", rule: "\uD070 \uBE5B\uC5D0 \uBB36\uC5EC \uC5B4\uB461\uB2E4. \uAD6D\uAC00(\uD2B9\uD788 \uC2E0\uBD84 \uB178\uCD9C\uC774 \uC801\uC740 \uC815\uBCF4\xB7\uB0B4\uADFC) \uC77C\uB85C \uD480\uAC70\uB098, \uC6B4\uC5D0\uC11C \uAC19\uC740 \uC131\uBD84\uC774 \uC640 \uBB36\uC74C\uC774 \uD480\uB9B4 \uB54C \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB09C\uB2E4.", sources: ["T07-175"] },
            \u4E01: { image: "\uC791\uC740 \uCE7C\uACFC \uCD1B\uBD88", rule: "\uC790\uB8E8 \uC5C6\uC774 \uD718\uB450\uB974\uBA74 \uBCF8\uC778\uC774 \uB2E4\uCE5C\uB2E4. \uC0C1\uB300\uAC00 \uBB3C\uACFC \uB098\uBB34 \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4 \uC7AC\uBB3C\uC744 \uBCF4\uD0DC\uC8FC\uB2C8, \uBA85\uC608\uBCF4\uB2E4 \uC2E4\uB9AC\uB97C \uCDE8\uD558\uB294 \uCC98\uC138\uAC00 \uB9DE\uB2E4.", sources: ["T07-176"] },
            \u620A: { image: "\uC791\uC740 \uCE7C\uACFC \uB4E4\uB158", rule: "\uC790\uB8E8\uAC00 \uB420 \uB098\uBB34\uAC00 \uCC99\uBC15\uD55C \uD070 \uB545\uC5D0 \uC2EC\uAE30\uBA74 \uC131\uC7A5\uC774 \uC5B4\uB835\uB2E4. \uC6B4\uC758 \uBE44\uAC00 \uB545\uC744 \uC54C\uB9DE\uAC8C \uC904\uC774\uBA74 \uD574\uC18C\uB418\uACE0, \uC758\uB958\xB7\uC885\uC774 \uAC19\uC740 \uB098\uBB34 \uC18C\uC7AC \uC77C\uB85C \uC7AC\uBB3C\uC774 \uC0DD\uAE34\uB2E4.", sources: ["T07-177"] },
            \u5DF1: { image: "\uC791\uC740 \uCE7C\uACFC \uC815\uC6D0", rule: "\uC815\uC6D0\uC758 \uAF43\uB098\uBB34\uAC00 \uC790\uB8E8\uAC00 \uB418\uBA74 \uC7AC\uBB3C\uC774 \uC0DD\uAE34\uB2E4(\uC758\uB958\xB7\uD328\uC158\xB7\uC791\uC740 \uAC74\uCD95). \uD070 \uAC74\uBB3C\uC740 \uAC10\uB2F9\uC774 \uB118\uCE58\uB2C8 \uB3D9\uB8CC \uC1E0\uC758 \uD798(\uD569\uB3D9\xB7\uCC28\uC785)\uC774 \uD544\uC694\uD558\uB2E4.", sources: ["T07-178"] },
            \u5E9A: { image: "\uC791\uC740 \uCE7C\uACFC \uD070 \uCE7C", rule: "\uC77C\uB300\uC77C\uB85C\uB294 \uBD88\uB9AC\uD558\uB2E4. \uB098\uC758 \uBFCC\uB9AC(\uC785\xB7\uC190\uC7AC\uC8FC)\uAC00 \uC788\uACE0 \uC0C1\uB300\uC758 \uBFCC\uB9AC\uAC00 \uC5C6\uC73C\uBA74 \uAD1C\uCC2E\uACE0, \uC6B4\uC758 \uC791\uC740 \uB098\uBB34\uAC00 \uC0C1\uB300\uB97C \uC904\uC774\uBA74 \uB450 \uCE7C\uC774 \uD568\uAED8 \uBA85\uC608\uB97C \uBD80\uB978\uB2E4.", sources: ["T07-179"] },
            \u8F9B: { image: "\uC791\uC740 \uCE7C\uACFC \uC791\uC740 \uCE7C", rule: "\uB450 \uCE7C\uC740 \uC548\uD14C\uB098\uAC00 \uB418\uC5B4 \uC815\uBCF4\xB7\uBE44\uACF5\uAC1C \uC77C(\uAD6D\uC815\xB7\uC815\uBCF4\uACFC)\uC774\uB098 \uAC00\uC704 \uC77C(\uBBF8\uC6A9\xB7\uD328\uC158)\uC744 \uAC00\uB9AC\uD0A8\uB2E4. \uB458\uC774 \uD070 \uBE5B\uC744 \uBD80\uB974\uBA74 \uC11C\uB85C \uAC00\uB824 \uC5B4\uB450\uC6CC\uC9C4\uB2E4. \uC6B4\uC758 \uD070 \uBE5B\uC774 \uD558\uB098\uB97C \uAC77\uC5B4\uC8FC\uBA74 \uBC1C\uD718\uB41C\uB2E4.", sources: ["T07-180"] },
            \u58EC: { image: "\uC791\uC740 \uCE7C\uACFC \uD070\uBB3C", rule: "\uAE09\uB958\uC5D0 \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9C4\uB2E4. \uC6B4\uC758 \uC791\uC740 \uBD88\uC774 \uB098\uBB34 \uC790\uB8E8\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uBA74 \uBB3C\uC0B4\uC744 \uACAC\uB514\uACE0 \uC7AC\uBB3C\uC744 \uCDE8\uD55C\uB2E4.", sources: ["T07-181"] },
            \u7678: { image: "\uC791\uC740 \uCE7C\uACFC \uB2E8\uBE44", rule: "\uC801\uB2F9\uD55C \uBB3C\uC774\uB77C \uC2E4\uB825\uC774 \uC0B4\uC544\uB09C\uB2E4. \uB2E4\uB9CC \uD070 \uBE5B\uC744 \uBD88\uB7EC\uB3C4 \uBE44\uC5D0 \uAC00\uB824 \uAD6D\uAC00 \uC77C\uC740 \uC5B4\uB824\uC6CC\uC9C4\uB2E4. \uC6B4\uC758 \uC81C\uBC29\uC774 \uBE44\uB97C \uAC70\uB450\uBA74 \uB098\uBB34(\uC7AC\uBB3C)\uB97C \uBD88\uB7EC \uACF5\uC608\xB7\uBAA9\uACF5 \uACC4\uC5F4\uC774 \uC5F4\uB9B0\uB2E4.", sources: ["T07-182"] }
          },
          \u58EC: {
            \u7532: { image: "\uD070\uBB3C\uACFC \uD070 \uB098\uBB34", rule: "\uBB3C\uC774 \uB098\uBB34\uB97C \uD0A4\uC6B0\uB294 \uC0C1\uC0DD\uC774\uB2E4. \uC81C\uBC29 \uC704\uC5D0 \uC2EC\uAE30\uBA74 \uBFCC\uB9AC\uAC00 \uAE4A\uC5B4\uC838 \uD759\uD0D5\uC774 \uB9C9\uD788\uACE0 \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4. \uB545\uC774 \uC5C6\uC73C\uBA74 \uB098\uBB34\uB3C4 \uB098\uB3C4 \uBD80\uC720\uD55C\uB2E4.", sources: ["T07-196"] },
            \u4E59: { image: "\uD070\uBB3C\uACFC \uB11D\uCFE8", rule: "\uBB3C\uC5D0 \uB72C \uBD80\uCD08\uB77C \uC88B\uC740 \uC9DD\uC774 \uC544\uB2C8\uB2E4. \uB2E4\uB9CC \uC218\uC6D0\uC774 \uB9D0\uB790\uC744 \uB54C \uC0C1\uB300\uAC00 \uC218\uC6D0\uC9C0\uB97C \uB04C\uC5B4\uC640 \uC218\uB7C9\uC744 \uC720\uC9C0\uD558\uACE0 \uC7AC\uBB3C\uC744 \uC548\uC815\uC2DC\uD0A4\uB294 \uAD6C\uC6D0 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-197"] },
            \u4E19: { image: "\uD070\uBB3C\uACFC \uD0DC\uC591", rule: "\uC218\uBA74 \uC704\uC758 \uD0DC\uC591\uC740 \uBA85\uC608\xB7\uC7AC\uBB3C\uC758 \uC815\uC810\uC774\uB2E4. \uC81C\uBC29\uACFC \uB098\uBB34\uAC00 \uC788\uC5B4\uC57C \uC720\uC9C0\uB418\uACE0, \uC81C\uBC29\uC774 \uC5C6\uC73C\uBA74 \uC0C1\uB300\uAC00 \uC2A4\uC2A4\uB85C \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uBC84\uD2F4\uB2E4. \uBE44\uAC00 \uB0B4\uB9AC\uBA74 \uAC00\uB824\uC9C4\uB2E4.", sources: ["T07-198"] },
            \u4E01: { image: "\uD070\uBB3C\uACFC \uB2EC\uBE5B", rule: "\uC7AC\uBB3C(\uC791\uC740 \uBE5B)\uC5D0 \uBB36\uC5EC \uC218\uB7C9\uC774 \uC904\uC5B4\uB4E0\uB2E4. \uB300\uC2E0 \uD638\uC218 \uC704\uC758 \uB2EC\uC774 \uB418\uC5B4 \uC815\uC2E0\uC138\uACC4\xB7\uC774\uC0C1 \uCD94\uAD6C\uC640 \uC778\uC5F0\uC774 \uAE4A\uC5B4\uC9C4\uB2E4.", sources: ["T07-199"] },
            \u620A: { image: "\uD070\uBB3C\uACFC \uD070 \uC81C\uBC29", rule: "\uC778\uC0DD\uC758 \uC808\uB300 \uC870\uAC74\uC774\uB2E4. \uD070 \uC81C\uBC29\uC774 \uC788\uC5B4\uC57C \uBB3C\uC774 \uC790\uC6D0\uC774 \uB418\uACE0, \uC774 \uC81C\uBC29\uC774 \uC624\uB294 \uC2DC\uAE30\uAC00 \uC815\uCC29\xB7\uACB0\uD63C\uC758 \uC2DC\uAE30\uB2E4. \uC7AC\uBB3C\uBCF4\uB2E4 \uBA85\uC608\uB97C \uBA3C\uC800 \uC138\uC6B0\uB294 \uAC8C \uC6D0\uCE59\uC774\uB2E4.", sources: ["T07-200", "T07-188"] },
            \u5DF1: { image: "\uD070\uBB3C\uACFC \uC815\uC6D0 \uC81C\uBC29", rule: "\uC791\uC740 \uC81C\uBC29\uC740 \uAC19\uC774 \uBB34\uB108\uC9C4\uB2E4. \uB2E4\uB9CC \uD070 \uC81C\uBC29\uC740 \uC788\uACE0 \uB098\uBB34\uB9CC \uC5C6\uB294 \uD759\uD0D5 \uC0C1\uD0DC\uB77C\uBA74, \uC0C1\uB300\uAC00 \uB098\uBB34\uB97C \uBD88\uB7EC \uC2EC\uC5B4\uC8FC\uB294 \uB9C9\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-201"] },
            \u5E9A: { image: "\uD070\uBB3C\uACFC \uD070 \uCE7C", rule: "\uC218\uC6D0\uC9C0\uC640 \uB180\uC774\uD130\uB97C \uB3D9\uC2DC\uC5D0 \uC900\uB2E4. \uC81C\uBC29\uACFC \uB098\uBB34\uAC00 \uAC16\uCDB0\uC9C0\uBA74 \uC0C1\uB300\uAC00 \uC790\uB8E8\uB97C \uC7A1\uACE0 \uBB3C\uC5D0\uC11C \uB178\uB294 \uC644\uC131\uD615\uC774 \uB418\uBA70, \uBA85\uC608\uC5D0\uC11C \uBA85\uC608\uB85C \uC774\uC5B4\uC838 \uBA85\uC608 \uCD94\uAD6C\uAC00 \uC815\uB2F5\uC774\uB2E4.", sources: ["T07-202"] },
            \u8F9B: { image: "\uD070\uBB3C\uACFC \uC791\uC740 \uCE7C", rule: "\uC0C1\uB300\uAC00 \uD070 \uBE5B\uC744 \uBD88\uB7EC \uC218\uBA74\uC5D0 \uB728\uBA74 \uAD6D\uAC00 \uC778\uC5F0\uC774 \uC0DD\uAE34\uB2E4. \uD569\uC774 \uC774\uC5B4\uC838 \uC11C\uB85C\uB97C \uC904\uC774\uBA74 \uC0C1\uB300\uC5D0\uAC8C \uB9DE\uB294 \uBB3C\uC774 \uB418\uC9C0\uB9CC, \uAE09\uB958\uB294 \uC0C1\uB300\uC758 \uCE7C\uB0A0\uC744 \uBB34\uB514\uAC8C \uD55C\uB2E4.", sources: ["T07-203"] },
            \u58EC: { image: "\uD070\uBB3C\uACFC \uD070\uBB3C", rule: "\uD569\uCCD0\uC838 \uB354 \uD070 \uD798\uC774 \uB418\uC9C0\uB9CC \uC81C\uBC29\uC774 \uC5C6\uC73C\uBA74 \uC815\uCC29\uD558\uC9C0 \uBABB\uD558\uACE0 \uD574\uC678\uB85C \uD758\uB7EC\uAC04\uB2E4. \uD574\uC678 \uC815\uCC29\uC774 \uCC98\uBC29\uC774\uAC70\uB098, \uC791\uC740 \uBD88\uB85C \uC218\uB7C9\uC744 \uC904\uC5EC \uC815\uC2E0\uC138\uACC4 \uBC29\uD5A5\uC744 \uD0DD\uD55C\uB2E4.", sources: ["T07-204"] },
            \u7678: { image: "\uD070\uBB3C\uACFC \uB2E8\uBE44", rule: "\uBE44\uAC00 \uB0B4\uB9AC\uBA74 \uD070 \uBE5B\uC774 \uAC00\uB824\uC9C4\uB2E4. \uC6B4\uC758 \uD070 \uC81C\uBC29\uC774 \uBE44\uB97C \uAC70\uB450\uBA74 \uC7AC\uBB3C\uC774 \uC0DD\uAE30\uACE0, \uC2DC\uAC04\uC774 \uAC00\uBA74 \uBE44\uB294 \uACB0\uAD6D \uD070\uBB3C\uC5D0 \uD569\uB958\uD574 \uD558\uB098\uC758 \uD798\uC774 \uB41C\uB2E4.", sources: ["T07-194", "T07-217", "T07-227"] }
          },
          \u7678: {
            \u7532: { image: "\uB2E8\uBE44\uC640 \uD070 \uB098\uBB34", rule: "\uBB3C\uC774 \uBD80\uC871\uD574 \uD070 \uB098\uBB34\uB97C \uD0A4\uC6B0\uB2E4 \uB9C8\uB978\uB2E4. \uAE34 \uACF5\uBD80\xB7\uD070 \uAC74\uCD95\uC740 \uD53C\uD558\uACE0, \uC1E0\uB85C \uBB3C\uC744 \uBCF4\uCDA9\uD558\uAC70\uB098 \uD574\uC678\uC5D0\uC11C \uACF5\uBD80\uD558\uB294 \uCC98\uBC29\uC774 \uB9DE\uB2E4. \uC6B4\uC758 \uC815\uC6D0 \uD759\uC774 \uB098\uBB34\uB97C \uC904\uC774\uBA74 \uC218\uB7C9\uC774 \uC870\uC808\uB41C\uB2E4.", sources: ["T07-219"] },
            \u4E59: { image: "\uB2E8\uBE44\uC640 \uAF43\uB098\uBB34", rule: "\uAC00\uC7A5 \uC5B4\uC6B8\uB9AC\uB294 \uC9DD\uC774\uB2E4. \uC801\uB2F9\uD55C \uBE44\uC5D0 \uAF43\uB098\uBB34\uAC00 \uC790\uB77C\uACE0, \uC0C1\uB300\uAC00 \uC218\uC6D0\uC9C0\uB97C \uB04C\uC5B4\uC640 \uC218\uB7C9\uAE4C\uC9C0 \uC720\uC9C0\uD574\uC900\uB2E4.", sources: ["T07-220"] },
            \u4E19: { image: "\uB2E8\uBE44\uC640 \uD0DC\uC591", rule: "\uBE44\uB294 \uD070 \uBE5B\uC744 \uAC00\uB824 \uD750\uB9AC\uAC8C \uD55C\uB2E4. \uC0C1\uB300\uC758 \uBFCC\uB9AC\uAC00 \uC57D\uD558\uBA74 \uC624\uD788\uB824 \uC7AC\uBB3C\uB85C \uCDE8\uD560 \uC218 \uC788\uC5B4, \uC778\uC7AC\uB97C \uD0A4\uC6CC \uACB0\uC2E4\uC744 \uAC70\uB450\uB294 \uACBD\uC601\uD615 \uAD6C\uC870\uC640 \uC798 \uB9DE\uB294\uB2E4. \uC5F4\uC774 \uC9C0\uB098\uCE58\uBA74 \uADF8\uB298\uC774 \uD544\uC694\uD558\uB2E4.", sources: ["T07-221"] },
            \u4E01: { image: "\uB2E8\uBE44\uC640 \uCD1B\uBD88", rule: "\uC791\uC740 \uBE5B\uC740 \uCDE8\uD560 \uC218 \uC788\uB294 \uC7AC\uBB3C\uC774\uC790 \uC815\uC2E0\uC138\uACC4\uC758 \uB3D9\uBC18\uC790\uB2E4. \uBB3C\uC774 \uB9C8\uB974\uAC70\uB098 \uD759\uD0D5\uC774 \uB418\uBA74 \uC0C1\uB300\uAC00 \uBB3C\uC744 \uBCF4\uCDA9\uD558\uACE0 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uD759\uD0D5\uC744 \uB9C9\uC544\uC900\uB2E4.", sources: ["T07-222"] },
            \u620A: { image: "\uB2E8\uBE44\uC640 \uD070 \uC81C\uBC29", rule: "\uBB36\uC774\uACE0 \uD759\uD0D5\uC774 \uB418\uAE30 \uC26C\uC6B4 \uC870\uD569\uC774\uB2E4. \uC1E0 \uC77C\uB85C \uC218\uB7C9\uC744 \uB298\uB9AC\uB294 \uAC83\uC774 \uC808\uB300 \uACFC\uC81C\uC774\uBA70, \uC774 \uBB36\uC74C\uC774 \uC7AC\uBB3C\xB7\uBD80\uB3D9\uC0B0 \uD589\uC6B4\uC73C\uB85C \uBC14\uB00C\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB2E4.", sources: ["T07-223", "T07-229"] },
            \u5DF1: { image: "\uB2E8\uBE44\uC640 \uC815\uC6D0 \uC81C\uBC29", rule: "\uC54C\uB9DE\uC740 \uD06C\uAE30\uC758 \uC81C\uBC29\uC774 \uCD5C\uC801\uC774\uB2E4. \uB2E4\uB9CC \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uBB3C\uB9CC \uD759\uD0D5\uC774 \uB418\uB2C8, \uC815\uC6D0\uC5D0 \uAF43\uB098\uBB34\uAC00 \uC2EC\uAE30\uB294 \uC77C(\uACB0\uD63C)\uC774 \uC7AC\uBB3C\xB7\uBA85\uC608\uB97C \uD568\uAED8 \uD574\uACB0\uD55C\uB2E4.", sources: ["T07-224"] },
            \u5E9A: { image: "\uB2E8\uBE44\uC640 \uD070 \uCE7C", rule: "\uC0C1\uB300\uAC00 \uB180\uAE30\uC5D4 \uBB3C\uC774 \uBD80\uC871\uD558\uB2E4. \uB300\uC2E0 \uC81C\uBC29\uACFC \uB098\uBB34\uAC00 \uAC16\uCDB0\uC9C4 \uC0C1\uB300\uC5D0\uAC8C \uBB3C\uC744 \uACF5\uAE09\uD558\uACE0 \uD759\uD0D5\uC5D0 \uB098\uBB34\uB97C \uC2EC\uC5B4\uC8FC\uB294 \uC870\uB825\uC790 \uC5ED\uD560\uC744 \uD55C\uB2E4.", sources: ["T07-225"] },
            \u8F9B: { image: "\uB2E8\uBE44\uC640 \uC791\uC740 \uCE7C", rule: "\uC0C1\uB300\uAC00 \uB180\uAE30\uC5D0 \uC54C\uB9DE\uC740 \uBB3C\uC774\uB77C \uC815\uBC00 \uC2E4\uB825(\uC758\uB8CC \uB4F1)\uC774 \uC0B4\uC544\uB09C\uB2E4. \uC815\uC6D0 \uC81C\uBC29\uACFC \uC791\uC740 \uC790\uB8E8\uAC00 \uAC16\uCDB0\uC9C0\uBA74 \uC644\uC131\uB418\uACE0, \uC0C1\uB300\uAC00 \uBD80\uB974\uB294 \uBE5B\uC774 \uAF43\uC744 \uD53C\uC6CC \uACB0\uC2E4\uC774 \uB9FA\uD78C\uB2E4.", sources: ["T07-226"] },
            \u58EC: { image: "\uB2E8\uBE44\uC640 \uD070\uBB3C", rule: "\uC2DC\uB0C7\uBB3C\uC774 \uAC15\uC774 \uB418\uB4EF \uC2DC\uAC04\uC774 \uAC00\uBA74 \uD070\uBB3C\uC5D0 \uD569\uB958\uD55C\uB2E4. \uC0C1\uB300\uB294 \uBB3C\uC744 \uBCF4\uCDA9\uD558\uACE0 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uD759\uD0D5\uC744 \uB9C9\uC544\uC8FC\uB294 \uB4E0\uB4E0\uD55C \uC870\uB825\uC790\uB2E4.", sources: ["T07-227"] },
            \u7678: { image: "\uB2E8\uBE44\uC640 \uB2E8\uBE44", rule: "\uBE44\uAC00 \uACB9\uCE58\uBA74 \uCE5C\uD654\uB825\uACFC \uB450\uB1CC\uAC00 \uBE5B\uB09C\uB2E4. \uD070 \uC81C\uBC29\uC774 \uC640 \uD558\uB098\uB97C \uAC70\uB450\uBA74 \uC54C\uB9DE\uC740 \uC81C\uBC29\uC774 \uB418\uC5B4 \uB2A5\uB825\uC774 \uBC1C\uD718\uB418\uACE0, \uADF8 \uACFC\uC815\uC5D0\uC11C \uC7AC\uBB3C(\uBD80\uB3D9\uC0B0)\uC774 \uC0DD\uAE34\uB2E4.", sources: ["T07-228"] }
          }
        },
        ansimPatterns: [
          { id: "AP01", condition: "\u4E01\u706B \uC77C\uAC04 + \u620A\u571F", mind: "\uD5C8\uBC8C\uD310\uC5D0 \uD640\uB85C \uB72C \uB2EC\uCC98\uB7FC, \uB204\uAD70\uAC00 \uB098\uB97C \uCC44\uC6CC\uC904 \uC0AC\uB78C\uC744 \uAC04\uC808\uD788 \uAE30\uB2E4\uB9AC\uB294 \uB9C8\uC74C", interpretation: "\uD070\uBB3C\uC744 \uBD88\uB7EC \uB098\uBB34\uB85C \uB9CC\uB4E4\uC5B4 \uC2EC\uACE0 \uC2F6\uC740 \uB3D9\uAE30\uAC00 \uBC30\uC6B0\uC790\xB7\uAD50\uC721 \uC0AC\uC5C5 \uC695\uAD6C\uB85C \uD45C\uBA74\uD654\uB41C\uB2E4", sources: ["T07-085"] },
          { id: "AP02", condition: "\u4E01\u706B \uC77C\uAC04 + \u5DF1\u571F", mind: "\uC791\uC740 \uC9D1 \uCC3D \uB108\uBA38 \uB2EC\uBE5B\uCC98\uB7FC, \uC18C\uBC15\uD55C \uB098\uC758 \uD130\uC804\uC5D0\uC11C \uD589\uBCF5\uC744 \uAFC8\uAFB8\uB294 \uB9C8\uC74C", interpretation: "\uAC00\uC815 \uAFB8\uB9AC\uAE30\xB7\uC791\uC740 \uAD50\uC721 \uC0AC\uC5C5\uC73C\uB85C \uC774\uC5B4\uC9C0\uBA70, \uC5EC\uC790\uB294 \uBC30\uC6B0\uC790\uC758 \uC9C1\uC5C5(\uC791\uC740 \uAD50\uC721)\uAE4C\uC9C0 \uADF8\uB9AC\uAC8C \uB41C\uB2E4", sources: ["T07-086"] },
          { id: "AP03", condition: "\uC77C\uAC04\uC774 \uCC9C\uAC04\uD569\uC5D0 \uBB36\uC778 \uBA85\uC870", mind: "\uBB36\uC5EC \uC788\uB294 \uB3D9\uC548\uC740 \uC790\uAE30 \uB2A5\uB825\uC744 \uBABB \uBCF4\uC5EC\uC900\uB2E4\uACE0 \uB290\uB07C\uBA70, \uBB36\uC74C\uC774 \uD480\uB9AC\uB294 \uB0A0\uC744 \uC190\uAF3D\uC544 \uAE30\uB2E4\uB9AC\uB294 \uB9C8\uC74C", interpretation: "\uD569\uC774 \uD480\uB9AC\uB294 \uC6B4(\uAC19\uC740 \uC131\uBD84 \uC7AC\uB3C4\uB798 \uB610\uB294 \uB2E4\uB978 \uD569\uC758 \uC5F0\uC1C4 \uD574\uC18C)\uC5D0 \uCDE8\uC5C5\xB7\uC2B9\uC9C4\xB7\uACB0\uD63C\uC774 \uC9D1\uC911\uB41C\uB2E4", sources: ["T05-010", "T05-019"] },
          { id: "AP04", condition: "\uC77C\uAC04 + \uBE44\uACAC \uACF5\uC874", mind: "\uB098\uC640 \uB611\uAC19\uC740 \uACBD\uC7C1\uC790\uB97C \uCE58\uACE0 \uC790\uB9AC\uB97C \uCC28\uC9C0\uD558\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uBE44\uACAC\uC744 \uAC77\uC5B4\uC8FC\uB294 \uC6B4\uC5D0 \uC2B9\uC9C4\xB7\uCC44\uC6A9\xB7\uACB0\uD63C\uC774 \uC131\uC0AC\uB418\uBA70, \uC0AC\uC5C5\uC790\uB294 \uACBD\uC7C1\uC5D0\uC11C \uC774\uAE34\uB2E4", sources: ["T05-018", "T07-014", "T07-036"] },
          { id: "AP05", condition: "\u8F9B\u91D1 \uC77C\uAC04 + \uCE7C\uC790\uB8E8(\u4E59\u6728) \uBD80\uC7AC", mind: "\uB098\uB97C \uC548\uC804\uD558\uAC8C \uC4F0\uAC8C \uD574\uC904 \uC790\uB8E8(\uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790)\uB97C \uAC16\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790\uC5D0 \uB300\uD55C \uAC08\uB9DD\uC774 \uC0B6\uC758 \uC911\uC2EC \uB3D9\uAE30\uAC00 \uB418\uBA70, \uC790\uB8E8\uAC00 \uC0DD\uAE30\uB294 \uC2DC\uAE30\uAC00 \uC778\uC0DD \uC804\uD658\uC810\uC774\uB2E4", sources: ["T07-144", "T07-167", "C07-006"] },
          { id: "AP06", condition: "\u5E9A\u91D1 \uC77C\uAC04 + \u7532\u6728 \uC790\uB8E8", mind: "\uD070 \uC790\uB8E8\uB97C \uC7A1\uACE0 \uC6B0\uB9AC \uBD84\uC57C\uC758 \uB9AC\uB354\uAC00 \uB418\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uC790\uB8E8\uC758 \uBFCC\uB9AC\uAE4C\uC9C0 \uD2BC\uD2BC\uD560 \uB54C \uC7AC\uBB3C\uC774 \uBAA8\uC774\uBA70, \uC0AC\uC5C5\xB7\uB9AC\uB354 \uC790\uB9AC\uC5D0 \uC790\uC2E0\uAC10\uC774 \uC0DD\uAE34\uB2E4", sources: ["T07-150", "T07-160"] },
          { id: "AP07", condition: "\u58EC\u6C34 \uC77C\uAC04 + \uC81C\uBC29(\u620A\u571F) \uBD80\uC7AC", mind: "\uB0A0\uB9BC\uB300\uB85C \uD758\uB7EC\uAC00\uB294 \uC0B6\uC744 \uBA48\uCDB0\uC904 \uC81C\uBC29(\uAC00\uC815\xB7\uC9C1\uC7A5\xB7\uBC30\uC6B0\uC790)\uC744 \uAC08\uB9DD\uD558\uB294 \uB9C8\uC74C", interpretation: "\uC815\uCC29 \uC695\uAD6C\uAC00 \uAC15\uD558\uACE0, \uC81C\uBC29\uC774 \uC624\uB294 \uC6B4\uC5D0 \uACB0\uD63C\xB7\uBD80\uB3D9\uC0B0\xB7\uC9C1\uC7A5 \uC548\uC815\uC774 \uC9D1\uC911\uB41C\uB2E4", sources: ["T07-188", "T07-190"] },
          { id: "AP08", condition: "\u7678\u6C34 \uC77C\uAC04 + \u5DF1\u571F \uC81C\uBC29", mind: "\uC791\uC544\uB3C4 \uB098\uC5D0\uAC8C \uB9DE\uB294 \uC815\uC6D0\uC5D0\uC11C \uC18C\uBC15\uD558\uAC8C \uC815\uCC29\uD558\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uD070 \uAC83\uBCF4\uB2E4 \uC54C\uB9DE\uC740 \uAC83\uC744 \uD0DD\uD558\uB294 \uC808\uC81C\uAC00 \uC7AC\uBB3C\xB7\uAC00\uC815\uC744 \uC9C0\uD0A4\uBA70, \uD070 \uC81C\uBC29\uC740 \uC624\uD788\uB824 \uB450\uB824\uC6C0\uC73C\uB85C \uB2E4\uAC00\uC628\uB2E4", sources: ["T07-213", "T07-224"] },
          {
            id: "AP09",
            condition: "\u620A\u571F \uC77C\uAC04 + \uB098\uBB34(\u5B98) \uBD80\uC7AC",
            mind: "\uB0B4 \uB545\uC5D0 \uC778\uC7AC\uB97C \uC2EC\uC5B4 \uAC00\uCE58 \uC788\uB294 \uB545\uC774 \uB418\uACE0 \uC2F6\uC740 \uB9C8\uC74C",
            interpretation: "\uCC44\uC6A9\xB7\uAD50\uC721\xB7\uACB0\uD63C\uC73C\uB85C \uB098\uBB34\uB97C \uC2EC\uC73C\uB824\uB294 \uB3D9\uAE30\uAC00 \uAC15\uD558\uACE0, \uB098\uBB34\uAC00 \uC5C6\uB294 \uACF5\uBC31\uAE30\uC5D4 \uACF5\uD5C8\uAC10\uC744 \uD638\uC18C\uD55C\uB2E4",
            unverified: true,
            unverifiedSourceIds: ["T07-114"],
            sources: ["T07-098", "T07-114"]
          },
          { id: "AP10", condition: "\u5DF1\u571F \uC77C\uAC04 + \u4E59\u6728 \uC2DD\uC7AC", mind: "\uC815\uC6D0\uC5D0 \uAF43\uB098\uBB34\uB97C \uC2EC\uC5B4 \uD654\uBAA9\uD55C \uAC00\uC815\uC744 \uAC00\uAFB8\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uAC00\uC815 \uC911\uC2EC \uAC00\uCE58\uAC00 \uC0B6\uC758 \uCD95\uC774\uBA70, \uC791\uC740 \uAD50\uC721\xB7\uC870\uACBD\xB7\uC18C\uADDC\uBAA8 \uC0AC\uC5C5\uC73C\uB85C \uD655\uC7A5\uB41C\uB2E4", sources: ["T07-128"] },
          { id: "AP11", condition: "\u7532\u6728 \uC77C\uAC04 + \u4E19\u706B", mind: "\uBC30\uC6B0\uACE0 \uC775\uD78C \uAC83\uC744 \uAF43\uD53C\uC6CC \uC138\uC0C1\uC5D0 \uC778\uC815\uBC1B\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uC9C4\uD559\xB7\uC790\uACA9\xB7\uC800\uC220\xB7\uBC29\uC1A1\uCC98\uB7FC \uC790\uC2E0\uC744 \uB4DC\uB7EC\uB0B4\uB294 \uACB0\uC2E4 \uCD94\uAD6C\uAC00 \uD575\uC2EC \uB3D9\uAE30\uB2E4", sources: ["T07-016", "T07-011"] },
          { id: "AP12", condition: "\u4E19\u706B \uC77C\uAC04 + \u58EC\u6C34", mind: "\uB9D1\uC740 \uD638\uC218 \uC704\uC5D0 \uB5A0\uC11C \uBA85\uC608\uB86D\uAC8C \uBE5B\uB098\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uACF5\uBB34\xB7\uC870\uC9C1\xB7\uB300\uC678 \uD65C\uB3D9\uC5D0\uC11C \uBA85\uC608\uB97C \uC6B0\uC120\uD558\uBA70, \uBB3C\uC774 \uD759\uD0D5\uC774 \uB418\uBA74 \uBA85\uC608 \uAC71\uC815\uC774 \uCEE4\uC9C4\uB2E4", sources: ["T07-067"] },
          { id: "AP13", condition: "\uBB34\uC7AC \uB0A8\uC790 \xD7 \uBB34\uAD00 \uC5EC\uC790 \uB9CC\uB0A8", mind: "\uC11C\uB85C\uC758 \uBE48 \uACF3\uC744 \uCC44\uC6CC \uB458\uC774\uC11C \uD558\uB098\uC758 \uC644\uC131\uCCB4\uB97C \uB9CC\uB4E4\uC790\uB294 \uB9C8\uC74C", interpretation: "\uC778\uC5F0\uC774 \uAE4A\uACE0 \uBD88\uAC19\uC774 \uC2DC\uC791\uD558\uC9C0\uB9CC \uACB0\uD63C \uD6C4\uC5D0\uB294 \uC11C\uB85C\uC5D0 \uB300\uD55C \uD45C\uD604\uC774 \uC904\uC5B4\uB4DC\uB294 \uD2B9\uC131\uC774 \uC788\uB2E4", sources: ["T08-002"] },
          { id: "AP14", condition: "\u8F9B\u91D1 \uB0A8\uC790 \xD7 \u4E19\u706B \uC5EC\uC790 \uAD81\uD569", mind: "\uC774 \uC0AC\uB78C\uACFC \uC0B4\uBA74 \uB0B4 \uACBD\uC7C1\uC790\uB97C \uAC77\uC5B4\uC8FC\uACE0 \uBB3C(\uBA85\uC608)\uAE4C\uC9C0 \uB9CC\uB4E4\uC5B4 \uD3B8\uC548\uD574\uC9C8 \uAC83\uC774\uB77C \uBBFF\uB294 \uB9C8\uC74C", interpretation: "\uC0C1\uB300\uC758 \uC7AC\uBB3C\xB7\uC790\uB8E8(\u4E59\u6728)\uAE4C\uC9C0 \uD65C\uC6A9\uD574 \uACBD\uC81C\uC801 \uC548\uC815\uC744 \uAE30\uB300\uD558\uB294 \uAD81\uD569 \uB3D9\uAE30\uB2E4", sources: ["T08-002"] },
          { id: "AP15", condition: "\u7532\u6728 \uB0A8\uC790 \xD7 \u5DF1\u571F \uC5EC\uC790 \uAD81\uD569", mind: "\uB0B4 \uB098\uBB34\uB97C \uC2EC\uC744 \uB545/\uB0B4 \uC815\uC6D0\uC744 \uC9C0\uCF1C\uC904 \uB098\uBB34\uB97C \uC5BB\uC5B4 \uC548\uC815\uB418\uC790\uB294 \uB9C8\uC74C", interpretation: "\uC0C1\uB300\uC758 \uBFCC\uB9AC(\uB098\uBB34)\uC640 \uB0B4 \uB545\uC774 \uB9DE\uBB3C\uB824 \uC0B6\uC774 \uC548\uC815\uB41C\uB2E4\uB294 \uACC4\uC0B0\uC774 \uB9CC\uB0A8\uC758 \uB3D9\uAE30\uAC00 \uB41C\uB2E4", sources: ["T08-002"] },
          { id: "AP16", condition: "\u58EC\u6C34 \uB0A8\uC790 \xD7 \u4E19\u706B \uC5EC\uC790 \uAD81\uD569", mind: "\uC81C\uBC29\uC774 \uC0DD\uAE30\uACE0 \uD0DC\uC591\uC774 \uB5A0\uC11C \uC0DD\uD65C\uC774 \uC548\uC815\uB418\uACE0 \uBE5B\uB0A0 \uAC83\uC774\uB77C \uBBFF\uB294 \uB9C8\uC74C", interpretation: "\uC11C\uB85C\uC758 \uC5C6\uB294 \uC624\uD589(\uB545\xB7\uBE5B\xB7\uB098\uBB34)\uC744 \uCC44\uC6CC\uC8FC\uB294 \uAD6C\uC870\uC774\uBA70, \uC2DC\uC544\uBC84\uC9C0(\uC790\uC2DD \uAE30\uB300) \uC774\uC288\uAC00 \uAC08\uB4F1 \uBCC0\uC218\uAC00 \uB420 \uC218 \uC788\uB2E4", sources: ["T08-002"] },
          { id: "AP17", condition: "\u7532\u6728 + \u4E01\u706B\uC758 \uC5F0\uC560 \uAD6D\uBA74", mind: "\uB2EC\uBE5B \uC544\uB798 \uD070 \uB098\uBB34 \uBC11\uC5D0\uC11C \uC11C\uB85C\uC758 \uAFC8\uC744 \uD0A4\uC6CC\uAC00\uB294 \uCCAD\uCD98\uC758 \uB9C8\uC74C", interpretation: "\uC5F0\uC560 \uAD6D\uBA74 \uB4A4\uC5D0 \uD759(\uC815\uCC29)\uC774 \uC624\uBA74 \uACB0\uD63C\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uC2DC\uAC04\uC758 \uD750\uB984\uC744 \uB9C8\uC74C\uC73C\uB85C \uC77D\uB294 \uAD00\uBC95\uC774\uB2E4", sources: ["T07-017"] },
          { id: "AP18", condition: "\u4E59\u6728 + \uD070 \uB4E4\uB158(\u620A\u571F)", mind: "\uBC1F\uD600\uB3C4 \uB2E4\uC2DC \uC77C\uC5B4\uC124 \uBBFC\uB4E4\uB808\uCC98\uB7FC, \uAD74\uD558\uC9C0 \uC54A\uACE0 \uC0B4\uC544\uB0A8\uACA0\uB2E4\uB294 \uB9C8\uC74C", interpretation: "\uC5ED\uACBD \uD658\uACBD\uC5D0\uC11C\uC758 \uAC15\uC778\uD568\uC774 \uAC15\uC810\uC774 \uB418\uBA70, \uAE30\uB308 \uD070 \uB098\uBB34\uAC00 \uC624\uBA74 \uBA85\uC608\xB7\uC7AC\uBB3C\uB85C \uC804\uD658\uB41C\uB2E4", sources: ["T07-025"] },
          { id: "AP19", condition: "\u4E01\u706B + \u58EC\u6C34 \uACB0\uD569", mind: "\uB098\uB97C \uD0A4\uC6CC\uC904 \uD070 \uBB3C(\uBA85\uC608\xB7\uBC30\uC6B0\uC790)\uC5D0\uAC8C \uBAB8\uC744 \uB9E1\uAE30\uB294 \uB9C8\uC74C", interpretation: "\uACB0\uD569 \uC790\uCCB4\uAC00 \uB098\uBB34 \uC2EC\uAE30(\uAD50\uC721\xB7\uAC00\uC815)\uAC00 \uB418\uC5B4, \uBA85\uC608\uB97C \uC887\uC73C\uBA74 \uC2E4\uB9AC\uAC00 \uB530\uB77C\uC628\uB2E4\uACE0 \uBBFF\uB294 \uAD6C\uC870\uB2E4", sources: ["T07-087", "T07-089"] },
          { id: "AP20", condition: "\u4E19\u706B + \u8F9B\u91D1 \uBB36\uC784", mind: "\uC7AC\uBB3C\uC5D0 \uBB36\uC5EC \uB0B4 \uBE5B\uC744 \uBABB \uB0B4\uB294 \uAC83\uC5D0 \uB2F5\uB2F5\uD574\uD558\uB294 \uB9C8\uC74C", interpretation: "\uC7AC\uBB3C\uACFC \uBA85\uC608 \uC0AC\uC774 \uAC08\uB4F1\uC774 \uD575\uC2EC \uB0B4\uBA74\uC774\uBA70, \uBB3C\uC774 \uC5C6\uC744 \uB54C\uB294 \uC774 \uBB36\uC74C\uC774 \uC624\uD788\uB824 \uC0DD\uBA85\uC904\uC774 \uB41C\uB2E4", sources: ["T07-066"] },
          { id: "AP21", condition: "\u620A\u571F + \u7678\u6C34 \uACB0\uD569", mind: "\uC791\uC740 \uBB3C\uC744 \uAC70\uB450\uC5B4 \uB0B4 \uB545\uC5D0 \uC800\uC218\uD558\uACE0, \uB098\uBB34\uB97C \uC2EC\uC5B4 \uD759\uD0D5\uC744 \uB9C9\uACA0\uB2E4\uB294 \uB9C8\uC74C", interpretation: "\uC7AC\uBB3C \uC800\uCD95\xB7\uBD80\uB3D9\uC0B0 \uB3D9\uAE30\uAC00 \uAC15\uD558\uACE0, \uC2A4\uC2A4\uB85C\uB97C \uC904\uC5EC\uC57C \uC7AC\uBB3C\uC774 \uC548\uC815\uB41C\uB2E4\uB294 \uC790\uAE30 \uC808\uC81C\uC758\uC2DD\uC774 \uC788\uB2E4", sources: ["T05-027"] },
          { id: "AP22", condition: "\u5E9A\u91D1 + \u58EC\u6C34", mind: "\uB9D1\uC740 \uD070\uBB3C\uC5D0\uC11C \uC2E4\uB825\uC744 \uB9C8\uC74C\uAECF \uD3BC\uCE58\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uB2F4\uAE08\uC9C8 \uBB34\uB300(\uC9C1\uC5C5\xB7\uD65C\uB3D9 \uC601\uC5ED)\uC5D0 \uB300\uD55C \uC790\uBD80\uC2EC\uC774 \uAC15\uD558\uACE0, \uD759\uD0D5\uC774 \uB418\uBA74 \uC2E4\uCD94 \uBD88\uC548\uC774 \uCEE4\uC9C4\uB2E4", sources: ["T07-158", "T07-145"] },
          { id: "AP23", condition: "\u4E59\u6728 + \u7532\u6728 \uAE30\uB300\uC624\uB984", mind: "\uD070 \uB098\uBB34\uC5D0 \uC624\uB974\uB0B4\uB9AC\uBA70 \uD070 \uBA85\uC608\uB97C \uBE4C\uB824 \uC4F0\uACE0 \uC2F6\uC740 \uB9C8\uC74C", interpretation: "\uC2A4\uC2B9\xB7\uC870\uC9C1\xB7\uAD6D\uAC00\uB97C \uD0C8\uAC83\uC73C\uB85C \uC0BC\uB294 \uC804\uB7B5\uC801 \uB3D9\uAE30\uC774\uBA70, \uC0C1\uB300 \uBFCC\uB9AC\uAC00 \uC57D\uD558\uBA74 \uAC19\uC774 \uD754\uB4E4\uB9B0\uB2E4", sources: ["T07-015", "T07-038"] },
          { id: "AP24", condition: "\u58EC\u6C34 \uC5EC\uC790 + \uC57D\uD55C \uC81C\uBC29", mind: "\uBC30\uC6B0\uC790(\uC81C\uBC29)\uAC00 \uD754\uB4E4\uB9AC\uBA74 \uB0B4 \uBA85\uC608\uAE4C\uC9C0 \uD759\uD0D5\uC774 \uB420\uAE4C \uC870\uC2EC\uC2A4\uB7EC\uC6B4 \uB9C8\uC74C", interpretation: "\uAD00\uACC4\uC5D0\uC11C \uBC29\uC5B4\uC801 \uD0DC\uB3C4\uAC00 \uB098\uD0C0\uB098\uBA70, \uAD50\uC721\xB7\uAC74\uCD95 \uAC19\uC740 \uB098\uBB34 \uC77C\uB85C \uC81C\uBC29\uC744 \uBCF4\uAC15\uD558\uB294 \uC0B6\uC774 \uC548\uC815\uC744 \uB9CC\uB4E0\uB2E4", sources: ["T07-206", "T07-190"] }
        ]
      };
    }
  });

  // ../content/dynamics.json
  var require_dynamics = __commonJS({
    "../content/dynamics.json"(exports, module) {
      module.exports = {
        meta: {
          service: "SAJU(\uAC00\uCE6D)",
          ticket: 12,
          built: "2026-10-02",
          method: "\uC804\uC5ED\uCE35(\uCC9C\uAC04\uD569 \uBCC0\uD654\uC6D0\uB9AC T05, \uC9C0\uC9C0 \uBCC0\uD654\uC6D0\uB9AC T06)\uACFC 8\uAC74 \uD310\uC815 \uBB38\uC11C\uB97C \uADDC\uCE59 \uC5D4\uC9C4\uC6A9 \uAD6C\uC870\uB85C \uC7AC\uAD6C\uC131\uD588\uB2E4. \uC6D0\uBB38 \uBB38\uC7A5 \uBCF5\uC81C \uC5C6\uC774 \uC0C8\uB85C \uC11C\uC220\uD588\uB2E4.",
          panjeong: "docs/wayfinder/namchon-8geon-panjeong.md \uAC742(\uCC9C\uAC04\uD569 \uB04C\uC5B4\uC634, \uD655\uC778\uB428) \uAE30\uC900"
        },
        heavenlyStemCombos: [
          {
            pairing: "\u7532\u5DF1",
            stems: ["\u7532", "\u5DF1"],
            resultElement: "\u571F",
            nature: "\uD070 \uB098\uBB34\uAC00 \uC791\uC740 \uB545\uC5D0 \uC2EC\uAE30\uB294 \uBCC0\uD654\uB2E4. \uD569\uC774 \uB418\uBA74 \uD1A0(\u571F)\uC758 \uAE30\uC6B4\uC774 \uB9CC\uB4E4\uC5B4\uC9C0\uACE0, \uD070 \uB098\uBB34\uB294 \uC54C\uB9DE\uC740 \uD06C\uAE30\uB85C \uC904\uC5B4 \uC791\uC740 \uB545\uACFC \uB9DE\uBB3C\uB9B0\uB2E4. \uACB0\uC2E4 \uC774\uC804\uC758 \uC528\uC557 \uB2E8\uACC4\uB85C \uB418\uB3CC\uC544\uAC00\uB294 \uC7AC\uC2DC\uC791\uC758 \uC758\uBBF8\uB3C4 \uC788\uB2E4.",
            transformationRule: "\uD569\uC774 \uC131\uB9BD\uD558\uBA74 \uC591\uAC04\uC778 \u7532\uC774 \uC74C\uAC04 \uD615\uD0DC(\u4E59)\uB85C \uBC14\uB010\uB2E4. \uBC14\uB010 \uB098\uBB34\uB294 \uC791\uC740 \uB545\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uADDC\uBAA8\uAC00 \uB418\uACE0, \uB2E4\uC2DC \uD070 \uCE7C(\u5E9A)\uC744 \uB04C\uC5B4\uC624\uB294 \uB2E4\uC74C \uC0AC\uC2AC\uB85C \uC774\uC5B4\uC9C4\uB2E4.",
            pullPrinciple: {
              core: "\uBD80\uC871\uD55C \uC624\uD589\uC744 \uD569 \uC0C1\uB300\uC758 \uD798\uC73C\uB85C \uB04C\uC5B4\uC640 \uADE0\uD615\uC744 \uB9CC\uB4E0\uB2E4. \uB098\uBB34\uAC00 \uD544\uC694\uD558\uBA74 \uD759\uC774, \uD759\uC774 \uD544\uC694\uD558\uBA74 \uB098\uBB34\uAC00 \uC11C\uB85C\uB97C \uBD80\uB978\uB2E4.",
              rootRule: "\uB04C\uC5B4\uC634\uC758 \uCCAB \uC870\uAC74\uC740 \uBFCC\uB9AC\uB2E4. \uB04C\uC5B4\uC62C \uCC9C\uAC04\uC774 \uC9C0\uC9C0\uC5D0 \uAC19\uC740 \uC624\uD589 \uBFCC\uB9AC\uB97C \uAC16\uACE0 \uC788\uACE0, \uC9C0\uC9C0\uB3C4 \uCC9C\uAC04\uC5D0 \uAC19\uC740 \uC624\uD589\uC744 \uAC16\uACE0 \uC788\uC744 \uB54C \uC81C\uB300\uB85C \uB04C\uC5B4\uC628\uB2E4.",
              weakPull: "\uC74C\uAC04\uC774 \uC591\uAC04\uC744 \uB04C\uC5B4\uC62C \uB54C\uB294 \uC591\uAC04\uC744 \uC57D\uD654\uC2DC\uCF1C \uC74C\uAC04 \uD615\uD0DC\uB85C \uB04C\uC5B4\uC628\uB2E4. \uC791\uC740 \uB545\uC5D0\uB294 \uC904\uC5B4\uB4E0 \uB098\uBB34\uAC00 \uC2EC\uAE30\uB294 \uAC8C \uC11C\uB85C\uB97C \uC9C0\uD0A4\uB294 \uAE38\uC774\uB2E4. \uBFCC\uB9AC\uAC00 \uC5C6\uC73C\uBA74 \uC904\uC5B4\uB4E0 \uD615\uD0DC\uB85C\uB9CC \uB04C\uC5B4\uC628\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T05-021"]
            },
            releaseRules: [
              "\uC6B4\uC5D0\uC11C \u7532\uC774\uB098 \u5DF1\uAC00 \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u620A\u7678 \uD569\uC774 \uC131\uB9BD\uD574 \u620A\uAC00 \u5DF1 \uD615\uD0DC\uB85C \uBCC0\uD558\uBA74 \u7532\u5DF1 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u7532 \uAD00\uB828 \uD589\uC704(\uAD50\uC721\xB7\uAC74\uCD95 \uB4F1)\uB97C \uD558\uBA74 \uD480\uB9AC\uB294 \uCC98\uBC29\uC774 \uC4F0\uC778\uB2E4"
            ],
            sources: ["T05-002", "T05-005", "T05-010", "T05-012", "T05-013", "T05-023"]
          },
          {
            pairing: "\u4E59\u5E9A",
            stems: ["\u4E59", "\u5E9A"],
            resultElement: "\u91D1",
            nature: "\uC791\uC740 \uB098\uBB34\uAC00 \uD070 \uCE7C\uACFC \uB9CC\uB098 \uC790\uB8E8\uAC00 \uB418\uB294 \uBCC0\uD654\uB2E4. \uC81C\uBCF5(\uAD6D\uAC00 \uC18C\uC18D)\uC758 \uD615\uC0C1\uC73C\uB85C \uC77D\uD788\uBA70, \uD070 \uCE7C\uC774 \uC904\uC5B4\uB4E4\uBA74 \uC791\uC740 \uB098\uBB34\uC5D0 \uC54C\uB9DE\uC740 \uCE7C\uC774 \uB41C\uB2E4.",
            transformationRule: "\uD569\uC774 \uC131\uB9BD\uD558\uBA74 \uC591\uAC04\uC778 \u5E9A\uC774 \uC74C\uAC04 \uD615\uD0DC(\u8F9B)\uB85C \uBC14\uB010\uB2E4. \uC904\uC5B4\uB4E0 \uCE7C\uC740 \uD070 \uBE5B(\u4E19)\uC744 \uB04C\uC5B4\uC624\uB294 \uB2E4\uC74C \uC0AC\uC2AC\uB85C \uC774\uC5B4\uC9C4\uB2E4.",
            pullPrinciple: {
              core: "\uAE08\uC774 \uD544\uC694\uD55C \uBA85\uC870\uB294 \uB098\uBB34\uAC00, \uBA85\uC608(\uAD00)\uAC00 \uD544\uC694\uD55C \uB098\uBB34\uB294 \uCE7C\uC774 \uC11C\uB85C\uB97C \uB04C\uC5B4\uC628\uB2E4.",
              rootRule: "\uB04C\uC5B4\uC634\uC758 \uCCAB \uC870\uAC74\uC740 \uBFCC\uB9AC\uB2E4. \uCE7C\uC758 \uBFCC\uB9AC(\uC9C0\uC9C0\uC758 \uAE08 \uAE30\uC6B4)\uAC00 \uC788\uAC70\uB098 \uADF8 \uBFCC\uB9AC\uB97C \uB04C\uC5B4\uC62C \uC218 \uC788\uC5B4\uC57C \uB04C\uC5B4\uC634\uC774 \uC131\uB9BD\uD55C\uB2E4.",
              weakPull: "\uC74C\uAC04\uC774 \uC591\uAC04\uC744 \uB04C\uC5B4\uC62C \uB54C\uB294 \uC591\uAC04\uC744 \uC57D\uD654\uC2DC\uCF1C \uC74C\uAC04 \uD615\uD0DC\uB85C \uB04C\uC5B4\uC628\uB2E4. \uC791\uC740 \uB098\uBB34\uB294 \uC904\uC5B4\uB4E0 \uCE7C\uC744 \uC6D0\uD55C\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T05-021"]
            },
            releaseRules: [
              "\uC6B4\uC5D0\uC11C \u4E59\uC774\uB098 \u5E9A\uC774 \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u7532\u5DF1 \uD569\uC774 \uC131\uB9BD\uD574 \u7532\uC774 \u4E59 \uD615\uD0DC\uB85C \uBCC0\uD558\uBA74 \u4E59\u5E9A \uD569\uC774 \uD480\uB9B0\uB2E4"
            ],
            sources: ["T05-002", "T05-006", "T05-010", "T05-012", "T05-013", "T05-024"]
          },
          {
            pairing: "\u4E19\u8F9B",
            stems: ["\u4E19", "\u8F9B"],
            resultElement: "\u6C34",
            nature: "\uD070 \uBE5B\uACFC \uC791\uC740 \uCE7C\uC774 \uB9CC\uB098 \uBB3C\uC744 \uB9CC\uB4DC\uB294 \uBCC0\uD654\uB2E4. \uC5C6\uB358 \uAD00(\uBB3C)\uC744 \uB9CC\uB4E4\uC5B4 \uBA85\uC608\xB7\uC9C1\uC7A5\uC744 \uCC3D\uCD9C\uD558\uB294 \uACC4\uAE30\uAC00 \uB418\uBA70, \uD070 \uBE5B\uC740 \uBB36\uC774\uBA74 \uC5B4\uB450\uC6CC\uC9C4\uB2E4.",
            transformationRule: "\uD569\uC774 \uC131\uB9BD\uD558\uBA74 \uC591\uAC04\uC778 \u4E19\uC774 \uC74C\uAC04 \uD615\uD0DC(\u4E01)\uB85C \uBC14\uB010\uB2E4. \uC904\uC5B4\uB4E0 \uBE5B\uC740 \uD070\uBB3C(\u58EC)\uC744 \uB04C\uC5B4\uC624\uB294 \uB2E4\uC74C \uC0AC\uC2AC\uB85C \uC774\uC5B4\uC9C4\uB2E4.",
            pullPrinciple: {
              core: "\uBB3C\uC774 \uD544\uC694\uD55C \uBA85\uC870\uB294 \uBE5B\uACFC \uCE7C\uC758 \uB9CC\uB0A8\uC73C\uB85C \uBB3C\uC744 \uB9CC\uB4E0\uB2E4. \uC6D0\uAD6D\uC5D0 \uC5C6\uB294 \uC624\uD589\uC744 \uD569\uC73C\uB85C \uCC3D\uCD9C\uD558\uB294 \uB300\uD45C \uC870\uD569\uC774\uB2E4.",
              rootRule: "\uB04C\uC5B4\uC634\uC758 \uCCAB \uC870\uAC74\uC740 \uBFCC\uB9AC\uB2E4. \uBB3C\uC758 \uBFCC\uB9AC\uAC00 \uC9C0\uC9C0\uC5D0 \uC788\uAC70\uB098 \uB04C\uC5B4\uC62C \uC218 \uC788\uC5B4\uC57C \uB9CC\uB4E4\uC5B4\uC9C4 \uBB3C\uC774 \uD798\uC744 \uC4F4\uB2E4.",
              weakPull: "\uC74C\uAC04\uC774 \uC591\uAC04\uC744 \uB04C\uC5B4\uC62C \uB54C\uB294 \uC591\uAC04\uC744 \uC57D\uD654\uC2DC\uCF1C \uC74C\uAC04 \uD615\uD0DC\uB85C \uB04C\uC5B4\uC628\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T05-021"]
            },
            releaseRules: [
              "\uC6B4\uC5D0\uC11C \u4E19\uC774\uB098 \u8F9B\uC774 \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u4E59\u5E9A \uD569\uC774 \uC131\uB9BD\uD574 \u5E9A\uC774 \u8F9B \uD615\uD0DC\uB85C \uBCC0\uD558\uBA74 \u4E19\u8F9B \uD569\uC774 \uD480\uB9B0\uB2E4"
            ],
            sources: ["T05-002", "T05-007", "T05-010", "T05-012", "T05-013", "T05-025"]
          },
          {
            pairing: "\u4E01\u58EC",
            stems: ["\u4E01", "\u58EC"],
            resultElement: "\u6728",
            nature: "\uC791\uC740 \uBE5B\uACFC \uD070\uBB3C\uC774 \uB9CC\uB098 \uB098\uBB34\uB97C \uB9CC\uB4DC\uB294 \uBCC0\uD654\uB2E4. \uBB3C\uC744 \uC904\uC5EC \uC54C\uB9DE\uAC8C \uB9CC\uB4E4\uACE0 \uADF8 \uBB3C\uB85C \uB098\uBB34\uB97C \uC2EC\uB294 \uADF8\uB9BC\uC774\uBA70, \uAD50\uC721\xB7\uC815\uC2E0\uC138\uACC4\xB7\uAC00\uC815 \uAFB8\uB9AC\uAE30\uB85C \uC77D\uD78C\uB2E4.",
            transformationRule: "\uD569\uC774 \uC131\uB9BD\uD558\uBA74 \uC591\uAC04\uC778 \u58EC\uC774 \uC74C\uAC04 \uD615\uD0DC(\u7678)\uB85C \uBC14\uB010\uB2E4. \uC904\uC5B4\uB4E0 \uBB3C\uC740 \uD070 \uC81C\uBC29(\u620A)\uC744 \uB04C\uC5B4\uC624\uB294 \uB2E4\uC74C \uC0AC\uC2AC\uB85C \uC774\uC5B4\uC9C4\uB2E4.",
            pullPrinciple: {
              core: "\uB098\uBB34\uAC00 \uD544\uC694\uD55C \uBA85\uC870\uB294 \uBE5B\uACFC \uBB3C\uC758 \uB9CC\uB0A8\uC73C\uB85C \uB098\uBB34\uB97C \uB9CC\uB4E0\uB2E4. \uBB3C\uC774 \uD759\uD0D5\uC774\uBA74 \uC774 \uD569\uC740 \uC131\uB9BD\uD558\uC9C0 \uC54A\uB294\uB2E4.",
              rootRule: "\uB04C\uC5B4\uC634\uC758 \uCCAB \uC870\uAC74\uC740 \uBFCC\uB9AC\uB2E4. \uB9CC\uB4E4\uC5B4\uC9C4 \uB098\uBB34\uC5D0 \uC9C0\uC9C0 \uBFCC\uB9AC\uAC00 \uC788\uC73C\uBA74 \uD070 \uB098\uBB34, \uC5C6\uC73C\uBA74 \uC791\uC740 \uB098\uBB34 \uD615\uD0DC\uB85C \uC4F4\uB2E4.",
              weakPull: "\uC74C\uAC04\uC774 \uC591\uAC04\uC744 \uB04C\uC5B4\uC62C \uB54C\uB294 \uC591\uAC04\uC744 \uC57D\uD654\uC2DC\uCF1C \uC74C\uAC04 \uD615\uD0DC\uB85C \uB04C\uC5B4\uC628\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T05-021"]
            },
            releaseRules: [
              "\uC6B4\uC5D0\uC11C \u4E01\uC774\uB098 \u58EC\uC774 \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u4E19\u8F9B \uD569\uC774 \uC131\uB9BD\uD574 \u4E19\uC774 \u4E01 \uD615\uD0DC\uB85C \uBCC0\uD558\uBA74 \u4E01\u58EC \uD569\uC774 \uD480\uB9B0\uB2E4"
            ],
            sources: ["T05-002", "T05-008", "T05-010", "T05-012", "T05-013", "T05-026"]
          },
          {
            pairing: "\u620A\u7678",
            stems: ["\u620A", "\u7678"],
            resultElement: "\u706B",
            nature: "\uD070 \uB545\uACFC \uC791\uC740 \uBB3C\uC774 \uB9CC\uB098 \uBD88\uC744 \uB9CC\uB4DC\uB294 \uBCC0\uD654\uB2E4. \uD070 \uB545\uC774 \uC2A4\uC2A4\uB85C\uB97C \uC904\uC5EC \uC54C\uB9DE\uC740 \uC81C\uBC29\uC774 \uB418\uBA74 \uC791\uC740 \uBB3C\uC774 \uB9D1\uC544\uC9C0\uACE0, \uC5F4\uB9E4\uAC00 \uC528\uC557\uC73C\uB85C \uB3CC\uC544\uAC00\uB294 \uC0DD\uBA85 \uC21C\uD658\uC758 \uADF8\uB9BC\uC774\uB2E4.",
            transformationRule: "\uD569\uC774 \uC131\uB9BD\uD558\uBA74 \uC591\uAC04\uC778 \u620A\uC774 \uC74C\uAC04 \uD615\uD0DC(\u5DF1)\uB85C \uBC14\uB010\uB2E4. \uC904\uC5B4\uB4E0 \uB545\uC740 \uD070 \uB098\uBB34(\u7532)\uB97C \uB04C\uC5B4\uC624\uB294 \uB2E4\uC74C \uC0AC\uC2AC\uB85C \uC774\uC5B4\uC9C4\uB2E4.",
            pullPrinciple: {
              core: "\uD759\uD0D5 \uC704\uD5D8\uC774 \uC788\uB294 \uBA85\uC870\uAC00 \uC2A4\uC2A4\uB85C\uB97C \uC904\uC5EC \uC81C\uBC29\uC744 \uC54C\uB9DE\uAC8C \uB9CC\uB4E4\uACE0 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uD759\uD0D5\uC744 \uB9C9\uB294\uB2E4. \uC7AC\uBB3C(\uBB3C)\uC744 \uC800\uC7A5\uD558\uB294 \uD569\uC774\uB2E4.",
              rootRule: "\uB04C\uC5B4\uC634\uC758 \uCCAB \uC870\uAC74\uC740 \uBFCC\uB9AC\uB2E4. \uB9CC\uB4E4\uC5B4\uC9C4 \uBD88(\uAE30\uC6B4)\uC774 \uC9C0\uC9C0\uC5D0\uC11C \uBFCC\uB9AC\uB97C \uC5BB\uC5B4\uC57C \uACB0\uC2E4\uC774 \uB41C\uB2E4.",
              weakPull: "\uC74C\uAC04\uC774 \uC591\uAC04\uC744 \uB04C\uC5B4\uC62C \uB54C\uB294 \uC591\uAC04\uC744 \uC57D\uD654\uC2DC\uCF1C \uC74C\uAC04 \uD615\uD0DC\uB85C \uB04C\uC5B4\uC628\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T05-021"]
            },
            releaseRules: [
              "\uC6B4\uC5D0\uC11C \u620A\uC774\uB098 \u7678\uAC00 \uB2E4\uC2DC \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4",
              "\u4E01\u58EC \uD569\uC774 \uC131\uB9BD\uD574 \u58EC\uC774 \u7678 \uD615\uD0DC\uB85C \uBCC0\uD558\uBA74 \u620A\u7678 \uD569\uC774 \uD480\uB9B0\uB2E4"
            ],
            sources: ["T05-002", "T05-009", "T05-010", "T05-012", "T05-013", "T05-027"]
          }
        ],
        comboRatioRules: [
          { id: "CR01", rule: "\uC6D0\uAD6D\uC5D0\uC11C\uB294 1:1\uB85C\uB9CC \uD569\uD55C\uB2E4", detail: "\uC6D0\uAD6D\uC5D0 \uB450 \uCC9C\uAC04\uC774 \uD558\uB098\uC529 \uC788\uC744 \uB54C \uD569\uC774 \uC131\uB9BD\uB41C\uB2E4.", sources: ["T05-014", "T05-015"], unverified: false },
          { id: "CR02", rule: "\uC6D0\uAD6D 2:1\uC740 \uD569\uC774 \uB418\uC9C0 \uC54A\uB294\uB2E4", detail: "\uD55C\uCABD\uC774 \uB450 \uAC1C, \uB2E4\uB978 \uCABD\uC774 \uD558\uB098\uBA74 \uC6D0\uAD6D \uC0C1\uD0DC\uC5D0\uC11C\uB294 \uD569\uD558\uC9C0 \uC54A\uB294\uB2E4.", sources: ["T05-014", "T05-015"], unverified: false },
          { id: "CR03", rule: "\uC6B4\uC774 \uAC1C\uC785\uD574 2:2 \uB610\uB294 3:1\uC774 \uB418\uBA74 \uD569\uC774 \uC131\uB9BD\uD55C\uB2E4", detail: "\uC6D0\uAD6D 2:1 \uC0C1\uD0DC\uC5D0\uC11C \uC6B4\uC774 \uB098\uBA38\uC9C0 \uC131\uBD84\uC744 \uCC44\uC6CC \uADE0\uD615 \uC218\uAC00 \uB9DE\uC73C\uBA74 \uD569\uC774 \uB41C\uB2E4.", sources: ["T05-014", "T05-017"], unverified: false },
          { id: "CR04", rule: "\uC6B4\uC5D0\uC11C \uC624\uB294 \uC131\uBD84\uB07C\uB9AC\uB294 2:1\uB85C\uB3C4 \uD569\uD55C\uB2E4", detail: "\uB300\uC6B4\xB7\uC138\uC6B4 \uC131\uBD84\uC774 \uC6D0\uAD6D \uB450 \uAC1C\uC640 \uB9DE\uC124 \uB54C\uB294 2:1\uB85C\uB3C4 \uD569\uC73C\uB85C \uBCF8\uB2E4.", sources: ["T05-014", "T05-018"], unverified: false },
          { id: "CR05", rule: "\uC6D0\uAD6D \uD569 \uC0C1\uD0DC\uC5D0\uC11C \uAC19\uC740 \uC131\uBD84\uC774 \uC6B4\uC73C\uB85C \uD558\uB098 \uB354 \uC624\uBA74 \uD569\uC774 \uD480\uB9B0\uB2E4", detail: "\uD569\uC5D0 \uCC38\uC5EC \uC911\uC778 \uCC9C\uAC04\uC774 \uC6B4\uC5D0\uC11C \uC7AC\uB3C4\uB798\uD558\uBA74 \uBB36\uC74C\uC774 \uD480\uB9B0\uB2E4. \uC77C\uAC04\uC774 \uD480\uB9AC\uB294 \uD574\uC5D0 \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4.", sources: ["T05-014", "T05-016", "T05-019"], unverified: false },
          { id: "CR06", rule: "\uC77C\uAC04 \uCABD \uBE44\uACAC\uC774 \uC788\uACE0 \uC6B4\uC758 \uD569\uC774 \uADF8 \uBE44\uACAC\uC744 \uAC77\uC5B4\uC8FC\uBA74 \uB2A5\uB825\uC774 \uBC1C\uD718\uB41C\uB2E4", detail: "\uBE44\uACAC \uC81C\uAC70 \uADDC\uCE59. \uACBD\uC7C1\uC790\uAC00 \uC815\uB9AC\uB418\uB294 \uD574\uC5D0 \uCDE8\uC5C5\xB7\uC2B9\uC9C4\xB7\uACB0\uD63C\xB7\uC0AC\uC5C5 \uC131\uACFC\uAC00 \uC9D1\uC911\uB41C\uB2E4.", sources: ["T05-014", "T05-018"], unverified: false },
          { id: "CR07", rule: "\uC77C\uAC04\uC774 \uD569\uC5D0 \uBB36\uC5EC \uC788\uC73C\uBA74 \uBB36\uC778 \uC624\uD589\uACFC \uAD00\uB828\uB41C \uD589\uC704(\uC9C1\uC5C5)\uB85C \uD480 \uC218 \uC788\uB2E4", detail: "\uBB36\uC778 \uC0C1\uD0DC\uB97C \uADF8 \uC624\uD589\uC758 \uC77C\uB85C \uC804\uD658\uD558\uBA74 \uC790\uC720\uB85C\uC6CC\uC9C4\uB2E4\uB294 \uC6B4\uC6A9 \uADDC\uCE59\uC774\uB2E4.", sources: ["T05-001", "T05-024"], unverified: false }
        ],
        branchDynamics: {
          general: {
            stemChungNote: "\uCC9C\uAC04\uC740 \uC2DC\uAC04 \uBD80\uD638\uB77C \uCDA9\uC774 \uC5C6\uACE0 \uD569\uC758 \uBCC0\uD654\uB9CC \uC788\uB2E4. \uC9C0\uC9C0\uB9CC\uC774 \uACF5\uAC04 \uBD80\uD638\uB85C \uCDA9\uC744 \uB9CC\uB4E0\uB2E4.",
            chungMeaning: "\uC9C0\uC9C0 \uCDA9\uC740 \uAE68\uC5B4\uC9D0\uC774 \uC544\uB2C8\uB77C \uACE0\uC694\uD568\uC744 \uAE68\uC6B0\uB294 \uBCC0\uD654 \uD2B8\uB9AC\uAC70\uB2E4. \uBB34\uC870\uAC74 \uD749\uC73C\uB85C \uC77D\uC9C0 \uC54A\uB294\uB2E4.",
            triggerRule: "\uB124 \uAE00\uC790 \uC870\uAC74 \uC911 \uC138 \uAC1C \uC774\uC0C1 \uBAA8\uC774\uBA74 \uCDA9\uC774 \uBC1C\uB3D9\uD558\uB294 \uAC83\uC73C\uB85C \uBCF8\uB2E4.",
            sources: ["T05-001", "T06-014", "T01-008"]
          },
          chungs: [
            {
              group: "\u5BC5\u7533\u5DF3\u4EA5",
              label: "\uC0DD\uC9C0 \uCDA9",
              meaning: "\uACC4\uC808\uC774 \uC77C\uC5B4\uB098\uB294 \uCD9C\uBC1C\uC810\uC774 \uD754\uB4E4\uB9B0\uB2E4. \uAC1C\uD601\xB7\uC774\uB3D9\xB7\uC5ED\uB3D9\uC801 \uD65C\uB3D9\uC73C\uB85C \uD45C\uD604\uB418\uBA70, \uC6C0\uC9C1\uC784\uC774 \uAC15\uD55C \uC2DC\uAE30\uC5D4 \uAD50\uD1B5 \uC0AC\uACE0 \uC8FC\uC758 \uACE0\uC9C0\uAC00 \uD544\uC694\uD558\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T06-015"],
              sources: ["T06-014", "T06-015"]
            },
            {
              group: "\u5B50\u5348\u536F\u9149",
              label: "\uC655\uC9C0 \uCDA9",
              meaning: "\uC815\uC810\uC5D0 \uB2EC\uD55C \uAE30\uC6B4\uC774 \uAEBE\uC778\uB2E4. \uADF9\uD55C \uC0C1\uD0DC\uC758 \uC194\uC9C1\uB2F4\uBC31\uD568\uC774 \uD2B9\uC9D5\uC774\uBA70, \uC774 \uC870\uAC74\uC774 \uC0DD\uAE30\uB294 \uD574\uC5D0 \uC218\uC220\xB7\uAC74\uAC15 \uC774\uC288\uAC00 \uB300\uB450\uB418\uACE0, \uC774 \uC2DC\uAE30\uC758 \uACB0\uD63C\uC740 \uAD00\uACC4 \uADE0\uC5F4 \uC704\uD5D8\uC774 \uCEE4\uC9C4\uB2E4\uB294 \uC2E4\uC804 \uADDC\uCE59\uC774 \uC788\uB2E4.",
              unverified: true,
              unverifiedSourceIds: ["T06-016"],
              sources: ["T06-014", "T06-016"]
            },
            {
              group: "\u8FB0\u620C\u4E11\u672A",
              label: "\uBB18\uC9C0 \uCDA9",
              meaning: "\uC815\uB9AC\xB7\uC900\uBE44 \uC790\uB9AC\uC758 \uB545\uC774 \uC6C0\uC9C1\uC778\uB2E4. \uC870\uC9C1\xB7\uC815\uCE58\xB7\uBD80\uB3D9\uC0B0 \uAE30\uD68C\uAC00 \uC5F4\uB9AC\uB294 \uB3D9\uC2DC\uC5D0 \uD759\uD0D5(\uD0C1\uC218)\uACFC \uC0AC\uACE0 \uB9AC\uC2A4\uD06C\uAC00 \uB3D9\uBC18\uB41C\uB2E4. \u8FB0\u620C\uB07C\uB9AC\uC758 \uCDA9\uC774 \uAC00\uC7A5 \uD06C\uAC8C \uC791\uB3D9\uD55C\uB2E4.",
              unverified: false,
              sources: ["T06-014", "T06-017"]
            }
          ],
          sanhabs: [
            { element: "\u6728", members: ["\u4EA5", "\u536F", "\u672A"], core: "\u536F", halves: [["\u4EA5", "\u536F"], ["\u536F", "\u672A"]], note: "\uC655\uC9C0\uAC00 \uC5C6\uC73C\uBA74 \uC655\uC9C0\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uC0C1\uD0DC(\uACF5\uD611)\uB85C \uBCF8\uB2E4.", sources: ["T06-003"] },
            { element: "\u706B", members: ["\u5BC5", "\u5348", "\u620C"], core: "\u5348", halves: [["\u5BC5", "\u5348"], ["\u5348", "\u620C"]], note: "\uC655\uC9C0\uAC00 \uC5C6\uC73C\uBA74 \uC655\uC9C0\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uC0C1\uD0DC(\uACF5\uD611)\uB85C \uBCF8\uB2E4.", sources: ["T06-004"] },
            { element: "\u91D1", members: ["\u5DF3", "\u9149", "\u4E11"], core: "\u9149", halves: [["\u5DF3", "\u9149"], ["\u9149", "\u4E11"]], note: "\uC655\uC9C0\uAC00 \uC5C6\uC73C\uBA74 \uC655\uC9C0\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uC0C1\uD0DC(\uACF5\uD611)\uB85C \uBCF8\uB2E4.", sources: ["T06-005"] },
            { element: "\u6C34", members: ["\u7533", "\u5B50", "\u8FB0"], core: "\u5B50", halves: [["\u7533", "\u5B50"], ["\u5B50", "\u8FB0"]], note: "\uC655\uC9C0\uAC00 \uC5C6\uC73C\uBA74 \uC655\uC9C0\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uC0C1\uD0DC(\uACF5\uD611)\uB85C \uBCF8\uB2E4.", sources: ["T06-006"] }
          ],
          banghabs: [
            { direction: "\uB3D9", season: "\uBD04", element: "\u6728", members: ["\u5BC5", "\u536F", "\u8FB0"], core: "\u536F", sources: ["T06-007", "T06-008"] },
            { direction: "\uB0A8", season: "\uC5EC\uB984", element: "\u706B", members: ["\u5DF3", "\u5348", "\u672A"], core: "\u5348", sources: ["T06-007", "T06-009"] },
            { direction: "\uC11C", season: "\uAC00\uC744", element: "\u91D1", members: ["\u7533", "\u9149", "\u620C"], core: "\u9149", sources: ["T06-007", "T06-010"] },
            { direction: "\uBD81", season: "\uACA8\uC6B8", element: "\u6C34", members: ["\u4EA5", "\u5B50", "\u4E11"], core: "\u5B50", sources: ["T06-007", "T06-011"] }
          ],
          yukhabs: {
            rule: "\uC5EC\uC12F \uC9DD \uAC00\uC6B4\uB370 \uC2E4\uC81C\uB85C \uC4F0\uB294 \uAC83\uC740 \u5BC5\u4EA5(\uB098\uBB34)\uC640 \u8FB0\u9149(\uC1E0) \uB450 \uC30D\uBFD0\uC774\uB2E4.",
            excluded: [
              "\uC0C1\uD558 \uBC29\uD5A5\uC758 \uB450 \uC9DD\uC740 \uBC29\uD569(\uC5EC\uB984\xB7\uACA8\uC6B8)\uACFC \uACB9\uCCD0 \uB530\uB85C \uC4F0\uC9C0 \uC54A\uB294\uB2E4",
              "\uB0A8\uBD81 \uBC29\uD5A5\uC758 \uB450 \uC9DD\uC740 \uC11C\uB85C \uADF9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4"
            ],
            unverified: true,
            unverifiedSourceIds: ["T06-012"],
            sources: ["T06-012"]
          },
          myojiRule: {
            rule: "\uC9C0\uC9C0\uAC00 \u8FB0\u620C\u4E11\u672A\uB97C \uC774\uB8E8\uBA74 \uC815\uCE58\xB7\uBA85\uC608 \uC778\uC5F0\uC73C\uB85C \uC77D\uB294\uB2E4. \uC870\uC9C1\uACFC \uB545\uC774 \uC6C0\uC9C1\uC5EC \uBD80\uB3D9\uC0B0 \uAE30\uD68C\uAC00 \uB418\uC9C0\uB9CC, \uC6C0\uC9C1\uC784\uC774 \uD074\uC218\uB85D \uD759\uD0D5\uACFC \uC0AC\uACE0 \uB9AC\uC2A4\uD06C\uAC00 \uD568\uAED8 \uCEE4\uC9C4\uB2E4.",
            sources: ["T06-017", "T05-023", "T07-183"],
            unverified: false
          },
          durationRule: {
            rule: "\uC0BC\uD569\uC740 \uD55C \uB2EC\uC5D0\uC11C \uC77C \uB144 \uB2E8\uC704\uC758 \uC77C\uC2DC\uC801 \uACB0\uD569\uC774\uACE0, \uBC29\uD569\uC740 \uC138 \uB2EC\uC5D0\uC11C \uC138 \uB144 \uB2E8\uC704\uB85C \uB354 \uC624\uB798 \uC9C0\uC18D\uB41C\uB2E4.",
            unverified: true,
            unverifiedSourceIds: ["T07-091"],
            sources: ["T07-091"]
          },
          jinganganNote: {
            rule: "\uCC9C\uAC04\uD569\uC740 \uB2E4\uC12F \uC30D\uB9CC \uC0AC\uC6A9\uD558\uACE0 \uCC9C\uAC04\uC758 \uCDA9\uC740 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4. \uBCC0\uD654\uB294 \uD569 \uC131\uB9BD, \uD569 \uD574\uC18C, \uC591\uAC04\uC758 \uC74C\uAC04\uD654, \uB04C\uC5B4\uC634 \uC0AC\uC2AC\uC758 \uB124 \uCD95\uC73C\uB85C \uC11C\uC220\uD55C\uB2E4.",
            sources: ["T05-001", "T05-011"]
          }
        }
      };
    }
  });

  // ../content/regions.json
  var require_regions = __commonJS({
    "../content/regions.json"(exports, module) {
      module.exports = {
        meta: {
          service: "SAJU(\uAC00\uCE6D)",
          ticket: 12,
          built: "2026-10-02",
          method: "8\uAC74 \uD310\uC815 \uAC747(\uC9C0\uC5ED\xB7\uAD6D\uAC00 \uC624\uD589, \uD655\uC778\uB428)\uACFC \uAE30\uB465 \uC2DC\uAC04\uCD95 \uADFC\uAC70\uB97C \uD14C\uC774\uBE14\uB85C \uC7AC\uAD6C\uC131\uD588\uB2E4.",
          panjeong: "docs/wayfinder/namchon-8geon-panjeong.md \uAC747 \uAE30\uC900. \uB0A8\uBC18\uAD6C\uB77C\uB294 \uC6A9\uC5B4\uB294 \uC6D0\uC804\uC5D0 \uC5C6\uC73C\uBA70 \uC9C0\uAD6C \uBC18\uB300\uD3B8 \uADDC\uCE59\uC774 \uC774\uB97C \uD3EC\uAD04\uD55C\uB2E4."
        },
        countryElements: {
          \u65E5\u672C: {
            element: "\u4E19\u706B",
            rule: "\uD0DC\uC591\uC758 \uB098\uB77C. \uD070 \uBE5B\uC774 \uACB9\uCCD0 \uC5B4\uB450\uC6CC\uC9C4 \uBA85\uC870(\uD0DC\uC591\uC774 \uB458 \uC774\uC0C1\uC778 \uACBD\uC6B0)\uAC00 \uC77C\uBCF8\uACFC \uC778\uC5F0\uC744 \uB9FA\uC73C\uBA74 \uBE5B\uC774 \uC14B\uC774 \uB418\uC5B4 \uB2E4\uC2DC \uBC1D\uC544\uC9C4\uB2E4\uB294 \uC2DD\uC73C\uB85C \uD65C\uC6A9\uD55C\uB2E4.",
            careerHint: "\uBC29\uC1A1\xB7\uC608\uC220\xB7\uD64D\uBCF4 \uB4F1 \uBE5B\uC744 \uC9C1\uC811 \uC4F0\uB294 \uC0B0\uC5C5\uACFC\uC758 \uC778\uC5F0 \uD310\uC815\uC5D0 \uC4F4\uB2E4",
            unverified: true,
            unverifiedSourceIds: ["T07-068"],
            sources: ["T03-020", "T07-068", "T07-160"]
          },
          \u4E2D\u570B: {
            element: "\u620A\u571F",
            rule: "\uB113\uC740 \uB300\uB959\uC758 \uD070 \uB545. \uBFCC\uB9AC\uB0B4\uB9B4 \uD070 \uB545\uC774 \uD544\uC694\uD55C \uB098\uBB34(\uC7AC) \uC77C\uAC04, \uBB3C\uC744 \uB9C9\uC744 \uD070 \uC81C\uBC29\uC774 \uD544\uC694\uD55C \uBB3C \uC77C\uAC04\uC5D0\uAC8C \uC720\uB9AC\uD55C \uB098\uB77C\uB2E4.",
            careerHint: "\uAC74\uC124\xB7\uD1A0\uBAA9\xB7\uBD80\uB3D9\uC0B0\xB7\uC911\uC2DD \uB4F1 \uB545\uACFC \uC74C\uC2DD \uC0B0\uC5C5 \uC778\uC5F0 \uD310\uC815\uC5D0 \uC4F4\uB2E4",
            sources: ["T07-160", "C10-004"]
          },
          \u7F8E\u570B: {
            element: "\u5E9A\u7533",
            rule: "\uD070 \uB300\uB959\uC758 \uB545\uC5D0 \uC9C0\uAD6C \uBC18\uB300\uD3B8 \uB0AE\uC758 \uD0DC\uC591(\uAD00)\uC774 \uB354\uD574\uC9C4 \uBCF5\uD569 \uBC30\uC815\uC774\uB2E4. \uD070 \uB545\uACFC \uD0DC\uC591\uC744 \uB3D9\uC2DC\uC5D0 \uC5BB\uB294 \uB098\uB77C\uB85C \uBCF4\uBA70, \uC1FC \uC77C\uAC04\uC774 \uD070 \uC7AC\uBB3C\xB7\uBA85\uC608\uB97C \uD568\uAED8 \uCDE8\uD558\uB294 \uBC29\uD5A5\uC73C\uB85C \uC77D\uB294\uB2E4.",
            careerHint: "\uC720\uD559\xB7\uC218\uCD9C\xB7\uAE08\uC18D\xB7\uAE30\uACC4\xB7\uCCB4\uC721 \uACC4\uC5F4\uC758 \uD574\uC678 \uC778\uC5F0 \uD310\uC815\uC5D0 \uC4F4\uB2E4",
            sources: ["C07-010"]
          }
        },
        oppositeSideRule: {
          rule: "\uBCF8\uAD6D \uC2DC\uAC04\uB300\uC5D0 \uD0DC\uC591\uC774 \uC5C6\uB294 \uBA85\uC870\uB294, \uD0DC\uC591\uC774 \uD558\uB298\uC5D0 \uB5A0 \uC788\uB294 \uBC18\uB300\uCABD \uC9C0\uAD6C(\uD574\uC678)\uB85C \uAC74\uB108\uAC00\uBA74 \uADF8 \uBE5B\uC744 \uB2A5\uB825\uC73C\uB85C \uC4F8 \uC218 \uC788\uB2E4. \uBC24\uC758 \uBE5B(\uB2EC\xB7\uBCC4\xB7\uAC00\uB85C\uB4F1 \uC131\uD5A5)\uC740 \uB0AE \uC2DC\uAC04\uC5D0 \uB20C\uB9B4 \uB54C \uC2DC\uCC28\uAC00 \uD070 \uB098\uB77C\uB85C \uAC74\uB108\uAC00\uB294 \uBC29\uD5A5\uC73C\uB85C \uD47C\uB2E4.",
          usage: "\u706B \uBD80\uC7AC \uBA85\uC870\uC758 \uD574\uC678 \uC9C4\uCD9C \uAD8C\uACE0, \uB0AE-\uBC24 \uC2DC\uAC04\uB300 \uC5ED\uC804 \uAD6D\uAC00 \uC120\uD0DD \uD310\uC815\uC5D0 \uC4F4\uB2E4",
          unverified: true,
          unverifiedSourceIds: ["T07-091"],
          sources: ["T03-019", "T07-091"]
        },
        waterOverseasRule: {
          rule: "\uBB3C\uC740 \uC774\uACF3\uC800\uACF3 \uD758\uB7EC \uB2E4\uB978 \uB545(\uB098\uB77C)\uAE4C\uC9C0 \uAC00\uB294 \uC131\uC9C8\uC774\uB77C \uD574\uC678\xB7\uC720\uD1B5\xB7\uBB3C\uB958\xB7\uC74C\uC2DD\uC744 \uB73B\uD55C\uB2E4. \uBB3C\uC774 \uC5C6\uC5B4 \uAC08\uB77C\uC9C0\uAC70\uB098 \uBB3C\uC774 \uB118\uCCD0 \uD758\uB824\uBCF4\uB0B4\uC57C \uD560 \uB54C \uD574\uC678 \uC778\uC5F0\uC744 \uAD8C\uD558\uB294 \uCC98\uBC29\uC774 \uB41C\uB2E4.",
          usage: "\uD574\uC678 \uCDE8\uC5C5\xB7\uC218\uCD9C\uC785\xB7\uC720\uD559 \uAD8C\uACE0 \uBB38\uAD6C\uC758 \uADFC\uAC70 \uADDC\uCE59\uC774\uB2E4",
          sources: ["T03-028", "T07-204"]
        },
        pillarRoles: [
          {
            pillar: "\uB144\uC8FC",
            years: "1~20\uC138",
            lifeStage: "\uADFC(\uC720\uB144)",
            domain: "\uAD6D\uAC00\xB7\uC870\uC0C1\xB7\uACE0\uD5A5",
            area: "\uC0AC\uD68C\uC801 \uC601\uC5ED",
            personType: "\uC5F0\uC0C1(\uC120\uBC30)",
            detail: "\uAD6D\uAC00\uC790\uB9AC. \uAD6D\uAC00 \uAD8C\uD55C\uC744 \uC4F0\uB294 \uC9C1\uC5C5(\uACF5\uBB34\xB7\uAD6D\uAC00\uC790\uACA9) \uD310\uB2E8\uC758 \uCD95\uC774\uB2E4",
            sources: ["T02-005", "T07-015"]
          },
          {
            pillar: "\uC6D4\uC8FC",
            years: "21~40\uC138",
            lifeStage: "\uBAA8(\uC7A5\uB144)",
            domain: "\uC9C0\uC5ED\xB7\uC9C1\uC7A5\xB7\uBD80\uBAA8\uD615\uC81C",
            area: "\uC0AC\uD68C\uC801 \uC601\uC5ED",
            personType: "\uB3D9\uAC11(\uB3D9\uB8CC)",
            detail: "\uC0AC\uD68C \uC9C4\uCD9C\uAE30\uC758 \uD589\uB3D9 \uBB34\uB300. \uAC19\uC740 \uCC9C\uAC04\uC774 \uB144\xB7\uC6D4\uC5D0 \uACB9\uCE58\uBA74 \uBD80\uBAA8\uAC00 \uB450 \uBC88 \uD63C\uC778\uD560 \uC218 \uC788\uB2E4\uB294 \uD310\uB3C5 \uADDC\uCE59\uACFC \uC5F0\uACB0\uB41C\uB2E4",
            sources: ["T02-005"]
          },
          {
            pillar: "\uC77C\uC8FC",
            years: "41~60\uC138",
            lifeStage: "\uD654(\uC911\uB144)",
            domain: "\uB098\xB7\uBC30\uC6B0\uC790",
            area: "\uAC1C\uC778\uC758 \uC601\uC5ED",
            personType: "\uC5F0\uD558(\uD6C4\uBC30)",
            detail: "\uC77C\uAC04\uC740 \uB098, \uC77C\uC9C0\uB294 \uBC30\uC6B0\uC790\uAD81\uC774\uB2E4. \uC77C\uC9C0\uC758 \uD569\xB7\uCDA9 \uC6C0\uC9C1\uC784\uC774 \uACB0\uD63C\xB7\uC774\uD63C \uC2DC\uC810 \uD310\uC815\uC758 \uD2B8\uB9AC\uAC70\uAC00 \uB41C\uB2E4",
            sources: ["T02-005"]
          },
          {
            pillar: "\uC2DC\uC8FC",
            years: "61~80\uC138",
            lifeStage: "\uC2E4(\uB178\uB144)",
            domain: "\uC790\uB140\xB7\uB178\uB144",
            area: "\uAC1C\uC778\uC758 \uC601\uC5ED",
            personType: "\uC5F0\uD558(\uD6C4\uBC30)",
            detail: "\uC790\uB140\uAC00 \uC758\uC9C0\uAC00 \uB418\uACE0 \uC790\uB140\uB85C \uBA85\uC608\uAC00 \uC62C\uB77C\uAC00\uB294 \uC2DC\uAE30\uB85C \uBCF8\uB2E4",
            sources: ["T02-005"]
          }
        ],
        noHourNote: {
          rule: "\uC2DC\uC8FC \uC5ED\uD560 \uC815\uC758\uB294 \uC6D0\uC804\uC5D0\uC11C \uC774 \uC790\uB9AC \uD45C \uD558\uB098\uBFD0\uC774\uBA70, \uC2DC\uAC01 \uBBF8\uC0C1 \uBA85\uC870\uB97C \uB2E4\uB8E8\uB294 \uD559\uD30C \uADDC\uCE59\uC740 \uC6D0\uC804\uC5D0 \uC5C6\uB2E4(\uCF54\uD37C\uC2A4 531\uC5D4\uD2B8\uB9AC \uC804\uC218 \uC2E4\uCE21 0\uAC74). \uC2DC\uAC01 \uBBF8\uC0C1 \uC0AC\uC6A9\uC790\uC758 \uC2DC\uC8FC \uC758\uC874 \uADDC\uCE59\uC740 service \uC815\uCC45(policy.json)\uC5D0 \uB530\uB77C \uBE44\uD65C\uC131\uD654\uD55C\uB2E4.",
          sources: ["T02-005"]
        }
      };
    }
  });

  // ../content/slots.json
  var require_slots = __commonJS({
    "../content/slots.json"(exports, module) {
      module.exports = {
        meta: {
          version: "0.1.0",
          source: "docs/pdf \uC77C\uAC04\uBCC4 \uD1B5\uBCD1 \uAC08\uB798\xB7\uC2AC\uB86F \uC124\uACC4 (\uAC11~\uACC4), Oct 4 2026, @Bonin OKEH (\uC624\uB108 \uC791\uC131 \uC124\uACC4\uC11C \uC804\uC0AC)",
          scope: "\u7532 \uC644\uC131 + rules \uC804\uCCB4",
          built: "2026-10-05",
          note: "\uBB38\uC7A5\uACFC \uADFC\uAC70 \uBC88\uD638(R2.GA.NNN)\uB294 PDF \uC6D0\uBB38 \uADF8\uB300\uB85C \uC804\uC0AC\uD588\uB2E4. { }\uB294 \uBA85\uC2DD\uB9C8\uB2E4 \uCC44\uC6B0\uB294 \uC790\uB9AC\uB2E4. \uAC00\uC9C0 \uCF54\uB4DC\xB7\uC2AC\uB86F \uBC88\uD638\xB7\uADFC\uAC70 \uBC88\uD638\uB294 \uB0B4\uBD80\uC6A9\uC774\uBA70 \uC0AC\uC6A9\uC790 \uD654\uBA74\uC5D0\uB294 \uBB38\uC7A5\uB9CC \uB098\uAC04\uB2E4 (PDF 0-1)."
        },
        rules: {
          selection: {
            source: "PDF 0-5 \uC120\uD0DD \uADDC\uCE59",
            items: [
              "\uB098\uB77C\uB294 \uC0AC\uB78C\uC5D0\uB294 \uAC00\uC9C0\uB97C \uCD5C\uB300 \uB450 \uAC1C\uB9CC \uC4F4\uB2E4.",
              {
                rule: "\uC6B0\uC120\uC21C\uC704(\uAE30\uBCF8\uAC12)",
                order: [
                  "\uC9C0\uAE08 10\uB144\uC5D0 \uBC14\uB00C\uB294 \uAC00\uC9C0",
                  "\uC131\uB9BD\uC870\uAC74 1\uB2E8\uACC4\uC758 \uACB0\uD54D",
                  "\uBB36\uC784",
                  "\uAC00\uB9BC",
                  "\uD750\uB824\uC9D0",
                  "\uAC19\uC740 \uAE00\uC790 \uACB9\uCE68",
                  "\uACFC\uB2E4",
                  "\uC9C0\uC9C0\uC758 \uC6C0\uC9C1\uC784"
                ],
                note: "[\uD310\uC815 \uD544\uC694]"
              },
              "\uAC19\uC740 \uC6B0\uC120\uC21C\uC704\uBA74 \uCC9C\uAC04 \uAC00\uC9C0\uAC00 \uC9C0\uC9C0 \uAC00\uC9C0\uBCF4\uB2E4 \uC55E\uC120\uB2E4.",
              "\uD55C \uAC00\uC9C0\uB97C \uC5EC\uB7EC \uC139\uC158\uC5D0\uC11C \uC4F8 \uB54C\uB294 \uAC01\uB3C4\uB97C \uBC14\uAFBC\uB2E4. \uB098\uB77C\uB294 \uC0AC\uB78C\uC740 \uC131\uD5A5, \uC77C\uC740 \uC4F0\uB294 \uBC95, \uC7AC\uBB3C\uC740 \uB3C8\uC758 \uD750\uB984.",
              "\uC0B6\uC758 \uACC4\uC808\uC758 \uBB36\uC784\xB7\uD480\uB9BC \uC2DC\uAE30\uB294 \uC6B0\uC120\uC21C\uC704\uC640 \uAD00\uACC4\uC5C6\uC774 \uC804\uBD80 \uC4F4\uB2E4."
            ]
          },
          sentence: {
            source: "PDF 0-3 \uBB38\uC7A5 \uADDC\uCE59",
            items: [
              '\uAF2C\uC9C0 \uC54A\uB294\uB2E4. "~\uC600\uB358 \uAC74 \uD55C \uBC88\uB3C4 ~\uAC00 \uC544\uB2C8\uC5C8\uB2E4" \uAC19\uC740 \uB4A4\uC9D1\uAE30, \uC774\uC911 \uBD80\uC815, \uBC18\uC804\uC73C\uB85C \uBB34\uAC8C\uB97C \uB9CC\uB4E4\uC9C0 \uC54A\uB294\uB2E4. \uD55C \uBC88\uC5D0 \uC77D\uD600\uC57C \uD55C\uB2E4.',
              '"\uB2F9\uC2E0\uC740"\uC740 \uC139\uC158 \uCCAB \uBB38\uC7A5\uACFC \uAF2D \uD544\uC694\uD55C \uACF3\uC5D0\uB9CC. \uB9E4 \uBB38\uC7A5 \uC8FC\uC5B4\uB85C \uBC18\uBCF5\uD558\uBA74 \uB4A4\uC758 \uC2AC\uB86F\uC774 \uBCF4\uC778\uB2E4.',
              "\uBB3C\uC0C1 \uC2A4\uD1A0\uB9AC\uD154\uB9C1\uC73C\uB85C \uC787\uB294\uB2E4. \uD55C \uC139\uC158 \uC548\uC758 \uBB38\uC7A5\uC740 \uC55E \uBB38\uC7A5\uC758 \uBB3C\uC0C1\uC744 \uC774\uC5B4\uBC1B\uC544 \uC778\uACFC\uB85C \uC774\uC5B4 \uAC04\uB2E4. \uBB3C\uC0C1 \uBB18\uC0AC\uB294 \uC139\uC158\uB2F9 2\uBB38\uC7A5 \uC774\uB0B4.",
              '\uAD6C\uC870\uB294 \uB2E8\uC815, \uACB0\uACFC\uB294 \uC870\uAC74. "\uB451 \uC5C6\uC774 \uD0DC\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4"\uB294 \uB2E8\uC815\uD55C\uB2E4. "\uADF8\uB798\uC11C \uC2E4\uD328\uD569\uB2C8\uB2E4"\uB294 \uC4F0\uC9C0 \uC54A\uB294\uB2E4.',
              "\uD30C\uC545 \uBB38\uC7A5 \uC2DC\uD5D8: \uC774 \uBA85\uC2DD\uC758 \uAC00\uC9C0\uB97C \uBE7C\uB3C4 \uC4F8 \uC218 \uC788\uB294 \uBB38\uC7A5\uC774\uBA74 \uBC84\uB9B0\uB2E4.",
              "\uCC98\uBC29 \uC2DC\uD5D8: \uB2E4\uB978 \uC77C\uAC04\uC5D0\uAC8C \uC918\uB3C4 \uB9DE\uB294 \uCC98\uBC29\uC774\uBA74 \uBC84\uB9B0\uB2E4. \uCC98\uBC29\uC740 \uBA85\uB8CC\uD558\uACE0 \uAE0D\uC815\uC801\uC73C\uB85C.",
              "\uD558\uB098\uB9C8\uB098\uD55C \uB9D0 \uAE08\uC9C0. \uC2E0\uC758, \uC131\uC2E4, \uAE0D\uC815, \uC18C\uD1B5\uCC98\uB7FC \uB204\uAD6C\uC5D0\uAC8C\uB098 \uB9DE\uB294 \uB355\uBAA9\uC744 \uCC98\uBC29\uC73C\uB85C \uC4F0\uC9C0 \uC54A\uB294\uB2E4.",
              "\uBB38\uC7A5 \uD2C0 \uC548\uC758 { } \uB294 \uBA85\uC2DD\uB9C8\uB2E4 \uCC44\uC6B0\uB294 \uC790\uB9AC\uB2E4."
            ]
          },
          safety: {
            source: "PDF 0-6 \uC548\uC804",
            items: [
              "\uAC74\uAC15\xB7\uC9C8\uBCD1 \uAC00\uC9C0\uB294 \uD310\uC815\uC5D0\uB9CC \uC4F0\uACE0 \uBB38\uC7A5\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uC9C0 \uC54A\uB294\uB2E4.",
              '\uC774\uD63C, \uC678\uB3C4, \uC0AC\uB9DD, \uBC95\uC801 \uBB38\uC81C, \uC7AC\uC0B0 \uD0D5\uC9C4 \uAC19\uC740 \uACB0\uACFC\uB294 \uC4F0\uC9C0 \uC54A\uB294\uB2E4. \uD544\uC694\uD558\uBA74 "\uAD00\uACC4\uC758 \uC790\uB9AC\uAC00 \uD754\uB4E4\uB9AC\uB294 \uB54C", "\uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB85C\uC6B4 \uB54C" \uC218\uC900\uAE4C\uC9C0\uB9CC \uC4F4\uB2E4.',
              "\uD1F4\uC0AC, \uCC3D\uC5C5, \uACC4\uC57D, \uC774\uD63C, \uD22C\uC790\uCC98\uB7FC \uB418\uB3CC\uB9AC\uAE30 \uC5B4\uB824\uC6B4 \uACB0\uC815\uC744 \uC9C0\uC2DC\uD558\uC9C0 \uC54A\uB294\uB2E4. \uD750\uB984\uACFC \uC2DC\uAE30\uB9CC \uB9D0\uD55C\uB2E4.",
              "\uC77D\uB294 \uC0AC\uB78C\uC774 \uC790\uAE30 \uC778\uC0DD\uC744 \uBE44\uAD00\uD558\uAC8C \uB420 \uBB38\uC7A5\uC744 \uC4F0\uC9C0 \uC54A\uB294\uB2E4. \uCE7C\uB05D\uC740 \uC0AC\uB78C\uC774 \uC544\uB2C8\uB77C \uBC18\uBCF5\uB418\uB294 \uD328\uD134\uC744 \uD5A5\uD55C\uB2E4."
            ]
          },
          translation: {
            source: "PDF 0-4, 0-7 \uBB3C\uC0C1 \uC774\uB984",
            positionRule: '"\uD0DC\uC5B4\uB09C \uD574\uC758 \uC790\uB9AC", "\uACF5\uACF5\uC758 \uC790\uB9AC", "\uAD6D\uAC00\uC790\uB9AC" \uAC19\uC740 \uD45C\uD604\uC740 \uBB38\uC7A5\uC5D0 \uC4F0\uC9C0 \uC54A\uB294\uB2E4. (0-4)',
            foreignCharRule: "\uC77C\uAC04\uC774 \uC544\uB2CC \uAE00\uC790\uB3C4 \uBB38\uC7A5\uC5D0\uC11C\uB294 \uAC19\uC740 \uC774\uB984\uC73C\uB85C \uBD80\uB978\uB2E4. \uCC98\uC74C \uB098\uC62C \uB54C \uD55C \uBC88\uC740 \uC0B6\uC758 \uB9D0\uB85C \uBC88\uC5ED\uC744 \uBD99\uC778\uB2E4. \uC608: \uAC70\uB300\uD55C \uC0B0\uB9E5, \uACE7 \uB098\uB97C \uBD99\uC7A1\uC544 \uC8FC\uB294 \uD14C\uB450\uB9AC. (0-7)",
            positions: [
              {
                key: "\uB144\uC8FC",
                name: "\uD0DC\uC5B4\uB09C \uD574 (\uB144\uC8FC)",
                words: [
                  "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00",
                  "\uAD6D\uAC00\uC2DC\uD5D8\uC73C\uB85C \uB530\uB77C\uC624\uB294 \uC790\uACA9",
                  "\uACF5\uACF5\uC758 \uC77C\uAC10",
                  "\uC717\uC138\uB300"
                ]
              },
              {
                key: "\uC6D4\uC8FC",
                name: "\uD0DC\uC5B4\uB09C \uB2EC (\uC6D4\uC8FC)",
                words: [
                  "\uC77C\uD130\uC640 \uC9C1\uC7A5",
                  "\uBD80\uBAA8\xB7\uD615\uC81C",
                  "\uC0AC\uD68C\uC0DD\uD65C\uC5D0\uC11C \uB9CC\uB098\uB294 \uC0AC\uB78C"
                ]
              },
              {
                key: "\uC77C\uC9C0",
                name: "\uBC30\uC6B0\uC790 \uC790\uB9AC (\uC77C\uC9C0)",
                words: [
                  "\uBC30\uC6B0\uC790",
                  "\uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uACC1"
                ]
              },
              {
                key: "\uC2DC\uC8FC",
                name: "\uD0DC\uC5B4\uB09C \uC2DC (\uC2DC\uC8FC)",
                words: [
                  "\uC790\uB140",
                  "\uD6C4\uBC30",
                  "\uB9D0\uB144",
                  "\uC190\uB05D\uC758 \uC7AC\uC8FC"
                ]
              }
            ],
            chars: {
              \uAC11: "\uD070 \uB098\uBB34",
              \uC744: "\uD478\uB978 \uB369\uAD74",
              \uBCD1: "\uD0DC\uC591",
              \uC815: "\uC138\uC0C1\uC744 \uBC1D\uD788\uB294 \uB4F1\uBD88",
              \uBB34: "\uAC70\uB300\uD55C \uC0B0\uB9E5",
              \uAE30: "\uAD6C\uD68D\uB418\uACE0 \uC0DD\uBA85\uC744 \uC0B4\uAC8C \uD558\uB294 \uB545",
              \uACBD: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5",
              \uC2E0: "\uC138\uACF5\uB41C \uBCF4\uC11D",
              \uC784: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218",
              \uACC4: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C"
            }
          }
        },
        sections: [
          {
            id: "\uC0AC1",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "\uD615\uC0C1 + 1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904 (\uCCAB \uD654\uBA74 \uD6C5)"
          },
          {
            id: "\uC0AC2",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "\uB300\uD45C \uC131\uD5A5 (A \uACE0\uC815\uAC12)"
          },
          {
            id: "\uC0AC3",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "\uB0A8\uB4E4\uC774 \uBCF4\uB294 \uB098 (A \uACE0\uC815\uAC12)"
          },
          {
            id: "\uC0AC4",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "\uC778\uC815\uACFC \uCE6D\uCC2C (A \uACE0\uC815\uAC12 + \uC788\uB294 \uD798)"
          },
          {
            id: "\uC0AC5",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "1\uC21C\uC704 \uAC00\uC9C0\uC758 \uC9C4\uB2E8"
          },
          {
            id: "\uC0AC6",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "1\uC21C\uC704 \uAC00\uC9C0\uC758 \uCC98\uBC29"
          },
          {
            id: "\uC0AC7",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "2\uC21C\uC704 \uAC00\uC9C0\uC758 \uC9C4\uB2E8"
          },
          {
            id: "\uC0AC8",
            section: "\uB098\uB77C\uB294 \uC0AC\uB78C",
            content: "2\uC21C\uC704 \uAC00\uC9C0\uC758 \uCC98\uBC29"
          },
          {
            id: "\uC77C1",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uC77C\uC758 \uBB34\uAE30 (A \uACE0\uC815\uAC12)"
          },
          {
            id: "\uC77C2",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uC7AC\uBB3C\xB7\uC77C\uC774 \uB2FF\uB294 \uD604\uC2E4\uC758 \uB300\uC0C1 (\uAD6D\uAC00\uC790\uB9AC \uD310\uC815)"
          },
          {
            id: "\uC77C3",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uD750\uB984 \u2460 \uAC00\uC9C4 \uAC83 \u2192 \uADF8\uAC83\uC774 \uC4F0\uC774\uB824\uBA74 \uD544\uC694\uD55C \uAC83"
          },
          {
            id: "\uC77C4",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uD750\uB984 \u2461 \uD544\uC694\uD55C \uAC83\uC774 \uC5C6\uC744 \uB54C\uC758 \uB300\uC548"
          },
          {
            id: "\uC77C5",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uD750\uB984 \u2462 \uC6B4\uC5D0\uC11C \uB4E4\uC5B4\uC624\uB294 \uAC83 \u2192 \uC9C0\uD0A4\uB294 \uBC95"
          },
          {
            id: "\uC77C6",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uCC98\uBC29 \uCDA9\uB3CC \uC815\uB9AC"
          },
          {
            id: "\uC77C7",
            section: "\uB098\uC5D0\uAC8C \uB9DE\uB294 \uC77C",
            content: "\uC9C0\uAE08 \uCC29\uC218\uD560 \uD589\uB3D9 \uD558\uB098"
          },
          {
            id: "\uC7AC1",
            section: "\uC7AC\uBB3C",
            content: "\uC7AC\uBB3C\uC758 \uBAA8\uC591"
          },
          {
            id: "\uC7AC2",
            section: "\uC7AC\uBB3C",
            content: "\uC7AC\uBB3C\uC774 \uC950\uC5B4\uC9C0\uC9C0 \uC54A\uB294 \uAD6C\uC870"
          },
          {
            id: "\uC7AC3",
            section: "\uC7AC\uBB3C",
            content: "\uD480\uB9AC\uB294 10\uB144"
          },
          {
            id: "\uC7AC4",
            section: "\uC7AC\uBB3C",
            content: "\uC8FC\uC758 \uD574"
          },
          {
            id: "\uC7AC5",
            section: "\uC7AC\uBB3C",
            content: "\uACB0\uC2E4 \uD574"
          },
          {
            id: "\uC7AC6",
            section: "\uC7AC\uBB3C",
            content: "\uC774 \uC77C\uAC04\uC758 \uB3C8\uC774 \uB4E4\uC5B4\uC624\uB294 \uC21C\uC11C (A \uACE0\uC815\uAC12)"
          },
          {
            id: "\uC7AC7",
            section: "\uC7AC\uBB3C",
            content: "\uB3C8\uC774 \uC5F4\uB9AC\uB294 \uC601\uC5ED"
          },
          {
            id: "\uC5F01",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uBB3C\uC0C1 \uC131\uC9C8\uB85C \uAD00\uACC4 \uC18D \uB098\uB97C \uC120\uC5B8 \u2192 \uC18D\uB9C8\uC74C (A \uACE0\uC815\uAC12)"
          },
          {
            id: "\uC5F02",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uBC30\uC6B0\uC790 \uC790\uB9AC\uC758 \uBAA8\uC591"
          },
          {
            id: "\uC5F03",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uC778\uC5F0\uC758 \uACB0"
          },
          {
            id: "\uC5F04",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uC9C0\uB09C \uC778\uC5F0\uC758 \uD574"
          },
          {
            id: "\uC5F05",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uC55E\uC73C\uB85C\uC758 \uC778\uC5F0 \uD574"
          },
          {
            id: "\uC5F06",
            section: "\uC5F0\uC560\uC640 \uACB0\uD63C",
            content: "\uAD00\uACC4\uC5D0\uC11C \uC4F0\uB294 \uBC95"
          },
          {
            id: "\uACC41",
            section: "\uC0B6\uC758 \uACC4\uC808",
            content: "10\uB144 \uD750\uB984(\uC2DC\uC791 \uC5F0\uB3C4 \uD45C\uAE30)"
          },
          {
            id: "\uACC42",
            section: "\uC0B6\uC758 \uACC4\uC808",
            content: "\uBB36\uC784\xB7\uD480\uB9BC \uD544\uC218"
          },
          {
            id: "\uACC43",
            section: "\uC0B6\uC758 \uACC4\uC808",
            content: "\uC9C0\uAE08 10\uB144"
          },
          {
            id: "\uACC44",
            section: "\uC0B6\uC758 \uACC4\uC808",
            content: "\uB208 \uC5EC\uACA8\uBCFC \uD574"
          },
          {
            id: "\uACC45",
            section: "\uC0B6\uC758 \uACC4\uC808",
            content: "\uD560 \uC77C 3\uAC00\uC9C0"
          },
          {
            id: "\uB05D1",
            section: "\uB9C8\uC9C0\uB9C9 \uD55C\uB9C8\uB514",
            content: "\uD55C\uACC4\uB97C \uD2B9\uC131\uC73C\uB85C"
          },
          {
            id: "\uB05D2",
            section: "\uB9C8\uC9C0\uB9C9 \uD55C\uB9C8\uB514",
            content: "\uBC14\uB77C\uBCF4\uB294 \uB208"
          },
          {
            id: "\uB05D3",
            section: "\uB9C8\uC9C0\uB9C9 \uD55C\uB9C8\uB514",
            content: "\uB04C\uC5B4 \uC4F8 \uBA74"
          },
          {
            id: "\uB05D4",
            section: "\uB9C8\uC9C0\uB9C9 \uD55C\uB9C8\uB514",
            content: "\uC704\uB85C"
          }
        ],
        targetProfiles: {
          s1: {
            id: "s1",
            name: "\uC790\uAE30\uC774\uD574",
            segment: "S1 \uC790\uAE30\uC774\uD574 \uB3C4\uAD6C \uC218\uC694\uC790",
            source: "master-strategy.md 2-2 \uB9E4\uD2B8\uB9AD\uC2A4\xB72-4 \uCD5C\uC18C\uC548 (\uAC15\uC870 \uC2AC\uB86F: \uC0AC1 \uD6C5 \u2192 \uB05D1). S1\uC774 \uAE30\uBCF8 \uD504\uB85C\uD30C\uC77C\uC774\uB77C \uC139\uC158 \uC21C\uC11C\uB294 \uAE30\uBCF8\uAC12\uACFC \uAC19\uB2E4.",
            tone: {
              politeness: "\uAE30\uBCF8 \uBC34\uB4DC(\uC874\uB313\uB9D0 \uAE30\uBCF8, \uC5B4\uC694\uCCB4 40~45% \uD63C\uC6A9)",
              pronoun: "\uB2F9\uC2E0",
              emojiPolicy: "\uBCF8\uBB38 0\uD68C(\uD0C0\uC774\uD2C0 \uB77C\uC778\uB9CC \uD5C8\uC6A9)"
            },
            matrixSlots: ["\uC0AC1", "\uB05D1"],
            emphasis: [],
            sectionOrder: ["summary", "slot", "persona", "balance", "career", "danger", "time", "dynamics", "mind", "faq", "relation"],
            entry: "MBTI\uAC00 \uB05D\uB09C \uC790\uB9AC\uC5D0\uC11C, \uADFC\uAC70\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uC0AC\uC8FC"
          },
          s3: {
            id: "s3",
            name: "\uAE4A\uC774 \uD559\uC2B5",
            segment: "S3 \uAE4A\uC774 \uD559\uC2B5\uD615 \uC218\uC694\uC790",
            source: "master-strategy.md 2-2 \uB9E4\uD2B8\uB9AD\uC2A4\xB72-4 \uCD5C\uC18C\uC548 (\uAC15\uC870 \uC2AC\uB86F: \uACC41 \uACC4\uC0B0 \uADFC\uAC70 \u2192 \uC0AC2 \uC624\uD589). \uC0B6\uC758 \uACC4\uC808(Q07)\uACFC \uC5B4\uB5A4 \uC0AC\uB78C\uC778\uAC00\uC694?(Q03)\uB97C \uC55E\uB2F9\uAE30\uACE0 \uC544\uCF54\uB514\uC5B8 \uAE30\uBCF8 \uD3BC\uCE68\uC744 \uB454\uB2E4.",
            tone: {
              politeness: "\uC874\uC911\uC5B4 \uBE44\uC911 \uC0C1\uD5A5(\uADFC\uAC70 \uC124\uBA85\uCCB4), \uC5B4\uC694\uCCB4\uB294 \uAE30\uBCF8 \uBC34\uB4DC(40~45%) \uC774\uB0B4 \uC720\uC9C0",
              pronoun: "\uB2F9\uC2E0",
              emojiPolicy: "\uBCF8\uBB38 0\uD68C"
            },
            matrixSlots: ["\uACC41", "\uC0AC2"],
            emphasis: ["time", "persona"],
            sectionOrder: ["summary", "time", "persona", "slot", "balance", "career", "danger", "dynamics", "mind", "faq", "relation"],
            entry: "\uC65C \uC774 \uD574\uC11D\uC778\uC9C0, \uACC4\uC0B0\uBD80\uD130 \uBCF4\uC5EC\uB4DC\uB9BD\uB2C8\uB2E4"
          },
          s4: {
            id: "s4",
            name: "\uCEE4\uB9AC\uC5B4 \uC804\uD658",
            segment: "S4 \uCEE4\uB9AC\uC5B4 \uC804\uD658 \uACE0\uBBFC\uC790",
            source: "master-strategy.md 2-2 \uB9E4\uD2B8\uB9AD\uC2A4\xB72-4 \uCD5C\uC18C\uC548 (\uAC15\uC870 \uC2AC\uB86F: \uC7AC1~\uC7AC7 \uC7AC\uBB3C\xB7\uC9C1\uC5C5 \u2192 \uACC4 \uC2DC\uAC04). \uC5B4\uB5A4 \uC77C\uC774 \uC5B4\uC6B8\uB9AC\uB098\uC694?(Q05)\uC640 \uC2DC\uAC04\uC758 \uD750\uB984\uC740?(Q07)\uB97C \uC55E\uB2F9\uAE30\uACE0 \uC544\uCF54\uB514\uC5B8 \uAE30\uBCF8 \uD3BC\uCE68\uC744 \uB454\uB2E4.",
            tone: {
              politeness: "\uAE30\uBCF8 \uBC34\uB4DC(\uC5B4\uC694\uCCB4 40~45%) + \uCC98\uBC29\uD615 \uBB38\uC7A5(\uC0C1\uD0DC \uB9AC\uB4DC \uC120\uD589)",
              pronoun: "\uB2F9\uC2E0",
              emojiPolicy: "\uBCF8\uBB38 0\uD68C"
            },
            matrixSlots: ["\uC7AC1~\uC7AC7", "\uACC4"],
            emphasis: ["career", "time"],
            sectionOrder: ["summary", "career", "time", "slot", "persona", "balance", "danger", "dynamics", "mind", "faq", "relation"],
            entry: "\uC774\uC9C1\xB7\uC790\uC601 \uD310\uB2E8\uC5D0 \uC4F0\uB294 \uC0AC\uC8FC \uADFC\uAC70"
          }
        },
        stems: {
          \u7532: {
            name: "\uAC11\uBAA9 \u2014 \uD070 \uB098\uBB34",
            A: {
              \uC0AC1: {
                text: "\uB2F9\uC2E0\uC740 \uD070 \uB098\uBB34\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.GA.001"
                ]
              },
              \uC0AC2: {
                text: "\uC0C8\uB85C\uC6B4 \uAC83\uC744 \uD5A5\uD574 \uACC4\uC18D \uC790\uB77C\uACE0, \uC544\uBB34\uB3C4 \uAC00\uC9C0 \uC54A\uC740 \uAE38\uC744 \uBA3C\uC800 \uB0B4\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC55E\uC744 \uB0B4\uB2E4\uBCF4\uACE0 \uD310\uC744 \uC9DC\uB294 \uB370 \uB2A5\uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.002"
                ]
              },
              \uC0AC3: {
                text: "\uACC1\uC5D0 \uC788\uC73C\uBA74 \uAE30\uB308 \uC218 \uC788\uB294 \uC0AC\uB78C\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC21C\uD558\uACE0 \uC545\uC758\uAC00 \uC5C6\uB294\uB370, \uD55C\uBC88 \uC815\uD55C \uAC83\uC740 \uC27D\uAC8C \uAD7D\uD788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.002"
                ]
              },
              \uC0AC4: {
                text: "\uC0AC\uB78C\uC744 \uD488\uACE0 \uD568\uAED8 \uD0A4\uC6CC \uB0B4\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD63C\uC790 \uD06C\uB294 \uB098\uBB34\uAC00 \uC544\uB2C8\uB77C \uADF8\uB298\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uB098\uBB34\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.002"
                ]
              },
              \uC77C1: {
                text: "\uAE38\uC744 \uCC98\uC74C \uB0B4\uACE0, \uC0AC\uB78C\uC744 \uC774\uB04C\uACE0 \uD0A4\uC6B0\uB294 \uD798\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.001",
                  "R2.GA.003"
                ]
              },
              \uC7AC6: {
                text: "\uBFCC\uB9AC\uB97C \uB0B4\uB824\uC57C \uC5F4\uB9E4\uAC00 \uB9FA\uD788\uB4EF, \uD55C \uC790\uB9AC\uB97C \uAE4A\uAC8C \uC9C0\uD0AC \uB54C \uB3C8\uC774 \uC313\uC785\uB2C8\uB2E4. \uC62E\uACA8 \uB2E4\uB2D0\uC218\uB85D \uD769\uC5B4\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.020",
                  "R2.GA.080"
                ]
              },
              \uC5F01: {
                text: "\uD070 \uB098\uBB34\uB294 \uD55C\uBC88 \uBFCC\uB9AC\uB0B4\uB9B0 \uB545\uC744 \uB5A0\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uD55C\uBC88 \uB9C8\uC74C\uC744 \uC900 \uC0AC\uB78C\uC744 \uB05D\uAE4C\uC9C0 \uCC45\uC784\uC9C0\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uC624\uB798 \uBFCC\uB9AC\uB0B4\uB9B4 \uC218 \uC788\uB294 \uB113\uACE0 \uB2E8\uB2E8\uD55C \uACC1\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.080",
                  "R2.GA.021"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD070 \uB545(\uAC70\uB300\uD55C \uC0B0\uB9E5)\uC774 \uB4E4\uC5B4\uC62C \uB54C. \uD070 \uB098\uBB34\uAC00 \uB458\uC774\uBA74 \uC791\uC740 \uB545\uC774 \uC640\uC11C \uD558\uB098\uB97C \uC815\uB9AC\uD560 \uB54C.",
                evidence: [
                  "R2.GA.021",
                  "R2.GA.060"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uACE0\uC9D1 \u2192 \uD55C\uBC88 \uBFCC\uB9AC\uB0B4\uB9AC\uBA74 \uD754\uB4E4\uB9AC\uC9C0 \uC54A\uB294 \uD798 / \uC774\uC5B4 \uC628 \uAC83\uC744 \uD0A4\uC6B0\uB294 \uD798",
                evidence: [
                  "R2.GA.002",
                  "R2.GA.083"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uAD50\uC721, \uAC74\uCD95, \uC0AC\uB78C\uC744 \uC0C1\uB300\uD558\uB294 \uC77C, \uCD9C\uD310, \uC5B8\uB860, \uBB38\uD559, \uC12C\uC720, \uC885\uC774.",
                evidence: [
                  "R2.GA.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uAC00",
                condition: "\uD070 \uB545 \uC788\uC74C",
                slots: [
                  "\uC7AC1",
                  "\uC77C3"
                ],
                diagnosis: "\uB113\uC740 \uB545\uC5D0 \uC81C\uB300\uB85C \uBFCC\uB9AC\uB97C \uB0B4\uB9B0 \uB098\uBB34\uC785\uB2C8\uB2E4. \uD55C \uC790\uB9AC\uB97C \uC815\uD558\uBA74 \uADF8\uACF3\uC744 \uD06C\uAC8C \uD0A4\uC6CC \uB0C5\uB2C8\uB2E4.",
                prescription: "\uC815\uD55C \uC790\uB9AC\uB97C \uB113\uD788\uB294 \uCABD\uC73C\uB85C \uD798\uC744 \uC4F0\uC138\uC694.",
                evidence: [
                  "R2.GA.072"
                ],
                source: [
                  "R2.GA.072"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uB098",
                condition: "\uD070 \uB545 \uC788\uC74C + \uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uC7AC3"
                ],
                diagnosis: "\uB545\uC740 \uB113\uC740\uB370 \uC801\uC154 \uC904 \uBB3C\uC774 \uC595\uC544, \uC77C\uAD70 \uAC83\uC774 \uC0DD\uAC01\uB9CC\uD07C \uBD88\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC9C0\uAE08\uC740 \uAE30\uBC18\uC744 \uB2E4\uC838 \uB450\uB294 \uB54C\uC785\uB2C8\uB2E4. \uBB3C\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C \uC774 \uB545\uC740 \uD06C\uAC8C \uC5F4\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.072"
                ],
                source: [
                  "R2.GA.072"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uB2E4",
                condition: "\uC791\uC740 \uB545\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC5F06"
                ],
                diagnosis: "\uC791\uC740 \uB545\uC5D0 \uD070 \uB098\uBB34\uAC00 \uC11C \uC788\uC2B5\uB2C8\uB2E4. \uC790\uB784\uC218\uB85D \uBC1C\uBC11\uC774 \uC881\uC544\uC9C0\uACE0, \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uC790\uB9AC\uBD80\uD130 \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4.",
                prescription: "\uC790\uB77C\uB294 \uB9CC\uD07C \uB545\uC744 \uB113\uD788\uC138\uC694. \uC9C0\uAE08 \uC790\uB9AC \uC606\uC5D0 \uB354 \uD070 \uD130\uB97C \uB9C8\uB828\uD574 \uB450\uB294 \uAC83\uC774 \uB9DE\uB294 \uC21C\uC11C\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.023"
                ],
                source: [
                  "R2.GA.023"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uB77C",
                condition: "\uB545 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC1",
                  "\uC7AC7"
                ],
                diagnosis: "\uBFCC\uB9AC\uB0B4\uB9B4 \uB545 \uC5C6\uC774 \uD0DC\uC5B4\uB09C \uD070 \uB098\uBB34\uC785\uB2C8\uB2E4. \uB298 \uB354 \uB098\uC740 \uC790\uB9AC\uB97C \uCC3E\uC544 \uB9C8\uC74C\uC774 \uC6C0\uC9C1\uC774\uACE0, \uAC00\uC9C4 \uAC83\uBCF4\uB2E4 \uAC00\uC9C8 \uAC83\uC744 \uBA3C\uC800 \uBD05\uB2C8\uB2E4.",
                prescription: "\uC0C8 \uC790\uB9AC\uB97C \uCC3E\uAE30\uBCF4\uB2E4 \uCC98\uC74C \uBFCC\uB9AC\uB0B4\uB9B0 \uC790\uB9AC\uB97C \uB05D\uAE4C\uC9C0 \uD0A4\uC6B0\uC138\uC694. \uB545\uACFC \uD130, \uC9D3\uB294 \uC77C\uC774 \uC7AC\uBB3C\uC774 \uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.024",
                  "R2.GA.080"
                ],
                source: [
                  "R2.GA.024",
                  "R2.GA.080"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uB9C8",
                condition: "\uB545 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uBFCC\uB9AC\uB0B4\uB9B4 \uACF3\uC774 \uB9CE\uC544 \uD55C\uACF3\uC5D0 \uC624\uB798 \uBA38\uBB3C\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB545\uC774 \uB9CE\uC73C\uBA74 \uB098\uBB34\uB97C \uB354 \uC2EC\uC73C\uBA74 \uB429\uB2C8\uB2E4. \uC0AC\uB78C\uC744 \uAE30\uB974\uACE0, \uD55C\uACF3\uC744 \uAC70\uC810\uC73C\uB85C \uC0BC\uC544 \uAC74\uBB3C\uC744 \uC62C\uB9AC\uC138\uC694.",
                evidence: [
                  "R2.GA.022"
                ],
                source: [
                  "R2.GA.022"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uBC14",
                condition: "\uB545 \uC788\uC74C + \uBB3C \uC5C6\uC74C (\uBA54\uB9C8\uB978 \uB545)",
                slots: [
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uB545\uC740 \uC788\uB294\uB370 \uBA54\uB9D0\uB77C \uC788\uC2B5\uB2C8\uB2E4. \uC560\uC368 \uC77C\uAD88\uB3C4 \uAC70\uB450\uB294 \uAC8C \uC801\uC5B4 \uC790\uAFB8 \uB2E4\uB978 \uC790\uB9AC\uB97C \uCC3E\uAC8C \uB429\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC740 \uBC14\uAE65\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAD6D\uACBD \uBC16\uC758 \uC77C, \uC678\uAD6D\uACFC \uB2FF\uC740 \uC77C\uD130\uAC00 \uC774 \uB545\uC744 \uC801\uC2ED\uB2C8\uB2E4. \uC717\uC0AC\uB78C\uC758 \uB3C4\uC6C0\uB3C4 \uBB3C\uC774 \uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.026"
                ],
                source: [
                  "R2.GA.026"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uAC111-\uBC14\u2032",
                condition: "\uC704 \uAC00\uC9C0\uC778\uB370 \uC544\uB798 \uAE00\uC790\uC5D0 \uC2E0\xB7\uC9C4 \uC788\uC74C",
                slots: [],
                diagnosis: "\uBA54\uB9C8\uB978 \uB545\uC73C\uB85C \uBCF4\uC9C0 \uC54A\uB294\uB2E4. \uB545\uC18D\uC5D0\uC11C \uBB3C\uC744 \uB04C\uC5B4\uC62C\uB9B0\uB2E4.",
                prescription: "\uAC111-\uB098\uB85C \uCC98\uB9AC.",
                evidence: [
                  "R2.GA.027"
                ],
                note: "\uC2AC\uB86F \uC5C6\uC74C(\uC6D0\uBB38 \u2014). \uD310\uC815 \uBD84\uAE30\uB2E4.",
                source: [
                  "R2.GA.027"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798, \uBC30\uC6C0\uACFC \uB3C4\uC6C0",
                code: "\uAC112-\uAC00",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uC790\uB77C\uB294 \uB370 \uD544\uC694\uD55C \uBB3C\uC774 \uC595\uC544, \uAC00\uC9C4 \uC7AC\uB2A5\uB9CC\uD07C \uCEE4 \uB098\uAC00\uAE30\uAC00 \uC27D\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC0C8 \uBB3C\uC744 \uCC3E\uC544 \uC77C\uD130\uB97C \uC62E\uACBC\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC740 \uBC14\uAE65\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uC678\uC640 \uC774\uC5B4\uC9C4 \uC77C, \uC678\uAD6D\uACFC \uB2FF\uC740 \uC77C\uD130\uAC00 \uB2F9\uC2E0\uC744 \uD0A4\uC6C1\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.030"
                ],
                source: [
                  "R2.GA.030"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798, \uBC30\uC6C0\uACFC \uB3C4\uC6C0",
                code: "\uAC112-\uB098",
                condition: "\uC791\uC740 \uBB3C(\uC2DC\uB0C7\uBB3C)\uB9CC \uC788\uC74C",
                slots: [
                  "\uC77C4"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uC5D0 \uAE30\uB300\uC5B4 \uC790\uB77C\uB2E4 \uBCF4\uB2C8 \uAE08\uC138 \uBAA9\uC774 \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uACC4\uC18D \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uAE08\uB9E5\uC758 \uC77C, \uACE7 \uBC95\xB7\uAE08\uC735\xB7\uAE30\uC220\uCC98\uB7FC \uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.GA.031"
                ],
                source: [
                  "R2.GA.031"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798, \uBC30\uC6C0\uACFC \uB3C4\uC6C0",
                code: "\uAC112-\uB2E4",
                condition: "\uBB3C \uB9CE\uACE0 \uB545 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C3",
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C\uC740 \uB118\uCE58\uB294\uB370 \uB514\uB51C \uB545\uC774 \uC5C6\uC5B4 \uB5A0\uB2E4\uB2C8\uB294 \uB098\uBB34\uC785\uB2C8\uB2E4. \uC77C\uB3C4 \uC790\uB9AC\uB3C4 \uC624\uB798 \uBA38\uBB3C\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9C9\uC744 \uB545\uC744 \uCC3E\uC73C\uC138\uC694. \uB545\uACFC \uD130\uC5D0 \uB2FF\uC740 \uC77C, \uD55C\uACF3\uC5D0 \uBA38\uBB34\uB294 \uC120\uD0DD\uC774 \uB2F9\uC2E0\uC744 \uC138\uC6C1\uB2C8\uB2E4. \uADF8\uAC8C \uC5B4\uB835\uB2E4\uBA74 \uBC14\uB2E4 \uAC74\uB108 \uC0C8 \uB545\uC774 \uB2F5\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.032",
                  "R2.GA.076"
                ],
                source: [
                  "R2.GA.032",
                  "R2.GA.076"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798, \uBC30\uC6C0\uACFC \uB3C4\uC6C0",
                code: "\uAC112-\uB77C",
                condition: "\uBB3C\uC774 \uD750\uB824\uC9D0",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uBB3C\uC774 \uD750\uB824\uC838 \uBFCC\uB9AC\uAC00 \uC228 \uC26C\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uC560\uC4F4 \uB9CC\uD07C \uC790\uB77C\uC9C0 \uC54A\uB294 \uB2F5\uB2F5\uD568\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4: \uBB3C\uC774 \uB9CE\uC544\uC11C\uBA74 \uBC14\uAE65\uC73C\uB85C \uD758\uB824\uBCF4\uB0B4\uB294 \uC77C, \uBB3C\uC774 \uC801\uC5B4\uC11C\uBA74 \uAE08\uB9E5\uC758 \uC77C.",
                evidence: [
                  "R2.GA.033"
                ],
                note: "1\uCE35 \uD0C1\uC218",
                source: [
                  "R2.GA.033"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uAC113-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uD574\uB97C \uBC1B\uC544 \uAF43\uC744 \uD53C\uC6B0\uB294 \uB098\uBB34\uC785\uB2C8\uB2E4. \uBC30\uC6B4 \uAC83\uC774 \uACB0\uACFC\uBB3C\uC774 \uB418\uC5B4 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uC778\uC815\uBC1B\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBC30\uC6B0\uACE0 \uC313\uC740 \uAC83\uC744 \uAE00\uACFC \uB9D0\uB85C \uB0B4\uB193\uC73C\uC138\uC694. \uD559\uBB38, \uCD9C\uD310, \uAC15\uC5F0\uCC98\uB7FC \uB4DC\uB7EC\uB0B4\uB294 \uC77C\uC5D0\uC11C \uAF43\uC774 \uD54D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.012",
                  "R2.GA.070"
                ],
                source: [
                  "R2.GA.012",
                  "R2.GA.070"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uAC113-\uB098",
                condition: "\uB4F1\uBD88\uB9CC \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uAF43\uC740 \uD53C\uB294\uB370 \uC791\uAC8C \uD54D\uB2C8\uB2E4.",
                prescription: "\uD070 \uBB34\uB300 \uD55C \uBC88\uBCF4\uB2E4 \uC791\uC740 \uACB0\uACFC\uBB3C\uC744 \uC790\uC8FC \uB0B4\uB193\uC73C\uC138\uC694.",
                evidence: [
                  "R2.GA.043",
                  "R2.GA.071"
                ],
                source: [
                  "R2.GA.043",
                  "R2.GA.071"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uAC113-\uB2E4",
                condition: "\uBD88 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC7AC2"
                ],
                diagnosis: "\uAF43\uC744 \uD53C\uC6B8 \uBE5B\uC774 \uC5C6\uC5B4 \uACB0\uC2E4\uC774 \uB2A6\uAC8C \uC635\uB2C8\uB2E4. \uAC89\uC73C\uB85C \uBCF4\uC774\uB294 \uAC83\uBCF4\uB2E4 \uC18D\uC774 \uBE44\uC5B4 \uBCF4\uC77C\uAE4C \uB9C8\uC74C\uC774 \uC4F0\uC785\uB2C8\uB2E4.",
                prescription: "\uACB0\uACFC\uB97C \uC11C\uB450\uB974\uC9C0 \uB9D0\uACE0 \uC548\uC744 \uCC44\uC6B0\uC138\uC694. \uBE5B\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C \uD55C \uBC88\uC5D0 \uAF43\uC774 \uD54D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.041",
                  "R2.GA.081"
                ],
                source: [
                  "R2.GA.041",
                  "R2.GA.081"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uAC113-\uB77C",
                condition: "\uBD88\uC774 \uC544\uB798 \uAE00\uC790\uC5D0\uB9CC \uC788\uC74C",
                slots: [
                  "\uC77C2",
                  "\uC77C3"
                ],
                diagnosis: "\uBE5B\uC774 \uB545\uC18D\uC5D0\uB9CC \uC788\uC5B4, \uD070 \uBB34\uB300\uBCF4\uB2E4 \uBC14\uAE65\uC5D0\uC11C \uC790\uAE30 \uAE38\uC744 \uB0B4\uB294 \uCABD\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC815\uD574\uC9C4 \uD2C0 \uBC16, \uC2A4\uC2A4\uB85C \uB9CC\uB4E0 \uD310\uC5D0\uC11C \uC2E4\uB825\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.042"
                ],
                source: [
                  "R2.GA.042"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uAC113-\uB9C8",
                condition: "\uBD88 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uBD88\uC774 \uC138\uC11C \uBB3C\uC774 \uB9C8\uB974\uACE0 \uB9C8\uC74C\uC774 \uAE09\uD574\uC9D1\uB2C8\uB2E4. \uC77C\uC744 \uC55E\uB2F9\uAE30\uB2E4 \uADF8\uB974\uCE58\uB294 \uC77C\uC774 \uC0DD\uAE41\uB2C8\uB2E4.",
                prescription: "\uBB3C \uAC00\uAE4C\uC774\uC5D0 \uBA38\uBB34\uC138\uC694. \uBB3C\uC774 \uB9CE\uC740 \uACF3, \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C, \uCC28\uBD84\uD55C \uACC1\uC774 \uB2F9\uC2E0\uC744 \uC2DD\uD799\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.040"
                ],
                source: [
                  "R2.GA.040"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uAC114-\uAC00",
                condition: "\uD070 \uCE7C(\uCEE4\uB2E4\uB780 \uAE08\uB9E5) \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uD070 \uCE7C\uC744 \uC958 \uC218 \uC788\uB294 \uD070 \uC190\uC7A1\uC774\uC785\uB2C8\uB2E4. \uD310\uC744 \uC815\uB9AC\uD558\uACE0 \uC0AC\uB78C\uC744 \uC774\uB044\uB294 \uC790\uB9AC\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC774\uB044\uB294 \uC790\uB9AC, \uC9D3\uACE0 \uC138\uC6B0\uB294 \uC77C\uC5D0\uC11C \uC774\uB984\uC774 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.074"
                ],
                source: [
                  "R2.GA.074"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uAC114-\uB098",
                condition: "\uC791\uC740 \uCE7C(\uC138\uACF5\uB41C \uBCF4\uC11D) \uC788\uC74C",
                slots: [
                  "\uC77C2",
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uC190\uC7A1\uC774\uC5D0 \uC791\uC740 \uCE7C\uC774 \uB2EC\uB824 \uCC3D\uC774 \uB429\uB2C8\uB2E4. \uBA40\uB9AC \uC788\uB294 \uC77C\uC740 \uC798 \uD574\uB0B4\uB294\uB370 \uAC00\uAE4C\uC6B4 \uC77C\uC5D4 \uC190\uC774 \uB35C \uAC11\uB2C8\uB2E4.",
                prescription: "\uD63C\uC790\uBCF4\uB2E4 \uC870\uC9C1 \uC548\uC5D0\uC11C, \uBA40\uB9AC \uBCF4\uB294 \uC5ED\uD560\uC744 \uB9E1\uC744 \uB54C \uD798\uC774 \uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.075"
                ],
                source: [
                  "R2.GA.075"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uAC114-\uB2E4",
                condition: "\uAE08 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uB2E4\uB4EC\uB294 \uCE7C\uC774 \uB9CE\uC544 \uC608\uBBFC\uD574\uC9C0\uACE0, \uACB0\uC815\uC744 \uC55E\uB450\uACE0 \uC624\uB798 \uB9DD\uC124\uC785\uB2C8\uB2E4.",
                prescription: "\uB0A0\uC744 \uC138\uC6B0\uAE30\uBCF4\uB2E4 \uBB3C\uCC98\uB7FC \uAE30\uB2E4\uB9AC\uACE0 \uD488\uB294 \uCABD\uC774 \uB2F9\uC2E0\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.051"
                ],
                source: [
                  "R2.GA.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uAC114-\uB77C",
                condition: "\uAE08 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C4"
                ],
                diagnosis: "\uB2E4\uB4EC\uC5B4 \uC904 \uC190\uAE38 \uC5C6\uC774 \uC790\uB77C \uC790\uC720\uB86D\uACE0, \uC815\uD574\uC9C4 \uC21C\uC11C\uC5D0 \uC5BD\uB9E4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC2A4\uC2A4\uB85C \uAE30\uC900\uC744 \uC138\uC6B0\uC138\uC694. \uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C(\uBC95\xB7\uAE08\uC735\xB7\uAE30\uC220)\uC744 \uACC1\uC5D0 \uB450\uBA74 \uD070 \uB098\uBB34\uAC00 \uC7AC\uBAA9\uC774 \uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.053"
                ],
                source: [
                  "R2.GA.053"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uAC00",
                condition: "\uD070 \uB098\uBB34 \uB458",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uACC1\uC5D0 \uAC19\uC740 \uD0A4\uC758 \uB098\uBB34\uAC00 \uC11C \uC788\uC5B4 \uB298 \uACAC\uC8FC\uAC8C \uB418\uACE0 \uB2F5\uB2F5\uD569\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB098\uBB34\uAC00 \uC815\uB9AC\uB418\uB294 \uB54C\uC5D0 \uC790\uB9AC\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4. \uC791\uC740 \uB545\uC774 \uB4E4\uC5B4\uC624\uB294 \uD574\uB97C \uC900\uBE44\uD558\uC138\uC694.",
                evidence: [
                  "R2.GA.060"
                ],
                source: [
                  "R2.GA.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uB098",
                condition: "\uD070 \uB098\uBB34 \uB458 + \uD070 \uCE7C \uD558\uB098",
                slots: [
                  "\uC77C6"
                ],
                diagnosis: "\uCE7C \uD558\uB098\uC5D0 \uC190\uC7A1\uC774\uAC00 \uB458\uC774\uB77C, \uB9E1\uC740 \uC77C\uC5D0\uC11C \uB9D0\uC774 \uB9CE\uC544\uC9C0\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC5ED\uD560\uACFC \uAD8C\uD55C\uC744 \uCC98\uC74C\uBD80\uD130 \uBB38\uC11C\uB85C \uB098\uB204\uC138\uC694.",
                evidence: [
                  "R2.GA.061"
                ],
                source: [
                  "R2.GA.061"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uB2E4",
                condition: "\uD070 \uB098\uBB34 \uC14B \uC774\uC0C1 (\uC232)",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uBA40\uB9AC\uC11C \uBCF4\uBA74 \uC6B0\uAC70\uC9C4 \uC232\uC778\uB370, \uC18D\uC740 \uBCD5\uC774 \uB4E4\uC9C0 \uC54A\uC544 \uC0DD\uAC01\uC774 \uB9CE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB113\uC740 \uB545\uC774 \uD544\uC694\uD55C \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uB545\uACFC \uD130\uB97C \uB113\uD788\uB294 \uC77C\uC5D0 \uD798\uC744 \uC4F0\uC138\uC694.",
                evidence: [
                  "R2.GA.062"
                ],
                source: [
                  "R2.GA.062"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uB77C",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uB369\uAD74\uC774 \uB098\uBB34\uB97C \uD0C0\uACE0 \uC624\uB974\uBA70 \uAD8C\uD55C\uC744 \uB04C\uC5B4\uC635\uB2C8\uB2E4. \uACC1\uC758 \uC0AC\uB78C\uC774 \uC790\uB9AC\uC640 \uAE30\uD68C\uB97C \uBB3C\uC5B4\uB2E4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uACC1\uC758 \uC0AC\uB78C\uACFC \uACAC\uC8FC\uC9C0 \uB9D0\uACE0 \uD568\uAED8 \uC624\uB974\uC138\uC694.",
                evidence: [
                  "R2.GA.063"
                ],
                source: [
                  "R2.GA.063"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uB9C8",
                condition: "\uD478\uB978 \uB369\uAD74\uC774 \uD0DC\uC5B4\uB09C \uD574\uC5D0 \uC788\uC74C",
                slots: [
                  "\uC77C2",
                  "\uC77C7"
                ],
                diagnosis: "\uAD6D\uAC00\uC2DC\uD5D8\uC73C\uB85C \uB530\uB77C\uC624\uB294 \uC790\uACA9\uC774 \uB2F9\uC2E0\uC758 \uD798\uC774 \uB429\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00 \uC790\uACA9\uC744 \uD558\uB098 \uC950\uC138\uC694.",
                evidence: [
                  "R2.GA.064"
                ],
                source: [
                  "R2.GA.064"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uBC14",
                condition: "\uB098\uBB34 \uB9CE\uC74C",
                slots: [
                  "\uC77C6",
                  "\uC7AC7"
                ],
                diagnosis: "\uB098\uBB34\uAC00 \uC5BD\uD600 \uC7A1\uBAA9\uCC98\uB7FC \uC790\uB77C\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAE08\uB9E5\uC758 \uC77C\uB85C \uC18E\uC544 \uB0B4\uACE0, \uBC88 \uAC83\uC740 \uB545\uACFC \uD130\uB85C \uBB36\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.GA.065"
                ],
                source: [
                  "R2.GA.065"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uACC1\uC758 \uACBD\uC7C1\uACFC \uB3C4\uC6C0",
                code: "\uAC115-\uC0AC",
                condition: "\uC544\uB798 \uAE00\uC790\uC5D0 \uB098\uBB34 \uBFCC\uB9AC \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uC704\uB85C\uB294 \uD06C\uAC8C \uC790\uB790\uB294\uB370 \uBC1C\uBC11\uC758 \uBFCC\uB9AC\uAC00 \uC595\uC2B5\uB2C8\uB2E4. \uD070 \uC790\uB9AC\uC640 \uD070\uB3C8\uC774 \uC640\uB3C4 \uAC10\uB2F9\uC774 \uBC84\uAC81\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBFCC\uB9AC\uAC00 \uAE4A\uC5B4\uC9C0\uB294 \uB54C\uB97C \uAE30\uB2E4\uB824 \uD070 \uAC83\uC744 \uBC1B\uC73C\uC138\uC694. \uADF8\uC804\uC5D0\uB294 \uC791\uAC8C \uD655\uC2E4\uD788 \uC313\uC73C\uC138\uC694.",
                evidence: [
                  "R2.GA.066"
                ],
                source: [
                  "R2.GA.066"
                ]
              },
              {
                stage: 6,
                stageName: "\uBB36\uC784",
                code: "\uAC116-\uAC00",
                condition: "\uC791\uC740 \uB545\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uC791\uC740 \uB545\uC5D0 \uBB36\uC778 \uD070 \uB098\uBB34\uC785\uB2C8\uB2E4. \uC5ED\uD560\uACFC \uC790\uB9AC\uAC00 \uB2F9\uC2E0\uC744 \uBD99\uC7A1\uC544 \uAC00\uC9C4 \uD798\uC744 \uB2E4 \uC4F0\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uAC00 \uC815\uD574\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uC804\uAE4C\uC9C0\uB294 \uBB36\uC778 \uADF8 \uC77C\uC744 \uB2F9\uC2E0\uC758 \uC77C\uB85C \uC0BC\uC73C\uC138\uC694.",
                evidence: [
                  "R2.GA.073"
                ],
                note: "1\uCE35 \xA77",
                source: [
                  "R2.GA.073"
                ]
              },
              {
                stage: 7,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                code: "\uAC117-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D3"
                ],
                diagnosis: "\uD070 \uB098\uBB34\uB294 \uC624\uB798 \uC790\uB77C\uC57C \uC544\uB984\uB4DC\uB9AC\uAC00 \uB429\uB2C8\uB2E4. \uC717\uC138\uB300\uAC00 \uC77C\uAD70 \uC77C\uACFC \uD130\uB97C \uC774\uC5B4 \uD0A4\uC6B8 \uB54C \uD798\uC774 \uB0A9\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.GA.083"
                ],
                source: [
                  "R2.GA.083"
                ]
              }
            ],
            C: [
              {
                code: "\uAC11\uC6B4-\uAC00",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43",
                  "\uC7AC3"
                ],
                sentence: "\uD070 \uB545\uC774 \uB4E4\uC5B4\uC640 \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC77C\uACFC \uACC1\uC758 \uC790\uB9AC\uAC00 \uD568\uAED8 \uC815\uD574\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.021",
                  "R2.GA.076"
                ]
              },
              {
                code: "\uAC11\uC6B4-\uB098",
                incoming: "\uC791\uC740 \uB545 (\uD070 \uB098\uBB34 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uB098\uBB34\uAC00 \uC815\uB9AC\uB418\uBA70 \uB2F9\uC2E0\uC758 \uC790\uB9AC\uAC00 \uC5F4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.060"
                ]
              },
              {
                code: "\uAC11\uC6B4-\uB2E4",
                incoming: "\uBB3C (\uC6D0\uAD6D\uC5D0 \uBB3C \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC43"
                ],
                sentence: "\uBA54\uB9D0\uB790\uB358 \uB545\uC774 \uC816\uC5B4 \uC77C\uAD70 \uAC83\uC774 \uBD88\uC5B4\uB098\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.072",
                  "R2.GA.026"
                ]
              },
              {
                code: "\uAC11\uC6B4-\uB77C",
                incoming: "\uD0DC\uC591 (\uC6D0\uAD6D\uC5D0 \uBD88 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                sentence: "\uC624\uB798 \uC900\uBE44\uD55C \uAC83\uC774 \uAF43\uC744 \uD53C\uC6B0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.041"
                ]
              },
              {
                code: "\uAC11\uC6B4-\uB9C8",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uB098\uBB34 \uBFCC\uB9AC\uB85C \uBAA8\uC784",
                slots: [
                  "\uACC43"
                ],
                sentence: "\uBC1C\uBC11\uC774 \uB2E8\uB2E8\uD574\uC838 \uD070 \uC790\uB9AC\uB97C \uAC10\uB2F9\uD558\uAC8C \uB418\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.066"
                ]
              },
              {
                code: "\uAC11\uC6B4-\uBC14",
                incoming: "\uD070 \uB098\uBB34\uB098 \uC791\uC740 \uB545\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC5EC \uC788\uB358 \uC790\uB9AC\uAC00 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GA.073"
                ],
                note: "1\uCE35 \xA77"
              },
              {
                code: "\uAC11\uC6B4-\uC0AC",
                incoming: "\uD0DC\uC591\uC774 \uD558\uB098 \uB354 \uC634 (\uC6D0\uAD6D\uC5D0 \uD0DC\uC591 \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                slotNote: "1\uCE35 \uD6C4\uBCF4(\uD574\uAC00 \uB458)",
                sentence: "\uBE5B\uC774 \uACB9\uCCD0 \uC624\uD788\uB824 \uD750\uB824\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uD558\uB098\uC5D0 \uC9D1\uC911\uD558\uC138\uC694.",
                evidence: [],
                note: "[\uD310\uC815 \uD544\uC694]"
              }
            ],
            D: [
              {
                item: "\uC774\uD63C\xB7\uBCC4\uAC70\xB7\uC8FC\uB9D0\uBD80\uBD80",
                evidence: [
                  "R2.GA.023"
                ]
              },
              {
                item: "\uB2E4\uB978 \uC774\uC131\uC744 \uCC3E\uC74C",
                evidence: [
                  "R2.GA.025"
                ]
              },
              {
                item: "\uC9C8\uBCD1\xB7\uD608\uC555\xB7\uC6B0\uC6B8",
                evidence: [
                  "R2.GA.040",
                  "R2.GA.051"
                ]
              },
              {
                item: "\uAD50\uD1B5\uC0AC\uACE0\xB7\uC218\uC220",
                evidence: [
                  "R2.GA.052"
                ]
              },
              {
                item: "\uAC74\uAC15 \uD68C\uC0DD",
                evidence: [
                  "R2.GA.067"
                ]
              },
              {
                item: "\uC5EC\uC131 \uBB34\uAD00\uC758 \uB2E4\uC218 \uC778\uC5F0\xB7\uC131\uC9C1",
                evidence: [
                  "R2.GA.082"
                ]
              },
              {
                item: "\uC131\uC528 \uCC98\uBC29",
                evidence: [
                  "R2.GA.024"
                ]
              },
              {
                item: "\uC7AC\uC0B0 \uBA85\uC758 \uC870\uC815",
                evidence: [
                  "R2.GA.081"
                ]
              },
              {
                item: "\uB178\uB144 \uACE0\uB3C5",
                evidence: [
                  "R2.GA.004"
                ]
              }
            ]
          },
          \u5DF1: {
            name: "\uAE30\uD1A0 \u2014 \uAD6C\uD68D\uB418\uACE0 \uC0DD\uBA85\uC744 \uC0B4\uAC8C \uD558\uB294 \uB545",
            sourcePage: "PDF page 26-30 (6. \uAE30\uD1A0)",
            A: {
              \uC0AC1\uD615\uC0C1: {
                text: "\uB2F9\uC2E0\uC740 \uAD6C\uD68D\uB418\uACE0 \uC0DD\uBA85\uC744 \uC0B4\uAC8C \uD558\uB294 \uB545\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                source: [
                  "R2.GI.001"
                ]
              },
              \uC0AC2\uC131\uD5A5: {
                text: "\uACC1\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uBC1B\uC544\uB4E4\uC774\uACE0 \uAE38\uB7EC \uB0B4\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC2E0\uC911\uD558\uACE0 \uC548\uC815\uC801\uC774\uBA70, \uD55C\uBC88 \uB9FA\uC740 \uBBFF\uC74C\uC744 \uC624\uB798 \uC9C0\uD0B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.002"
                ]
              },
              \uC0AC3\uB0A8\uB4E4\uC774\uBCF4\uB294\uB098: {
                text: "\uB108\uADF8\uB7FD\uACE0 \uAC00\uC815\uC801\uC778 \uC0AC\uB78C\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uACC1\uC5D0 \uC788\uC73C\uBA74 \uB9C8\uC74C\uC774 \uB193\uC774\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.002"
                ]
              },
              \uC0AC4\uCE6D\uCC2C: {
                text: "\uAC00\uAE4C\uC6B4 \uAC83\uC744 \uC815\uC131\uAECF \uAC00\uAFD4 \uAF43\uD53C\uC6B0\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB2F9\uC2E0 \uC190\uC744 \uAC70\uCE5C \uC790\uB9AC\uB294 \uC0B4\uC544\uB0A9\uB2C8\uB2E4.",
                source: [
                  "R2.GI.001",
                  "R2.GI.010"
                ]
              },
              \uC77C1\uBB34\uAE30: {
                text: "\uC0AC\uB78C\uACFC \uC77C\uC744 \uAE38\uB7EC \uB0B4\uB294 \uD798, \uAC00\uAE4C\uC6B4 \uC790\uB9AC\uB97C \uAF43\uD53C\uC6B0\uB294 \uD798\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.003",
                  "R2.GI.010"
                ]
              },
              \uC7AC6\uB3C8\uC758\uC21C\uC11C: {
                text: "\uC815\uC6D0\uC740 \uC54C\uB9DE\uC740 \uD06C\uAE30\uC77C \uB54C \uAC00\uC7A5 \uD48D\uC131\uD569\uB2C8\uB2E4. \uAC10\uB2F9\uD560 \uC218 \uC788\uB294 \uB9CC\uD07C\uC744 \uB2E8\uB2E8\uD788 \uAC00\uAFC0 \uB54C \uC7AC\uBB3C\uC774 \uBA38\uBB45\uB2C8\uB2E4.",
                source: [
                  "R2.GI.004",
                  "R2.GI.082"
                ]
              },
              \uC5F01\uAD00\uACC4\uC120\uC5B8: {
                text: "\uC815\uC6D0\uC740 \uAF43\uB098\uBB34\uB97C \uD488\uC5B4 \uC0B4\uAC8C \uD558\uB294 \uB545\uC785\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uACC1\uC758 \uC0AC\uB78C\uC744 \uC0B4\uB730\uD788 \uD488\uACE0 \uAC00\uAFB8\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uB2F9\uC2E0\uC758 \uC815\uC6D0\uC5D0 \uC624\uB798 \uBFCC\uB9AC\uB0B4\uB9B4 \uC54C\uB9DE\uC740 \uAF43\uB098\uBB34 \uAC19\uC740 \uC0AC\uB78C\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                source: [
                  "R2.GI.001",
                  "R2.GI.020"
                ]
              },
              \uACB0\uD63C\uC870\uAC74: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD478\uB978 \uB369\uAD74\uC774 \uC2EC\uC5B4\uC9C8 \uB54C. \uD070 \uB098\uBB34\uC640 \uBB36\uC5EC \uC788\uC73C\uBA74 \uADF8 \uBB36\uC784\uC774 \uD480\uB9B4 \uB54C.",
                source: [
                  "R2.GI.020",
                  "1\uCE35 \xA77"
                ]
              },
              \uB05D\uC18C\uC7AC: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uAE38\uB7EC \uB0B4\uB294 \uD798 / \uC54C\uB9DE\uC740 \uD06C\uAE30\uB97C \uC544\uB294 \uC9C0\uD61C",
                source: [
                  "R2.GI.002",
                  "R2.GI.004"
                ]
              },
              \uC9C1\uC5C5\uACB0: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uC791\uC740 \uAD50\uC721(\uC720\uCE58\uC6D0~\uACE0\uAD50), \uC870\uACBD, \uB545\uC774 \uBA54\uB9C8\uB974\uBA74 \uC131\uC9C1.",
                source: [
                  "R2.GI.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uC815\uC6D0\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uAE301-\uAC00",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uC815\uC6D0\uC5D0 \uAF43\uB098\uBB34\uAC00 \uC2EC\uC5B4\uC9C4 \uB545\uC785\uB2C8\uB2E4. \uAC00\uAE4C\uC6B4 \uC0AC\uB78C\uACFC \uC790\uB9AC\uB97C \uD589\uBCF5\uD558\uAC8C \uAC00\uAFC9\uB2C8\uB2E4.",
                prescription: "\uC544\uC774\uB4E4\uC744 \uAC00\uB974\uCE58\uB294 \uC77C, \uD559\uAD50\uC640 \uB2FF\uC740 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uB369\uAD74\uC774 \uAE08\uB9E5\uC744 \uBD88\uB7EC\uC640 \uACF5\uC801\uC778 \uC790\uB9AC\uB85C\uB3C4 \uC774\uC5B4\uC9D1\uB2C8\uB2E4.",
                source: [
                  "R2.GI.021"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uC815\uC6D0\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uAE301-\uB098",
                condition: "\uD070 \uB098\uBB34\uC640 \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uC791\uC740 \uB545\uC5D0 \uD070 \uB098\uBB34\uAC00 \uBB36\uC5EC \uC788\uC2B5\uB2C8\uB2E4. \uB9E1\uC740 \uC790\uB9AC\uC640 \uC5ED\uD560\uC774 \uB2F9\uC2E0\uC744 \uBD99\uC7A1\uACE0, \uB098\uBB34\uAC00 \uC790\uB784\uC218\uB85D \uBC1C\uBC11\uC774 \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4.",
                prescription: "\uD070 \uC774\uB984\uC744 \uC887\uAE30\uBCF4\uB2E4 \uC54C\uB9DE\uC740 \uD06C\uAE30\uC758 \uC77C\uB85C \uBC14\uAFD4 \uC2EC\uC73C\uC138\uC694. \uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uAC00 \uC815\uD574\uC838 \uC788\uC73C\uB2C8 \uADF8\uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                source: [
                  "R2.GI.022",
                  "R2.GI.004"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uC815\uC6D0\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uAE301-\uB2E4",
                condition: "\uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C4"
                ],
                diagnosis: "\uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC2EC\uC5B4\uC9C0\uC9C0 \uC54A\uC740 \uC815\uC6D0\uC774\uB77C, \uD488\uC740 \uD798\uC744 \uC3DF\uC744 \uACF3\uC774 \uC815\uD574\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAC00\uAFC0 \uAC83\uC744 \uC815\uD558\uC138\uC694. \uC791\uC740 \uBC30\uC6C0\uD130, \uC815\uC6D0\uACFC \uACF5\uAC04\uC744 \uAC00\uAFB8\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.010",
                  "R2.GI.020"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uC815\uC6D0\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uAE301-\uB77C",
                condition: "\uB098\uBB34 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C6"
                ],
                diagnosis: "\uC2EC\uC5B4\uC9C4 \uB098\uBB34\uAC00 \uB108\uBB34 \uB9CE\uC544 \uB545\uC774 \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4. \uCC59\uAE38 \uAC83\uC774 \uB9CE\uC544 \uC815\uC791 \uB0B4 \uC790\uB9AC\uAC00 \uD754\uB4E4\uB9AC\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAE08\uB9E5\uC758 \uC77C\uB85C \uAC00\uC9C0\uB97C \uC815\uB9AC\uD558\uC138\uC694. \uC815\uB9AC\uD55C \uB9CC\uD07C \uB545\uC774 \uC0B4\uC544\uB0A9\uB2C8\uB2E4.",
                source: [
                  "R2.GI.085"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uAC00",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C + \uB098\uBB34 \uC788\uC74C",
                slots: [
                  "\uC7AC1"
                ],
                diagnosis: "\uC54C\uB9DE\uC740 \uBE44\uAC00 \uC815\uC6D0\uC744 \uC801\uC2ED\uB2C8\uB2E4. \uAC00\uAFB8\uB294 \uB9CC\uD07C \uAC70\uB450\uB294 \uAD6C\uC870\uC785\uB2C8\uB2E4.",
                prescription: "\u2014",
                source: [
                  "R2.GI.010",
                  "R2.GI.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uB098",
                condition: "\uBB3C \uC788\uC74C + \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uBB3C\uACFC \uD759\uB9CC \uC788\uC5B4 \uB545\uC774 \uD759\uD0D5\uC774 \uB429\uB2C8\uB2E4. \uB4E4\uC5B4\uC628 \uAC83\uC774 \uBA38\uBB3C\uC9C0 \uC54A\uACE0 \uD769\uC5B4\uC9D1\uB2C8\uB2E4.",
                prescription: "\uAF43\uB098\uBB34\uB97C \uC2EC\uB4EF \uBB34\uC5B8\uAC00\uB97C \uAE30\uB974\uB294 \uC77C\uC744 \uC2DC\uC791\uD558\uC138\uC694. \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C8 \uB54C \uC7AC\uBB3C\uB3C4 \uB9D1\uC544\uC9D1\uB2C8\uB2E4.",
                source: [
                  "R2.GI.030",
                  "R2.GI.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uB2E4",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218, \uB610\uB294 \uBB3C \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uC791\uC740 \uB451\uC5D0 \uD070\uBB3C\uC774 \uBC00\uB824\uC640 \uB451\uC774 \uBC84\uD2F0\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uB4E4\uC5B4\uC628 \uB9CC\uD07C \uC27D\uAC8C \uD769\uC5B4\uC9D1\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uC904\uC5EC \uC904 \uB4F1\uBD88\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uC7AC\uBB3C\uC744 \uC950\uACE0 \uC791\uC740 \uD130\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uADF8\uC804\uC5D0\uB294 \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C, \uAE08\uB9E5\uACFC \uBB3C\uC758 \uC77C, \uB9C8\uC74C\uC744 \uBC1D\uD788\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.011",
                  "R2.GI.031"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uB77C",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 + \uD070 \uB098\uBB34",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8"
                ],
                diagnosis: "\uD070\uBB3C\uC774 \uD070 \uB098\uBB34\uB97C \uD0A4\uC6B0\uBA74 \uC791\uC740 \uB545\uC774 \uB05D\uB0B4 \uBC84\uD2F0\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34 \uB300\uC2E0 \uC54C\uB9DE\uC740 \uD06C\uAE30\uC758 \uB098\uBB34\uB85C \uBC14\uAFD4 \uC2EC\uC73C\uC138\uC694.",
                source: [
                  "R2.GI.070"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uB9C8",
                condition: "\uBB3C \uC57D\uD568",
                slots: [
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C\uC774 \uC595\uC544 \uC815\uC6D0\uC774 \uC27D\uAC8C \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uAE08\uB9E5\uC758 \uC77C, \uACE7 \uAE30\uC900\uACFC \uAE30\uC220\uC758 \uC77C\uC774 \uC815\uC6D0\uC744 \uC801\uC2ED\uB2C8\uB2E4.",
                source: [
                  "R2.GI.050"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC815\uC6D0\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uAE302-\uBC14",
                condition: "\uC544\uB798 \uAE00\uC790\uC758 \uC816\uC740 \uD759\uC774 \uBB3C\uC744 \uB9CC\uB098 \uD750\uB824\uC9D0",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uB545 \uBC11\uC5D0\uC11C \uBB3C\uC774 \uD750\uB824\uC838 \uC560\uC4F4 \uB9CC\uD07C \uB0A8\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4(1\uCE35 \uD0C1\uC218 \uD574\uBC95).",
                source: [
                  "R2.GI.081",
                  "1\uCE35 \uD0C1\uC218"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uBCD5",
                code: "\uAE303-\uAC00",
                condition: "\uD0DC\uC591\uC774 \uC148",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uBCD5\uC774 \uB108\uBB34 \uC138\uC11C \uC815\uC6D0\uC758 \uAF43\uC774 \uB9C8\uB974\uACE0 \uAC70\uB458 \uAC83\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uBCF4\uC11D\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uACE0, \uADF8\uC804\uC5D0\uB294 \uAE08\uB9E5\uC758 \uC77C\uB85C \uBB3C\uC744 \uB300\uC138\uC694.",
                source: [
                  "R2.GI.040",
                  "R2.GI.012"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uBCD5",
                code: "\uAE303-\uB098",
                condition: "\uB4F1\uBD88 \uC788\uC74C",
                slots: [
                  "\uC5F03",
                  "\uACC44"
                ],
                diagnosis: "\uC815\uC6D0\uC744 \uBE44\uCD94\uB294 \uB2EC\uBE5B\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uAF43\uB098\uBB34\uAC00 \uC5C6\uC5B4\uB3C4 \uB4F1\uBD88\uC774 \uD070\uBB3C\uC744 \uB04C\uC5B4\uC640 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uB113\uC740 \uD638\uC218\uAC00 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uC7AC\uBB3C\uACFC \uACC1\uC758 \uC790\uB9AC\uAC00 \uD568\uAED8 \uC790\uB9AC\uB97C \uC7A1\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.041"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uC815\uC6D0\uC744 \uB2E4\uB4EC\uB294 \uC190",
                code: "\uAE304-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 + \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC77C2",
                  "\uC77C3"
                ],
                diagnosis: "\uB545\uC18D \uAE08\uB9E5\uC774 \uAF43\uB098\uBB34\uB97C \uBD88\uB7EC\uC640 \uC815\uC6D0\uC5D0 \uC2EC\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uC77C\uB85C \uC774\uC5B4\uC9C0\uB294 \uAE38\uC774 \uC788\uC9C0\uB9CC \uB3CC\uC544\uAC00\uB294 \uAE38\uC785\uB2C8\uB2E4. \uB2E8\uACC4\uB97C \uD558\uB098\uC529 \uBC1F\uC544 \uAC00\uB294 \uBC29\uC2DD\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uC815\uC6D0\uC744 \uB2E4\uB4EC\uB294 \uC190",
                code: "\uAE304-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D + \uD478\uB978 \uB369\uAD74",
                slots: [
                  "\uC77C2",
                  "\uC7AC1"
                ],
                diagnosis: "\uAF43\uB098\uBB34\uC5D0 \uB9DE\uB294 \uC804\uC9C0\uAC00\uC704\uB97C \uC954 \uC815\uC6D0\uC0AC\uC785\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00, \uACF5\uC801\uC778 \uC77C\uC5D0\uC11C \uC7AC\uBB3C\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
                source: [
                  "R2.GI.052"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uAE305-\uAC00",
                condition: "\uC791\uC740 \uB545 \uB458",
                slots: [
                  "\uC77C3",
                  "\uC7AC7"
                ],
                diagnosis: "\uC815\uC6D0\uC774 \uB458\uC774\uB77C \uB450 \uAC00\uC9C0 \uC77C, \uB450 \uAC1C\uC758 \uD130\uB97C \uD568\uAED8 \uAFB8\uB9BD\uB2C8\uB2E4.",
                prescription: "\uB450 \uC790\uB9AC\uB97C \uAC01\uAC01 \uAC00\uAFB8\uC138\uC694. \uC77C\uB3C4 \uD130\uB3C4 \uB458\uB85C \uB098\uB220 \uC9C0\uD0A4\uB294 \uAC83\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uAE305-\uB098",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC77C3",
                  "\uC7AC1"
                ],
                diagnosis: "\uC791\uC740 \uC815\uC6D0 \uACC1\uC5D0 \uD070 \uB545\uC774 \uBD99\uC5B4 \uC788\uC5B4, \uC791\uC740 \uC77C\uC744 \uD06C\uAC8C \uD0A4\uC6CC \uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC815\uC6D0\uC5D0\uC11C \uC790\uB780 \uB098\uBB34\uB294 \uD070 \uB545\uC73C\uB85C \uC62E\uACA8 \uD0A4\uC6B0\uC138\uC694. \uC791\uC740 \uC77C\uC744 \uD070 \uD310\uC73C\uB85C \uC62E\uAE30\uB294 \uAC10\uAC01\uC774 \uB2F9\uC2E0\uC758 \uAE38\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.062"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uAE305-\uB098\u2032",
                condition: "\uC0B0\uB9E5\uC774 \uC55E \uAE30\uB465(\uD574\xB7\uB2EC)\uC5D0 \uC788\uC74C / \uC815\uC6D0\uC774 \uC55E",
                slots: [
                  "\uC0AC3"
                ],
                diagnosis: "\uC0B0\uB9E5\uC774 \uC55E\uC774\uBA74: \uC791\uAC8C \uC2DC\uC791\uD574 \uC2A4\uC2A4\uB85C \uD06C\uAC8C \uC77C\uAD6C\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC815\uC6D0\uC774 \uC55E\uC774\uBA74: \uC9D1\uC548\uACFC \uC717\uC138\uB300\uC758 \uC190\uAE38\uB85C \uC790\uB9AC\uB97C \uB113\uD600 \uC628 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\u2014",
                source: [
                  "R2.GI.062"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uAE305-\uB2E4",
                condition: "\uC0B0\uB9E5\uC774 \uC2DC\uB0C7\uBB3C\uC744 \uB04C\uC5B4\uC634 (\uC544\uB798 \uAE00\uC790\uC5D0 \uBB3C\uC758 \uBFCC\uB9AC \uC788\uC74C)",
                slots: [
                  "\uC77C2",
                  "\uC7AC1"
                ],
                diagnosis: "\uACC1\uC758 \uC0B0\uB9E5\uC774 \uB9D1\uC740 \uBB3C\uC744 \uBD88\uB7EC\uC640 \uB2F9\uC2E0\uC758 \uB545\uC744 \uC801\uC2ED\uB2C8\uB2E4. \uC0B0\uB9E5\uC774 \uD0DC\uC5B4\uB09C \uD574\uC5D0 \uC788\uC73C\uBA74, \uC7AC\uBB3C\uC740 \uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00\uC774\uB098 \uAD6D\uAC00\uC2DC\uD5D8\uC73C\uB85C \uB530\uB77C\uC624\uB294 \uC790\uACA9, \uACF5\uACF5\uC758 \uC77C\uAC10\uACFC \uC774\uC5B4\uC838 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC774 \uAC78\uB9AC\uB294 \uACF5\uC801\uC778 \uBB34\uB300\uC5D0\uC11C \uAC00\uB974\uCE58\uACE0 \uBC1C\uD45C\uD558\uC138\uC694.",
                source: [
                  "1\uCE35 \xA75",
                  "R2.GI.061",
                  "\uAD6D\uAC00\uC790\uB9AC \uD310\uC815"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uAE305-\uB77C",
                condition: "\uC704 \uAC00\uC9C0 + \uC6D0\uAD6D\uC5D0 \uBD88 \uC5C6\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uADF8 \uB04C\uC5B4\uC634\uC5D0\uC11C \uC5C6\uB358 \uBE5B\uAE4C\uC9C0 \uC0DD\uAE41\uB2C8\uB2E4.",
                prescription: "\uBC29\uC1A1\xB7\uC608\uC220\xB7\uAD50\uC721\xB7\uB9C8\uC74C\uC744 \uB2E4\uB8E8\uB294 \uC77C\uACFC \uB2FF\uC744 \uB54C \uC0B6\uC774 \uD3B8\uC548\uD574\uC9D1\uB2C8\uB2E4.",
                source: [
                  "R2.GI.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uAE306-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D3"
                ],
                diagnosis: "\uC815\uC6D0\uC5D0 \uB098\uBB34\uAC00 \uC2EC\uC5B4\uC9C0\uBA74 \uBB3C\uC774 \uB9D1\uC544\uC9C0\uACE0 \uC7AC\uBB3C\uC774 \uBA38\uBB45\uB2C8\uB2E4. \uACC1\uC758 \uC790\uB9AC\uB97C \uC815\uD558\uB294 \uC77C\uC774 \uC815\uC6D0\uC744 \uC644\uC131\uD569\uB2C8\uB2E4.",
                prescription: "\u2014",
                note: "\uCC98\uBC29 \uC5C6\uC74C(\uC6D0\uBB38 \u2014)",
                source: [
                  "R2.GI.080"
                ]
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uAE306-\uB098",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D1",
                  "\uB05D2"
                ],
                diagnosis: "\uD070 \uC774\uB984\uC744 \uBC14\uB77C\uB294 \uB9C8\uC74C\uC774 \uD06C\uC9C0\uB9CC, \uB2F9\uC2E0\uC758 \uD798\uC740 \uC54C\uB9DE\uC740 \uD06C\uAE30\uC758 \uC77C\uC5D0\uC11C \uAC00\uC7A5 \uC624\uB798\uAC11\uB2C8\uB2E4.",
                prescription: "\u2014",
                note: "\uCC98\uBC29 \uC5C6\uC74C(\uC6D0\uBB38 \u2014)",
                source: [
                  "R2.GI.004"
                ]
              }
            ],
            C: [
              {
                code: "\uAE30\uC6B4-\uAC00",
                incoming: "\uD478\uB978 \uB369\uAD74",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uC815\uC6D0\uC5D0 \uAF43\uB098\uBB34\uAC00 \uC2EC\uC5B4\uC838 \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.020"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uB098",
                incoming: "\uD070 \uB098\uBB34",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uD070 \uB098\uBB34\uC5D0 \uBB36\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB9E1\uB294 \uC790\uB9AC\uAC00 \uCEE4\uC9C0\uB294 \uB9CC\uD07C \uBC1C\uBC11\uC744 \uC0B4\uD53C\uC138\uC694.",
                source: [
                  "R2.GI.022"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uB2E4",
                incoming: "\uD070 \uB098\uBB34\uB098 \uC791\uC740 \uB545\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uC790\uB9AC\uAC00 \uD480\uB824 \uB2F9\uC2E0 \uC77C\uB85C \uD798\uC774 \uB3CC\uC544\uC624\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "1\uCE35 \xA77"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uB77C",
                incoming: "\uB4F1\uBD88 (\uBB3C \uB9CE\uC744 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC44"
                ],
                sentence: "\uB118\uCE58\uB358 \uBB3C\uC774 \uC904\uC5B4 \uC7AC\uBB3C\uC744 \uC950\uACE0 \uC791\uC740 \uD130\uAC00 \uC0DD\uAE30\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.031"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uB9C8",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D (\uBD88\uC774 \uC140 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uB978 \uC815\uC6D0\uC5D0 \uBB3C\uC774 \uC0DD\uAE30\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.040"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uBC14",
                incoming: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C (\uC0B0\uB9E5 \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uD070 \uB545\uC774 \uC815\uC6D0\uC73C\uB85C \uBC14\uB00C\uBA70 \uD070 \uC774\uB984\uC744 \uBD88\uB7EC\uC624\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.061"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uC0AC",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC791\uC740 \uB451\uC5D0 \uD070\uBB3C\uC774 \uB4DC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB113\uD788\uAE30\uBCF4\uB2E4 \uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.011"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uC544",
                incoming: "\uBB3C\uC774 \uC57D\uD574\uC9C0\uB294 10\uB144",
                slots: [
                  "\uC7AC3",
                  "\uACC43"
                ],
                sentence: "\uC7AC\uBB3C\uC758 \uBB3C\uAE38\uC774 \uC595\uC544\uC9C0\uB294 \uB54C\uC785\uB2C8\uB2E4. \uD310\uC744 \uB113\uD788\uAE30\uBCF4\uB2E4 \uAC00\uC9C4 \uAC83\uC744 \uAC00\uAFB8\uB294 \uD750\uB984\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GI.082"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uC790",
                incoming: "\uB098\uBB34 10\uB144 + \uBB3C\uC774 \uB9C8\uB984",
                slots: [
                  "\uACC43"
                ],
                sentence: "\uC9D3\uACE0 \uB298\uB9AC\uB294 \uC77C\uBCF4\uB2E4 \uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB85C\uC6B4 \uB54C\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.082"
                ]
              },
              {
                code: "\uAE30\uC6B4-\uCC28",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uB098\uBB34\uB85C \uBAA8\uC5EC \uBB3C\uC774 \uC0AC\uB77C\uC9D0 (\uB0A8\uC131, \uC6D0\uAD6D\uC5D0 \uD574\uC218)",
                slots: [
                  "\uC5F05"
                ],
                sentence: "\uACC1\uC758 \uC778\uC5F0\uC774 \uBC14\uB2E4 \uAC74\uB108, \uB610\uB294 \uC678\uAD6D\uACFC \uB2FF\uC740 \uC77C\uD130\uC5D0\uC11C \uC774\uC5B4\uC9C0\uB294 \uB54C\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GI.084"
                ]
              }
            ],
            D: [
              {
                item: "\uD070 \uB098\uBB34\uAC00 \uC788\uC73C\uBA74 \uAC00\uC815\uC0DD\uD65C\uC774 \uC6D0\uB9CC\uD558\uC9C0 \uBABB\uD558\uB2E4\uB294 \uC2E4\uAD00 \uC11C\uC220",
                source: [
                  "R2.GI.022"
                ],
                note: '\uC6D0\uBB38 \u2014 \uC9C4\uB2E8\uC740 "\uBC1C\uBC11\uC774 \uBC84\uAC70\uC6CC\uC9D0"\uAE4C\uC9C0\uB9CC'
              },
              {
                item: "\uB450 \uC9D1 \uC0B4\uB9BC",
                source: [
                  "R2.GI.060"
                ],
                note: "\uC6D0\uBB38"
              },
              {
                item: "\uBD80\uBD80\xB7\uC0AC\uC5C5 \uC778\uC5F0 \uC5C6\uC74C",
                source: [
                  "R2.GI.081"
                ]
              },
              {
                item: "\uC554\uAE30\uB825 \uC800\uD558",
                source: [
                  "R2.GI.083"
                ]
              },
              {
                item: "\uC5EC\uC131\uC758 \uC5EC\uB7EC \uC774\uC131 \uAD00\uACC4",
                source: [
                  "R2.GI.085"
                ]
              },
              {
                item: "\uC7AC\uC640 \uBA85\uC608\uAC00 \uCD94\uB77D\uD55C\uB2E4\uB294 \uC11C\uC220",
                source: [
                  "R2.GI.070"
                ]
              },
              {
                item: '"\uACB0\uD63C\uC744 \uD558\uBA74 \uD574\uACB0\uB41C\uB2E4"\uB294 \uCC98\uBC29',
                source: [
                  "R2.GI.032"
                ],
                note: "\uACB0\uC815 \uC601\uD5A5"
              }
            ]
          },
          \u5E9A: {
            name: "\uACBD\uAE08 \u2014 \uCEE4\uB2E4\uB780 \uAE08\uB9E5",
            sourcePage: "PDF page 31-34 (7. \uACBD\uAE08)",
            A: {
              \uC0AC1\uD615\uC0C1: {
                text: "\uB2F9\uC2E0\uC740 \uCEE4\uB2E4\uB780 \uAE08\uB9E5\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                source: [
                  "R2.GYEONG.001"
                ]
              },
              \uC0AC2\uC131\uD5A5: {
                text: "\uACB0\uB2E8\uC774 \uBE60\uB974\uACE0, \uC5B4\uC9C0\uB7EC\uC6B4 \uAC83\uC744 \uAE30\uC900\uB300\uB85C \uBC18\uB4EF\uD558\uAC8C \uC815\uB9AC\uD558\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uCC45\uC784\uC744 \uBB34\uAC81\uAC8C \uC5EC\uAE30\uACE0 \uC758\uB9AC\uB97C \uC9C0\uD0B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.002"
                ]
              },
              \uC0AC3\uB0A8\uB4E4\uC774\uBCF4\uB294\uB098: {
                text: "\uB2E8\uB2E8\uD558\uACE0 \uBBFF\uC74C\uC9C1\uD574 \uBCF4\uC785\uB2C8\uB2E4. \uC18D\uB9C8\uC74C\uC740 \uC27D\uAC8C \uAEBC\uB0B4\uC9C0 \uC54A\uACE0, \uC633\uACE0 \uADF8\uB984 \uC55E\uC5D0\uC11C\uB294 \uBB3C\uB7EC\uC11C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.002"
                ]
              },
              \uC0AC4\uCE6D\uCC2C: {
                text: "\uD310\uB2E8\uC774 \uD750\uD2B8\uB7EC\uC9C0\uC9C0 \uC54A\uC544, \uD754\uB4E4\uB9AC\uB294 \uC0C1\uD669\uC77C\uC218\uB85D \uC0AC\uB78C\uB4E4\uC774 \uB2F9\uC2E0\uC758 \uACB0\uC815\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.002"
                ]
              },
              \uC77C1\uBB34\uAE30: {
                text: "\uAE30\uC900\uC744 \uC138\uC6B0\uACE0 \uC9C0\uD0A4\uB294 \uD798, \uC5C9\uD0A8 \uAC83\uC744 \uC798\uB77C \uB0B4\uACE0 \uC815\uB9AC\uD558\uB294 \uD798\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.002",
                  "R2.GYEONG.003"
                ]
              },
              \uC7AC6\uB3C8\uC758\uC21C\uC11C: {
                text: "\uCE7C\uC740 \uB9DE\uB294 \uC190\uC7A1\uC774\uB97C \uC950\uC5C8\uC744 \uB54C \uC81C \uAC12\uC744 \uD569\uB2C8\uB2E4. \uC7AC\uBB3C\uC774 \uC774\uC5B4\uC9C0\uB294 \uAE38\uC744 \uB530\uB77C\uAC00\uBA70 \uC774\uB984\uC744 \uC138\uC6B0\uB294 \uAC83\uC774 \uC774 \uC77C\uAC04\uC758 \uC21C\uC11C\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.010",
                  "R2.GYEONG.081"
                ]
              },
              \uC5F01\uAD00\uACC4\uC120\uC5B8: {
                text: "\uAE08\uB9E5\uC740 \uB2E8\uB2E8\uD558\uACE0 \uACE7\uC544\uC11C \uC27D\uAC8C \uD718\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uB9C8\uC74C\uC744 \uC815\uD558\uBA74 \uB05D\uAE4C\uC9C0 \uC9C0\uD0A4\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uB2F9\uC2E0\uC758 \uD798\uC744 \uC54C\uB9DE\uAC8C \uC950\uC5B4 \uC904 \uC190\uC7A1\uC774 \uAC19\uC740 \uC0AC\uB78C\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.002",
                  "R2.GYEONG.020"
                ]
              },
              \uACB0\uD63C\uC870\uAC74: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD070 \uB098\uBB34\uAC00 \uC190\uC7A1\uC774\uB85C \uB07C\uC6CC\uC9C8 \uB54C.",
                source: [
                  "R2.GYEONG.020"
                ]
              },
              \uB05D\uC18C\uC7AC: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uACE7\uC74C / \uC815\uB9AC\uD558\uB294 \uD798 / \uB9E1\uC740 \uB9CC\uD07C\uB9CC \uC950\uB294 \uC808\uC81C",
                source: [
                  "R2.GYEONG.002",
                  "R2.GYEONG.082"
                ]
              },
              \uC9C1\uC5C5\uACB0: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uBC95\xB7\uAD70\xB7\uACBD\xB7\uAE08\uC735\xB7\uACBD\uC601, \uC758\uD559\xB7\uC758\uC57D\xB7\uC0DD\uBA85\uACF5\uD559, \uC804\uAE30\xB7\uC804\uC790\xB7\uC790\uB3D9\uCC28\xB7\uC74C\uD5A5\xB7\uAE08\uC18D\xB7\uAE30\uACC4. \uAD6D\uAC00\uC758 \uAD8C\uD55C\uC744 \uBC1B\uB294 \uC77C\uC774 \uB9CE\uB2E4.",
                source: [
                  "R2.GYEONG.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uACBD1-\uAC00",
                condition: "\uD070 \uB098\uBB34 \uC788\uC74C (\uC544\uB798\uC5D0 \uB098\uBB34 \uBFCC\uB9AC)",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uD070 \uCE7C\uC5D0 \uB9DE\uB294 \uD070 \uC190\uC7A1\uC774\uB97C \uC950\uC5C8\uC2B5\uB2C8\uB2E4. \uD798\uC744 \uC81C\uB300\uB85C \uC4F8 \uC790\uB9AC\uB97C \uC544\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uD310\uC744 \uC815\uB9AC\uD558\uACE0 \uC774\uB044\uB294 \uC790\uB9AC, \uAE30\uC900\uC744 \uC9D1\uD589\uD558\uB294 \uC77C\uC5D0\uC11C \uC774\uB984\uACFC \uC7AC\uBB3C\uC774 \uD568\uAED8 \uC12D\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.010"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uACBD1-\uB098",
                condition: "\uD478\uB978 \uB369\uAD74\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C2"
                ],
                diagnosis: "\uD070 \uCE7C\uC5D0 \uC791\uC740 \uC190\uC7A1\uC774\uB77C, \uD798\uC744 \uB2E4 \uC4F0\uBA74 \uC624\uD788\uB824 \uC190\uC774 \uB2E4\uCE69\uB2C8\uB2E4. \uC7AC\uBB3C\uC5D0 \uBB36\uC5EC \uB2F5\uB2F5\uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC81C\uBCF5\uC744 \uC785\uB294 \uC77C, \uADDC\uC728\uC774 \uBD84\uBA85\uD55C \uC870\uC9C1\uC5D0\uC11C \uAD8C\uD55C\uC744 \uC4F0\uC138\uC694. \uAD8C\uD55C\uC740 \uC815\uD574\uC9C4 \uB9CC\uD07C\uB9CC \uC4F8 \uB54C \uB2F9\uC2E0\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.022"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uACBD1-\uB2E4",
                condition: "\uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uC190\uC7A1\uC774 \uC5C6\uB294 \uD070 \uCE7C\uC785\uB2C8\uB2E4. \uD798\uC740 \uD070\uB370 \uC958 \uACF3\uC774 \uC5C6\uC5B4 \uC560\uC4F4 \uB9CC\uD07C \uB0A8\uC9C0 \uC54A\uACE0, \uD718\uB450\uB974\uB294 \uC0AC\uB78C\uC774 \uBA3C\uC800 \uB2E4\uCE58\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC190\uC7A1\uC774\uB294 \uBC30\uC6C0\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4. \uC624\uB798 \uC775\uD78C \uAE30\uC220\uACFC \uC790\uACA9\uC774 \uC190\uC7A1\uC774\uAC00 \uB429\uB2C8\uB2E4. \uD310\uC744 \uBC8C\uC774\uB294 \uC77C\uC740 \uC190\uC7A1\uC774\uAC00 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uB9DE\uCD94\uC138\uC694.",
                source: [
                  "R2.GYEONG.023"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uACBD1-\uB77C",
                condition: "\uB098\uBB34 \uB9CE\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC7AC2"
                ],
                diagnosis: "\uC190\uC7A1\uC774\uAC00 \uB108\uBB34 \uB9CE\uC544 \uCE7C\uB0A0\uC774 \uC27D\uAC8C \uC0C1\uD569\uB2C8\uB2E4. \uBC8C\uC5EC \uB193\uC740 \uAC83\uC774 \uB9CE\uC544 \uAC70\uB450\uB294 \uAC83\uC774 \uC801\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                source: [
                  "R2.GYEONG.021"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \uD45C\uAE30: \uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4."
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uACBD2-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uB9D1\uC74C)",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uD070\uBB3C\uC5D0\uC11C \uB178\uB294 \uCE7C\uC785\uB2C8\uB2E4. \uBB3C\uC774 \uB9D1\uC744\uC218\uB85D \uCE7C\uB0A0\uC774 \uBE5B\uB0A9\uB2C8\uB2E4.",
                prescription: "\uB9D1\uC74C\uC744 \uC9C0\uD0A4\uB294 \uAC83, \uACE7 \uAE68\uB057\uD558\uACE0 \uC815\uB2F9\uD55C \uBC29\uC2DD\uC774 \uCE7C\uB0A0\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.011",
                  "R2.GYEONG.081"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uACBD2-\uB098",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB180 \uBB3C\uC774 \uC595\uC544 \uAC00\uC9C4 \uD798\uC744 \uB2E4 \uD3BC\uCE58\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB354 \uB113\uC740 \uBB3C\uC744 \uCC3E\uC544 \uB098\uAC00\uC138\uC694. \uAD6D\uACBD\uC744 \uB118\uB098\uB4DC\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.030",
                  "R2.GYEONG.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uACBD2-\uB2E4",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB180 \uBB3C\uC774 \uC5C6\uC5B4 \uCE7C\uC774 \uC4F0\uC77C \uACF3\uC744 \uCC3E\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC904\uAE30\uB97C \uB530\uB77C \uBC14\uB2E4\uB97C \uB118\uB098\uB4DC\uC138\uC694. \uD574\uC678\uC640 \uB2FF\uC740 \uC77C\uC5D0\uC11C \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uACBD2-\uB77C",
                condition: "\uBB3C \uB9CE\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uBB3C\uC0B4\uC774 \uC138\uC11C \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9C0\uACE0, \uD0A4\uC6B4 \uAC83\uC774 \uB108\uBB34 \uCEE4\uC838 \uB2E4\uB8E8\uAE30 \uBC84\uAC81\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD070\uBB3C\uC744 \uAC00\uB458 \uB451\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                source: [
                  "R2.GYEONG.031",
                  "R2.GYEONG.012"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uACBD2-\uB9C8",
                condition: "\uBB3C\uC774 \uD750\uB824\uC9D0",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uD750\uB9B0 \uBB3C\uC5D0\uC11C \uB180\uC544 \uCE7C\uB0A0\uC774 \uB179\uC2AC\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB9D1\uAC8C \uC9C0\uD0A4\uB294 \uAC83\uC774 \uCE7C\uC744 \uC9C0\uD0A4\uB294 \uC77C\uC785\uB2C8\uB2E4. \uC815\uB2F9\uD558\uACE0 \uAE68\uB057\uD55C \uBC29\uC2DD\uC744 \uACE0\uB974\uC138\uC694.",
                source: [
                  "R2.GYEONG.011",
                  "R2.GYEONG.081"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uACE0 \uC190\uC7A1\uC774\uB97C \uC138\uC6B0\uB294 \uB545",
                code: "\uACBD3-\uAC00",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 + \uD070 \uB098\uBB34 + \uB113\uC740 \uD638\uC218",
                slots: [
                  "\uC0AC4",
                  "\uC7AC1"
                ],
                diagnosis: "\uB451\uC774 \uD070\uBB3C\uC744 \uAC00\uB450\uACE0, \uADF8 \uB451\uC5D0 \uC190\uC7A1\uC774 \uB098\uBB34\uAC00 \uC130\uC2B5\uB2C8\uB2E4. \uCE7C\uC744 \uC81C\uB300\uB85C \uC4F8 \uD310\uC774 \uB2E4 \uAC16\uCDB0\uC84C\uC2B5\uB2C8\uB2E4.",
                prescription: "\uADF8 \uD638\uC218 \uC704\uC5D0 \uD574\uAC00 \uB728\uBA74 \uC774\uB984\uACFC \uC7AC\uBB3C\uC774 \uD568\uAED8 \uC635\uB2C8\uB2E4. \uAD8C\uD55C\uC744 \uB9E1\uB294 \uC790\uB9AC\uB97C \uD53C\uD558\uC9C0 \uB9C8\uC138\uC694.",
                source: [
                  "R2.GYEONG.012"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uACE0 \uC190\uC7A1\uC774\uB97C \uC138\uC6B0\uB294 \uB545",
                code: "\uACBD3-\uB098",
                condition: "\uC791\uC740 \uB545 + \uB113\uC740 \uD638\uC218",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C2"
                ],
                diagnosis: "\uC791\uC740 \uB451\uC774 \uD070\uBB3C\uC744 \uB9C9\uB290\uB77C \uD750\uB824\uC9C0\uAE30 \uC27D\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 \uADF8 \uB545\uC774 \uC190\uC7A1\uC774 \uB098\uBB34\uB97C \uBD88\uB7EC\uC635\uB2C8\uB2E4.",
                prescription: "\uC81C\uBCF5\uC744 \uC785\uB294 \uACF5\uC801\uC778 \uC77C\uB85C \uC190\uC7A1\uC774\uB97C \uC5BB\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.040"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uACE0 \uC190\uC7A1\uC774\uB97C \uC138\uC6B0\uB294 \uB545",
                code: "\uACBD3-\uB2E4",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 + \uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uD070 \uB545\uC5D0 \uC791\uC740 \uBB3C\uC774\uB77C \uC27D\uAC8C \uD750\uB824\uC9C0\uACE0 \uB180 \uBB3C\uB3C4 \uC595\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4(1\uCE35 \uD0C1\uC218 \uD574\uBC95).",
                source: [
                  "R2.GYEONG.041",
                  "1\uCE35 \uD0C1\uC218"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uACE0 \uC190\uC7A1\uC774\uB97C \uC138\uC6B0\uB294 \uB545",
                code: "\uACBD3-\uB77C",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC7AC7"
                ],
                diagnosis: "\uAE08\uB9E5\uC774 \uB369\uAD74\uC744 \uBD88\uB7EC\uC640 \uC791\uC740 \uB545\uC5D0 \uC2EC\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uC791\uC740 \uD130\uB97C \uB9C8\uB828\uD558\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.071"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uACBD4-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uD587\uBE5B\uC744 \uBC1B\uC544 \uBE5B\uB098\uB294 \uAE08\uB9E5\uC785\uB2C8\uB2E4. \uC774\uB984\uC774 \uB192\uC544\uC9C0\uB294 \uC790\uB9AC\uC5D0 \uC11C\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC740 \uC54C\uB9DE\uC740 \uB9CC\uD07C\uB9CC \uC887\uC73C\uC138\uC694. \uBE5B\uC774 \uB108\uBB34 \uC138\uBA74 \uCE7C\uC774 \uB179\uC2B5\uB2C8\uB2E4. \uBE5B\uC744 \uBAA8\uC544 \uC4F0\uB294 \uC77C\uACFC\uB3C4 \uC778\uC5F0\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uACBD4-\uB098",
                condition: "\uD0DC\uC591 + \uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uBD88\uC774 \uB108\uBB34 \uC138\uC11C \uC190\uC7A1\uC774\uAC00 \uD0C0\uACE0 \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9D1\uB2C8\uB2E4. \uC560\uC4F4 \uC77C\uC774 \uC81C\uB300\uB85C \uC778\uC815\uBC1B\uC9C0 \uBABB\uD558\uB294 \uB54C\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.",
                prescription: "\uBD88\uC744 \uC2DD\uD600 \uC8FC\uB294 \uBCF4\uC11D\uC774\uB098 \uBE44\uAC00 \uB4E4\uC5B4\uC624\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694. \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C\uB3C4 \uAE38\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.050"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uACBD4-\uB2E4",
                condition: "\uB4F1\uBD88 \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uB4F1\uBD88\uC774 \uD070\uBB3C\uC744 \uB04C\uC5B4\uC640 \uB180 \uBB3C\uACFC \uC190\uC7A1\uC774\uB97C \uD568\uAED8 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\u2014",
                source: [
                  "R2.GYEONG.052"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uC1E0",
                stageNote: null,
                code: "\uACBD5-\uAC00",
                condition: "\uAE08\uB9E5 \uB458 \uC774\uC0C1",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2",
                  "\uACC44"
                ],
                diagnosis: "\uAC19\uC740 \uCE7C\uC774 \uACC1\uC5D0 \uC788\uC5B4 \uC190\uC7A1\uC774\uB97C \uB450\uACE0 \uB298 \uACAC\uC90D\uB2C8\uB2E4. \uC560\uC4F4 \uBAAB\uC774 \uB098\uB258\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uACC1\uC758 \uCE7C\uC774 \uC815\uB9AC\uB418\uB294 \uB54C, \uACE7 \uD478\uB978 \uB369\uAD74\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uB2F9\uC2E0 \uBAAB\uC774 \uBD84\uBA85\uD574\uC9D1\uB2C8\uB2E4. \uADF8\uC804\uC5D0\uB294 \uBC1C\uBC11\uC758 \uAE30\uBC18\uC744 \uB2E4\uC9C0\uC138\uC694.",
                source: [
                  "R2.GYEONG.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uC1E0",
                stageNote: null,
                code: "\uACBD5-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8"
                ],
                diagnosis: "\uD070 \uCE7C\uACFC \uC791\uC740 \uCE7C\uC774 \uD568\uAED8 \uC788\uC5B4 \uC694\uB780\uD558\uC9C0\uB9CC, \uC791\uC740 \uCE7C\uC774 \uBE5B\uACFC \uBB3C\uC744 \uBD88\uB7EC\uC640 \uB2F9\uC2E0\uC744 \uB3D5\uC2B5\uB2C8\uB2E4.",
                prescription: "\uACC1\uC758 \uB0A0\uCE74\uB85C\uC6B4 \uC0AC\uB78C\uC758 \uD798\uC744 \uBE4C\uB824 \uC4F0\uC138\uC694.",
                source: [
                  "R2.GYEONG.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uACBD6-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D2",
                  "\uB05D3"
                ],
                diagnosis: "\uCE7C\uC740 \uC815\uB2F9\uD558\uAC8C \uC4F8 \uB54C \uAC00\uC7A5 \uC624\uB798 \uBE5B\uB0A9\uB2C8\uB2E4. \uB9E1\uC740 \uAD8C\uD55C\uB9CC\uD07C\uB9CC \uC950\uB294 \uC808\uC81C\uAC00 \uB2F9\uC2E0\uC758 \uB0A0\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                prescription: "\u2014",
                note: "\uCC98\uBC29 \uC5C6\uC74C(\uC6D0\uBB38 \u2014)",
                source: [
                  "R2.GYEONG.081",
                  "R2.GYEONG.082"
                ]
              }
            ],
            C: [
              {
                code: "\uACBD\uC6B4-\uAC00",
                incoming: "\uD070 \uB098\uBB34",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uC190\uC7A1\uC774\uAC00 \uB07C\uC6CC\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C0\uACE0 \uD798\uC774 \uC4F0\uC77C \uACF3\uC774 \uC0DD\uAE41\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.020",
                  "R2.GYEONG.023"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uB098",
                incoming: "\uD070 \uB098\uBB34 (\uC0B0\uB9E5 \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                sentence: "\uC190\uC5D0 \uC954 \uB3C4\uAD6C\uB85C \uC9C1\uC811 \uC9D3\uACE0 \uC138\uC6CC \uB545\uACFC \uD130\uAC00 \uC0DD\uAE30\uAE30 \uC88B\uC740 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.070"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uB2E4",
                incoming: "\uD478\uB978 \uB369\uAD74 (\uAE08\uB9E5\uC774 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uCE7C\uC774 \uC815\uB9AC\uB418\uC5B4 \uB2F9\uC2E0 \uBAAB\uC774 \uBD84\uBA85\uD574\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.060"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uB77C",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D\uC774\uB098 \uC2DC\uB0C7\uBB3C (\uBD88\uC774 \uC140 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB2EC\uAD88\uC9C4 \uCE7C\uC774 \uC2DD\uC5B4 \uB2E4\uC2DC \uB0A0\uC774 \uC11C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.050"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uB9C8",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE\uC744 \uB9C9\uB294 \uCABD\uC73C\uB85C \uBC14\uB01C",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB728\uAC70\uC6C0\uC774 \uAC00\uB77C\uC549\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.050"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uBC14",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5 (\uC2DC\uB0C7\uBB3C \uC788\uACE0 \uB098\uBB34 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uBB3C\uC774 \uD750\uB824\uC9C0\uAE30 \uC26C\uC6B4 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4.",
                source: [
                  "R2.GYEONG.072"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uC0AC",
                incoming: "\uD0DC\uC591 (\uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uBD88\uC774 \uACB9\uCCD0 \uB0A0\uC774 \uBB34\uB38C\uC9C0\uAE30 \uC26C\uC6B4 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uD070 \uAD8C\uD55C\uC744 \uC7A1\uAE30\uBCF4\uB2E4 \uB9E1\uC740 \uC77C\uC744 \uC9C0\uD0A4\uC138\uC694.",
                source: [
                  "R2.GYEONG.050",
                  "R2.GYEONG.082"
                ]
              },
              {
                code: "\uACBD\uC6B4-\uC544",
                incoming: "\uAE08\uB9E5\uC774\uB098 \uB369\uAD74\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uC790\uB9AC\uAC00 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                source: [
                  "1\uCE35 \xA77"
                ]
              }
            ],
            D: [
              {
                item: "\uCE58\uC544",
                source: [
                  "R2.GYEONG.021"
                ]
              },
              {
                item: "\uB0A8\uC131\uC758 \uC5EC\uB7EC \uC774\uC131 \uAD00\uACC4\xB7\uAC74\uAC15\xB7\uC0AC\uC5C5 \uC2E4\uD328",
                source: [
                  "R2.GYEONG.080"
                ]
              },
              {
                item: '"\uC790\uD574"\xB7"\uB098\uC05C \uC6A9\uB3C4" \uD45C\uD604\uACFC "\uC0AC\uC5C5\uC744 \uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uB2E4"',
                source: [
                  "R2.GYEONG.023"
                ],
                note: "\uC6D0\uBB38 \u2014 \uCC98\uBC29\uC740 \uC2DC\uAE30\uB85C\uB9CC \uD45C\uD604"
              },
              {
                item: "\uACF5\uACA9\uC801\xB7\uB0C9\uC18C\uC801\uC774\uB77C\uB294 \uC6D0\uBB38 \uC11C\uC220",
                source: [
                  "R2.GYEONG.002"
                ],
                note: "\uC0AC3\uC740 \uAE0D\uC815 \uBC88\uC5ED\uB9CC"
              }
            ]
          },
          \u8F9B: {
            name: "\uC2E0\uAE08 \u2014 \uC138\uACF5\uB41C \uBCF4\uC11D",
            sourcePage: "PDF page 34-38 (8. \uC2E0\uAE08)",
            _note: "PDF 8\uC7A5(pp.34~38) \uC804\uC0AC. A \uD0A4\uB294 '\uC2AC\uB86F\uCF54\uB4DC \uB77C\uBCA8' \uBCD1\uAE30(\uAC80\uC99D\uAE30 V6 \uD638\uD658). B\u5404\u884C source\uB294 \uAC80\uC99D\uAE30 V5 \uC694\uAD6C \uD544\uB4DC\uB85C evidence\uC640 \uB3D9\uC77C \uAC12. \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uBE44\uB294 \uAC00\uC9C0\uB294 \u2014 \uD45C\uAE30. 6\uB2E8\uACC4(\uD2B9\uC131)\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098\uB77C \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C(\u2014).",
            A: {
              "\uC0AC1 \uD615\uC0C1": {
                text: "\uB2F9\uC2E0\uC740 \uC138\uACF5\uB41C \uBCF4\uC11D\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.SIN.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uC12C\uC138\uD558\uACE0 \uC815\uD655\uD55C \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC791\uC740 \uCC28\uC774\uB97C \uB193\uCE58\uC9C0 \uC54A\uACE0, \uAE30\uC900\uC5D0 \uB9DE\uAC8C \uB2E4\uB4EC\uC5B4 \uC644\uC131\uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uC608\uB9AC\uD558\uACE0 \uAE54\uB054\uD55C \uC0AC\uB78C\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC18D\uC740 \uC27D\uAC8C \uB4DC\uB7EC\uB0B4\uC9C0 \uC54A\uACE0, \uC778\uC815\uBC1B\uC744 \uB54C \uAC00\uC7A5 \uBE5B\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.002",
                  "R2.SIN.082"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uC190\uB05D\uC774 \uC815\uBC00\uD558\uACE0, \uD55C\uBC88 \uC775\uD78C \uAE30\uC220\uC744 \uC790\uACA9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uB0B4\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.001",
                  "R2.SIN.003"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uC815\uBC00\uD558\uAC8C \uB2E4\uB4EC\uACE0 \uC815\uD655\uD558\uAC8C \uC798\uB77C \uB0B4\uB294 \uD798, \uC190\uB05D\uACFC \uB9D0\uB05D\uC758 \uC7AC\uC8FC\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.001"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uBCF4\uC11D\uC740 \uD06C\uAE30\uBCF4\uB2E4 \uBE5B\uC73C\uB85C \uAC12\uC774 \uB9E4\uACA8\uC9D1\uB2C8\uB2E4. \uC54C\uB9DE\uC740 \uC7AC\uBB3C\uC744 \uC815\uD655\uD558\uAC8C \uC950\uACE0, \uD070 \uC7AC\uBB3C\uC740 \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uC0AC\uB78C\uB4E4\uACFC \uD798\uC744 \uD569\uCCD0 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC774 \uC77C\uAC04\uC758 \uC21C\uC11C\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.083"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uC791\uC740 \uCE7C\uC740 \uAF2D \uB9DE\uB294 \uC190\uC7A1\uC774\uB97C \uB9CC\uB0A0 \uB54C \uBE44\uB85C\uC18C \uC4F0\uC785\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uB9C8\uC74C\uC744 \uC900 \uC0AC\uB78C\uC744 \uC12C\uC138\uD558\uAC8C \uC0B4\uD53C\uACE0 \uB2E4\uB4EC\uC5B4 \uC8FC\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uB2F9\uC2E0\uC744 \uC54C\uC544\uBCF4\uACE0 \uAF2D \uB9DE\uAC8C \uC950\uC5B4 \uC904 \uC0AC\uB78C\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.010",
                  "R2.SIN.020"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD478\uB978 \uB369\uAD74\uC774 \uC190\uC7A1\uC774\uB85C \uB07C\uC6CC\uC9C8 \uB54C.",
                evidence: [
                  "R2.SIN.020"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uC815\uBC00\uD568 / \uACB0\uACFC\uB85C \uC778\uC815\uBC1B\uB294 \uD798",
                evidence: [
                  "R2.SIN.001",
                  "R2.SIN.082"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uBC95\xB7\uAE08\uC735\xB7\uACBD\uC601, \uC758\uD559\xB7\uAC04\uD638\xB7\uC0DD\uBA85\uACF5\uD559, \uBBF8\uC6A9\xB7\uC7AC\uB2E8\xB7\uAE08\uC18D\xB7\uC791\uC740 \uAE30\uACC4\xB7\uC74C\uD5A5\xB7\uC8FC\uBC29\xB7\uBC29\uC1A1. \uAD6D\uAC00 \uC790\uACA9\uC73C\uB85C \uC77C\uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uB2E4.",
                evidence: [
                  "R2.SIN.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uC791\uC740 \uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uC2E01-\uAC00",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C (\uC544\uB798\uC5D0 \uB098\uBB34 \uBFCC\uB9AC)",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uC791\uC740 \uCE7C\uC5D0 \uAF2D \uB9DE\uB294 \uC190\uC7A1\uC774\uB97C \uC950\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBC00\uD55C \uC77C\uC744 \uC790\uACA9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uB0C5\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00 \uC790\uACA9\uC774 \uD544\uC694\uD55C \uC815\uBC00\uD55C \uC77C\uC5D0\uC11C \uC774\uB984\uC774 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.010",
                  "R2.SIN.003"
                ],
                source: [
                  "R2.SIN.010",
                  "R2.SIN.003"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uC791\uC740 \uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uC2E01-\uAC00\u2032",
                condition: "\uB369\uAD74 + \uC791\uC740 \uB545 + \uC2DC\uB0C7\uBB3C",
                slots: [
                  "\uC77C3",
                  "\uC7AC7"
                ],
                diagnosis: "\uC190\uC7A1\uC774\uC640 \uB180 \uBB3C\uACFC \uB451\uC774 \uB2E4 \uAC16\uCDB0\uC84C\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC758\uB8CC, \uC637\uACFC \uD328\uC158\uCC98\uB7FC \uC815\uBC00\uD558\uAC8C \uB2E4\uB8E8\uB294 \uC77C\uC5D0\uC11C \uB2A5\uB825\uC744 \uBC1C\uD718\uD558\uACE0 \uC791\uC740 \uD130\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.023"
                ],
                source: [
                  "R2.SIN.023"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uC791\uC740 \uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uC2E01-\uB098",
                condition: "\uD070 \uB098\uBB34\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C2"
                ],
                diagnosis: "\uC791\uC740 \uCE7C\uC5D0 \uAE34 \uC190\uC7A1\uC774\uB77C \uCC3D\uC774 \uB429\uB2C8\uB2E4. \uBA40\uB9AC \uC788\uB294 \uB0A8\uC758 \uC77C\uC740 \uC798 \uD574\uB0B4\uB294\uB370, \uC815\uC791 \uB0B4 \uC77C\uC5D0\uB294 \uC190\uC774 \uB35C \uAC11\uB2C8\uB2E4.",
                prescription: "\uC870\uC9C1 \uC548\uC5D0\uC11C \uB0A8\uC758 \uC77C\uC744 \uD574\uACB0\uD574 \uC8FC\uB294 \uC790\uB9AC\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4. \uC791\uC740 \uB545\uC774 \uB4E4\uC5B4\uC640 \uC190\uC7A1\uC774\uAC00 \uC54C\uB9DE\uAC8C \uC904\uC5B4\uB4DC\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.SIN.021"
                ],
                source: [
                  "R2.SIN.021"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uC791\uC740 \uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uC2E01-\uB2E4",
                condition: "\uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uC190\uC7A1\uC774 \uC5C6\uB294 \uC791\uC740 \uCE7C\uC774\uB77C \uC950\uB294 \uC190\uC774 \uBA3C\uC800 \uB2E4\uCE58\uAE30 \uC27D\uACE0, \uB0A0\uCE74\uB85C\uC6C0\uC774 \uC4F0\uC77C \uACF3\uC744 \uCC3E\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uC190\uC7A1\uC774\uAC00 \uB4E4\uC5B4\uC624\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uACE0, \uADF8\uC804\uC5D0\uB294 \uB098\uBB34\uB97C \uB2E4\uB8E8\uB294 \uC77C(\uC637\xB7\uC885\uC774\xB7\uC12C\uC720)\uB85C \uC190\uC7A1\uC774\uB97C \uB300\uC2E0\uD558\uC138\uC694.",
                evidence: [
                  "R2.SIN.010",
                  "R2.SIN.041",
                  "1\uCE35 \xA77"
                ],
                source: [
                  "R2.SIN.010",
                  "R2.SIN.041",
                  "1\uCE35 \xA77"
                ]
              },
              {
                stage: 1,
                stageName: "\uC190\uC7A1\uC774",
                stageNote: "\uC791\uC740 \uCE7C\uC744 \uC958 \uB098\uBB34",
                code: "\uC2E01-\uB77C",
                condition: "\uB098\uBB34 \uB9CE\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC7AC2"
                ],
                diagnosis: "\uB2E4\uB4EC\uC5B4\uC57C \uD560 \uB098\uBB34\uAC00 \uB108\uBB34 \uB9CE\uC544 \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9D1\uB2C8\uB2E4. \uD310\uC744 \uD06C\uAC8C \uBC8C\uC77C\uC218\uB85D \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4.",
                prescription: "\uAC10\uB2F9\uD560 \uC218 \uC788\uB294 \uADDC\uBAA8\uB97C \uC9C0\uD0A4\uC138\uC694.",
                evidence: [
                  "R2.SIN.022"
                ],
                source: [
                  "R2.SIN.022"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uC2E02-\uAC00",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC7AC2"
                ],
                diagnosis: "\uB180\uAE30 \uC54C\uB9DE\uC740 \uB9D1\uC740 \uBB3C\uC744 \uAC00\uC9C4 \uCE7C\uC785\uB2C8\uB2E4. \uB2E4\uB9CC \uADF8 \uBE44\uAC00 \uD574\uB97C \uAC00\uB824, \uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uC77C\uC740 \uB3CC\uC544\uAC00\uC57C \uD569\uB2C8\uB2E4.",
                prescription: "\uC0B0\uB9E5\uC774 \uB4E4\uC5B4\uC640 \uBE44\uB97C \uAC70\uB450\uB294 \uB54C\uC5D0 \uC190\uC7AC\uC8FC(\uB098\uBB34\xB7\uAE08\uC18D \uACF5\uC608)\uB85C \uC7AC\uBB3C\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.011",
                  "R2.SIN.072"
                ],
                source: [
                  "R2.SIN.011",
                  "R2.SIN.072"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uC2E02-\uB098",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uC791\uC740 \uCE7C\uC774 \uD070 \uBB3C\uC0B4\uC5D0 \uB0A0\uC774 \uBB34\uB38C\uC9D1\uB2C8\uB2E4.",
                prescription: "\uB4F1\uBD88\uC774 \uB4E4\uC5B4\uC640 \uC190\uC7A1\uC774\uB97C \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uB54C\uC5D0 \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB098\uACE0 \uC7AC\uBB3C\uC744 \uC961\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.071"
                ],
                source: [
                  "R2.SIN.071"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uC2E02-\uB2E4",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB180 \uBB3C\uC774 \uC5C6\uC5B4 \uC5ED\uB7C9\uC744 \uB2E4 \uD3BC\uCE58\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBC14\uB2E4 \uAC74\uB108\uC5D0\uC11C \uBC30\uC6B0\uACE0 \uC77C\uD558\uC138\uC694. \uADF8\uACF3\uC758 \uBB3C\uC774 \uC190\uC7A1\uC774\uB97C \uD0A4\uC6CC \uC7AC\uBB3C\uC774 \uB429\uB2C8\uB2E4. \uBC95\uC744 \uB2E4\uB8E8\uB294 \uC77C\uACFC \uD2B9\uD788 \uC778\uC5F0\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.031"
                ],
                source: [
                  "R2.SIN.031"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uCE7C\uC774 \uB178\uB294 \uACF3",
                code: "\uC2E02-\uB77C",
                condition: "\uBB3C \uB9CE\uC74C, \uB610\uB294 \uBB3C\uC774 \uD750\uB824\uC9D0",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uBB3C\uC0B4\uC774 \uC138\uAC70\uB098 \uD750\uB824 \uCE7C\uB0A0\uC774 \uB179\uC2AC\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uCE7C\uB0A0\uC774 \uB179 \uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4(1\uCE35 \uD0C1\uC218 \uD574\uBC95).",
                evidence: [
                  "R2.SIN.030",
                  "1\uCE35 \uD0C1\uC218"
                ],
                source: [
                  "R2.SIN.030",
                  "1\uCE35 \uD0C1\uC218"
                ],
                note: "1\uCE35 \uD0C1\uC218"
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545",
                code: "\uC2E03-\uAC00",
                condition: "\uC791\uC740 \uB545 + \uC2DC\uB0C7\uBB3C",
                slots: [
                  "\uC0AC4",
                  "\uC77C4"
                ],
                diagnosis: "\uC54C\uB9DE\uC740 \uB451\uC774 \uC54C\uB9DE\uC740 \uBB3C\uC744 \uAC00\uB461\uB2C8\uB2E4. \uB451\uACFC \uBB3C\uC758 \uD06C\uAE30\uAC00 \uC5B4\uAE0B\uB098\uBA74 \uC27D\uAC8C \uD750\uB824\uC9D1\uB2C8\uB2E4.",
                prescription: "\uB451\uC5D0 \uC54C\uB9DE\uC740 \uB098\uBB34\uAC00 \uC11C \uC788\uC73C\uBA74 \uB2A5\uB825\uC744 \uB2E4 \uBC1C\uD718\uD569\uB2C8\uB2E4. \uB098\uBB34\uAC00 \uC5C6\uC73C\uBA74 \uAE30\uB974\uB294 \uC77C\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.SIN.040"
                ],
                source: [
                  "R2.SIN.040"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545",
                code: "\uC2E03-\uB098",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 + \uD478\uB978 \uB369\uAD74",
                slots: [
                  "\uC7AC2",
                  "\uACC44"
                ],
                diagnosis: "\uC190\uC7A1\uC774\uAC00 \uCC99\uBC15\uD55C \uD070 \uB545\uC5D0 \uC2EC\uC5B4\uC838 \uC798 \uC790\uB77C\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uC2DC\uB0C7\uBB3C\uC774 \uB4E4\uC5B4\uC640 \uD070 \uB545\uC774 \uC815\uC6D0\uC73C\uB85C \uBC14\uB00C\uB294 \uB54C\uC5D0 \uC7AC\uBB3C\uC744 \uC961\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.041"
                ],
                source: [
                  "R2.SIN.041"
                ]
              },
              {
                stage: 3,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545",
                code: "\uC2E03-\uB2E4",
                condition: "\uC791\uC740 \uB545\uC774 \uD070 \uB098\uBB34\uB97C \uB04C\uC5B4\uC634",
                slots: [
                  "\uC7AC2",
                  "\uC7AC7"
                ],
                diagnosis: "\uD070 \uAC74\uBB3C \uAC19\uC740 \uD070 \uC7AC\uBB3C\uC774 \uB2E4\uAC00\uC624\uB294\uB370, \uC791\uC740 \uCE7C \uD63C\uC790 \uAC10\uB2F9\uD558\uAE30\uB294 \uBC84\uAC81\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD63C\uC790 \uC9C0\uAE30\uBCF4\uB2E4 \uD568\uAED8\uD560 \uAE08\uC758 \uD798, \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uC0AC\uB78C\uC758 \uD798\uC744 \uBE4C\uB9AC\uC138\uC694.",
                evidence: [
                  "R2.SIN.070"
                ],
                source: [
                  "R2.SIN.070"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uC2E04-\uAC00",
                condition: "\uD0DC\uC591\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C2",
                  "\uACC42"
                ],
                diagnosis: "\uBE5B\uC744 \uB04C\uC5B4\uC624\uB824\uB2E4 \uADF8 \uBE5B\uC5D0 \uBB36\uC778 \uBCF4\uC11D\uC785\uB2C8\uB2E4. \uC774\uB984\uC744 \uC6D0\uD558\uC9C0\uB9CC \uC815\uC791 \uD558\uACE0 \uC2F6\uC740 \uC77C\uC744 \uB9C8\uC74C\uB300\uB85C \uD558\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uC77C, \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uAC8C \uAD8C\uD55C\uC744 \uC4F0\uB294 \uC790\uB9AC\uC5D0\uC11C \uBB36\uC784\uC774 \uC77C\uC774 \uB429\uB2C8\uB2E4. \uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.SIN.050"
                ],
                source: [
                  "R2.SIN.050"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uC2E04-\uAC00\u2032",
                condition: "\uC704 \uAC00\uC9C0 + \uC6D0\uAD6D\uC5D0 \uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uADF8 \uBB36\uC784\uC774 \uC5C6\uB358 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.SIN.050"
                ],
                source: [
                  "R2.SIN.050"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uC2E04-\uB098",
                condition: "\uBB3C \uC5C6\uC74C + \uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uBD88\uC774 \uC138\uC11C \uCE7C\uB0A0\uC774 \uBB34\uB38C\uC9D1\uB2C8\uB2E4.",
                prescription: "\uD0DC\uC591\uACFC \uD569\uD574 \uBB3C\uC774 \uC0DD\uAE30\uB294 \uB54C\uC5D0 \uB2E4\uC2DC \uB0A0\uC774 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.051"
                ],
                source: [
                  "R2.SIN.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uC2E04-\uB2E4",
                condition: "\uB4F1\uBD88 \uC788\uC74C",
                slots: [
                  "\uC7AC6",
                  "\uC77C6"
                ],
                diagnosis: "\uC774\uBBF8 \uB2E4\uB4EC\uC5B4\uC9C4 \uCE7C\uC5D0 \uBD88\uC774 \uB2FF\uC544 \uB0A0\uC774 \uBB34\uB38C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 \uB4F1\uBD88\uC774 \uC190\uC7A1\uC774\uC640 \uC7AC\uBB3C\uC744 \uD568\uAED8 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uBCF4\uB2E4 \uC2E4\uB9AC\uB97C \uACE0\uB974\uC138\uC694.",
                evidence: [
                  "R2.SIN.052"
                ],
                source: [
                  "R2.SIN.052"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574",
                stageNote: "\uC774\uB984\uACFC \uAD8C\uD55C",
                code: "\uC2E04-\uB77C",
                condition: "\uB4F1\uBD88 + \uD0DC\uC591\uC744 \uB04C\uC5B4\uC634",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uD574\uC640 \uB2EC \uC0AC\uC774\uC5D0\uC11C \uB9C8\uC74C\uC774 \uAC08\uB9BD\uB2C8\uB2E4.",
                prescription: "\uB113\uC740 \uD638\uC218\uAC00 \uB4E4\uC5B4\uC640 \uB4F1\uBD88\uC744 \uC190\uC7A1\uC774\uB85C \uBC14\uAFB8\uB294 \uB54C\uC5D0 \uAC08\uB4F1\uC774 \uD480\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.053"
                ],
                source: [
                  "R2.SIN.053"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uC1E0",
                stageNote: null,
                code: "\uC2E05-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uACC1\uC5D0 \uD070 \uCE7C\uC774 \uC788\uC5B4 \uACAC\uC8FC\uBA74 \uBD88\uB9AC\uD569\uB2C8\uB2E4.",
                prescription: "\uC544\uB798 \uAE00\uC790\uC5D0 \uB0B4 \uBFCC\uB9AC\uAC00 \uB2E8\uB2E8\uD558\uBA74 \uAC71\uC815\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB429\uB2C8\uB2E4. \uD478\uB978 \uB369\uAD74\uC774 \uB4E4\uC5B4\uC640 \uD070 \uCE7C\uC744 \uC791\uAC8C \uB2E4\uB4EC\uB294 \uB54C\uC5D0 \uD568\uAED8 \uC774\uB984\uC744 \uB192\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.060"
                ],
                source: [
                  "R2.SIN.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uC1E0",
                stageNote: null,
                code: "\uC2E05-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uB458 \uC774\uC0C1",
                slots: [
                  "\uC77C3",
                  "\uACC44"
                ],
                diagnosis: "\uB0A0\uC774 \uB458\uC774\uB77C \uAC00\uC704\uAC00 \uB418\uACE0, \uBA40\uB9AC \uC18C\uC2DD\uC744 \uC7A1\uB294 \uC548\uD14C\uB098\uB3C4 \uB429\uB2C8\uB2E4.",
                prescription: "\uC790\uB974\uACE0 \uB2E4\uB4EC\uB294 \uC77C(\uBBF8\uC6A9\xB7\uB514\uC790\uC778), \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uAC8C \uC815\uBCF4\uB97C \uB2E4\uB8E8\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uD0DC\uC591\uC774 \uC640\uC11C \uACC1\uC758 \uBCF4\uC11D\uC744 \uC815\uB9AC\uD558\uB294 \uB54C\uC5D0 \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.061"
                ],
                source: [
                  "R2.SIN.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC2E06-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D2",
                  "\uB05D3"
                ],
                diagnosis: "\uC9C1\uC811 \uC774\uB984\uC744 \uC887\uAE30\uBCF4\uB2E4 \uC77C\uC744 \uC815\uD655\uD788 \uD574\uB0B4 \uC778\uC815\uBC1B\uC744 \uB54C \uC774\uB984\uC774 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC62C\uB77C\uAC11\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.SIN.082"
                ],
                source: [
                  "R2.SIN.082"
                ],
                note: "\uD2B9\uC131 \uB2E8\uACC4 \u2014 \uBB38\uC7A5 \uCE78 \uD558\uB098, \uCC98\uBC29 \uCE78 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C"
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC2E06-\uB098",
                condition: "\uD070 \uB098\uBB34 + \uD0DC\uC591\uC744 \uB04C\uC5B4\uC634",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uB098\uBB34\uC5D0 \uAF43\uC744 \uD53C\uC6B0\uB294 \uC190\uC7AC\uC8FC\uB77C, \uACF5\uAC04\uC744 \uAFB8\uBBF8\uB294 \uC77C\uACFC \uC778\uC5F0\uC774 \uAE4A\uC2B5\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.SIN.081"
                ],
                source: [
                  "R2.SIN.081"
                ],
                note: "\uD2B9\uC131 \uB2E8\uACC4 \u2014 \uBB38\uC7A5 \uCE78 \uD558\uB098, \uCC98\uBC29 \uCE78 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C"
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC2E06-\uB2E4",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uC7AC7"
                ],
                diagnosis: "\uD070 \uC7AC\uBB3C\uC740 \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uC0AC\uB78C\uB4E4\uACFC \uD798\uC744 \uD569\uCE60 \uB54C \uBAA8\uC785\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.SIN.083"
                ],
                source: [
                  "R2.SIN.083"
                ],
                note: "\uD2B9\uC131 \uB2E8\uACC4 \u2014 \uBB38\uC7A5 \uCE78 \uD558\uB098, \uCC98\uBC29 \uCE78 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C"
              }
            ],
            C: [
              {
                code: "\uC2E0\uC6B4-\uAC00",
                incoming: "\uD478\uB978 \uB369\uAD74",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uAF2D \uB9DE\uB294 \uC190\uC7A1\uC774\uAC00 \uB07C\uC6CC\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C0\uACE0 \uC190\uB05D\uC758 \uC77C\uC774 \uC790\uB9AC\uB97C \uC7A1\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.020"
                ],
                source: [
                  "R2.SIN.020"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uB098",
                incoming: "\uC791\uC740 \uB545 (\uD070 \uB098\uBB34\uB9CC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uAE34 \uC190\uC7A1\uC774\uAC00 \uC54C\uB9DE\uAC8C \uC904\uC5B4 \uB0B4 \uC77C\uC5D0 \uC190\uC774 \uAC00\uAE30 \uC2DC\uC791\uD558\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.021"
                ],
                source: [
                  "R2.SIN.021"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uB2E4",
                incoming: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C (\uC0B0\uB9E5 + \uB369\uAD74\uC77C \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC44"
                ],
                sentence: "\uCC99\uBC15\uD55C \uB545\uC774 \uC815\uC6D0\uC73C\uB85C \uBC14\uB00C\uC5B4 \uC7AC\uBB3C\uC744 \uC950\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.041"
                ],
                source: [
                  "R2.SIN.041"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uB77C",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5 (\uC2DC\uB0C7\uBB3C \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC44"
                ],
                sentence: "\uD574\uB97C \uAC00\uB9AC\uB358 \uBE44\uAC00 \uAC77\uD600 \uC190\uC7AC\uC8FC\uAC00 \uC7AC\uBB3C\uB85C \uBC14\uB00C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.072"
                ],
                source: [
                  "R2.SIN.072"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uB9C8",
                incoming: "\uB4F1\uBD88 (\uD070 \uD638\uC218 \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uD070 \uBB3C\uC0B4 \uC18D\uC5D0 \uC190\uC7A1\uC774\uAC00 \uC0DD\uACA8 \uB0A0\uC774 \uC11C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.071"
                ],
                source: [
                  "R2.SIN.071"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uBC14",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uB4F1\uBD88\uACFC \uD574\uAC00 \uD568\uAED8\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uC74C\uC744 \uAC00\uB974\uB358 \uAC08\uB4F1\uC774 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.053"
                ],
                source: [
                  "R2.SIN.053"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uC0AC",
                incoming: "\uD0DC\uC591 (\uD574\uC5D0 \uBB36\uC5EC \uC788\uC9C0 \uC54A\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBE5B\uC5D0 \uBB36\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uACF5\uC801\uC778 \uC77C, \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294 \uC790\uB9AC\uC5D0\uC11C \uD798\uC744 \uC4F0\uC138\uC694.",
                evidence: [
                  "R2.SIN.050"
                ],
                source: [
                  "R2.SIN.050"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uC544",
                incoming: "\uD0DC\uC591\uC774\uB098 \uBCF4\uC11D\uC774 \uB2E4\uC2DC \uC634 (\uD574\uC5D0 \uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uBE5B\uC774 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.050",
                  "1\uCE35 \xA77"
                ],
                source: [
                  "R2.SIN.050",
                  "1\uCE35 \xA77"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uC790",
                incoming: "\uD0DC\uC591 (\uBCF4\uC11D\uC774 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uBCF4\uC11D\uC774 \uC815\uB9AC\uB418\uC5B4 \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB098\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.061"
                ],
                source: [
                  "R2.SIN.061"
                ]
              },
              {
                code: "\uC2E0\uC6B4-\uCC28",
                incoming: "\uD478\uB978 \uB369\uAD74 (\uD070 \uCE7C\uC774 \uACC1\uC5D0 \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uD070 \uCE7C\uC774 \uB2E4\uB4EC\uC5B4\uC838 \uD568\uAED8 \uC774\uB984\uC774 \uB192\uC544\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.SIN.060"
                ],
                source: [
                  "R2.SIN.060"
                ]
              }
            ],
            D: [
              {
                item: "\uCE7C\uC790\uB8E8 \uC5C6\uB294 \uC2E0\uAE08\uACFC \uD3ED\uB825",
                evidence: [
                  "R2.SIN.080"
                ],
                source: [
                  "R2.SIN.080"
                ],
                note: "\uD655\uC778 \uD544\uC694"
              },
              {
                item: "\uC5EC\uC131\uC758 \uAE4C\uCE60\uD568\xB7\uACF5\uC8FC \uD589\uC138",
                evidence: [
                  "R2.SIN.084"
                ],
                source: [
                  "R2.SIN.084"
                ],
                note: "\uD655\uC778 \uD544\uC694"
              },
              {
                item: "\uD68C\uC0AC \uB3C4\uC0B0",
                evidence: [
                  "R2.SIN.022"
                ],
                source: [
                  "R2.SIN.022"
                ]
              },
              {
                item: "\uAE08\uC735\uAD8C \uCC28\uC785",
                evidence: [
                  "R2.SIN.070"
                ],
                source: [
                  "R2.SIN.070"
                ],
                note: "\uC7AC\uBB34 \uC9C0\uC2DC"
              },
              {
                item: "\uB0C9\uC18C\uC801\uC774\uB77C\uB294 \uC6D0\uBB38 \uC11C\uC220",
                evidence: [
                  "R2.SIN.002"
                ],
                source: [
                  "R2.SIN.002"
                ],
                note: "\uC0AC3\uC740 \uAE0D\uC815 \uBC88\uC5ED\uB9CC"
              },
              {
                item: '"\uC0AC\uC5C5\uBCF4\uB2E4 \uC870\uC9C1\uC0DD\uD65C"',
                evidence: [
                  "R2.SIN.021"
                ],
                source: [
                  "R2.SIN.021"
                ],
                note: "\uC790\uB9AC\uC758 \uC131\uACA9\uC73C\uB85C\uB9CC \uD45C\uD604"
              }
            ]
          },
          \u58EC: {
            name: "\uC784\uC218 \u2014 \uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218",
            sourcePage: "PDF page 38-43 (9. \uC784\uC218)",
            _note: "PDF 9\uC7A5(pp.38~43) \uC804\uC0AC. A \uD0A4\uB294 '\uC2AC\uB86F\uCF54\uB4DC \uB77C\uBCA8' \uBCD1\uAE30(\uAC80\uC99D\uAE30 V6 \uD638\uD658). B\u5404\u884C source\uB294 \uAC80\uC99D\uAE30 V5 \uC694\uAD6C \uD544\uB4DC\uB85C evidence\uC640 \uB3D9\uC77C \uAC12. \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uBE44\uB294 \uAC00\uC9C0\uB294 \u2014 \uD45C\uAE30. (\uC77C) \uD45C\uAE30 \uAC00\uC9C0\uB294 \uC77C \uC139\uC158 \uD750\uB984 \uAC00\uC9C0. 7\uB2E8\uACC4(\uD2B9\uC131)\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098\uB77C \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C(\u2014).",
            A: {
              "\uC0AC1 \uD615\uC0C1": {
                text: "\uB2F9\uC2E0\uC740 \uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.IM.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uBAA8\uB4E0 \uAC78 \uD488\uB418 \uC18D\uC744 \uC798 \uB4DC\uB7EC\uB0B4\uC9C0 \uC54A\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uB4E4\uC740 \uAC83\uC744 \uC624\uB798 \uAE30\uC5B5\uD558\uACE0, \uB9C9\uD788\uBA74 \uBD80\uB52A\uD788\uAE30\uBCF4\uB2E4 \uB3CC\uC544\uC11C \uD750\uB985\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uC0AC\uB78C\uB4E4\uC740 \uB2F9\uC2E0 \uC55E\uC5D0\uC11C \uC790\uAE30 \uC598\uAE30\uB97C \uC27D\uAC8C \uAEBC\uB0C5\uB2C8\uB2E4. \uC815\uC791 \uADF8 \uC18D\uB0B4\uB97C \uC544\uB294 \uC0AC\uB78C\uC740 \uB4DC\uBB45\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.002"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uCC98\uC74C \uAC00\uB294 \uAE38\uB3C4 \uAE08\uC138 \uC775\uD788\uACE0, \uB5A8\uC5B4\uC838 \uC788\uB358 \uAC83\uB4E4\uC744 \uC774\uC5B4 \uD558\uB098\uB85C \uB9CC\uB4DC\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.002"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uD761\uC218\uB825\uACFC \uC5F0\uACB0\uB825\uC785\uB2C8\uB2E4. \uBC30\uC6B4 \uAC78 \uBE68\uB9AC \uC81C \uAC83\uC73C\uB85C \uB9CC\uB4E4\uACE0, \uC0AC\uB78C\uACFC \uC0AC\uB78C, \uC815\uBCF4\uC640 \uC815\uBCF4\uB97C \uC787\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.002",
                  "R2.IM.003"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uB3C8\uC744 \uC887\uC73C\uBA74 \uBB3C\uC774 \uD750\uB824\uC9C0\uACE0, \uC774\uB984\uC744 \uC138\uC6B0\uBA74 \uB3C8\uC774 \uB530\uB77C\uC635\uB2C8\uB2E4. \uD638\uC218 \uC704\uC5D0 \uD574\uAC00 \uB5A0\uC57C \uBB3C\uACB0\uC774 \uBC18\uC9DD\uC774\uB4EF, \uC0AC\uB78C\uC774 \uBAA8\uC5EC\uB4DC\uB294 \uD638\uC218\uB77C \uB098\uB20C \uB54C \uB354 \uD06C\uAC8C \uB3CC\uC544\uC635\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.074",
                  "R2.IM.041"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uBB3C\uC740 \uC5B4\uB5A4 \uADF8\uB987\uC5D0 \uB2F4\uAE30\uB4E0 \uADF8 \uBAA8\uC591\uB300\uB85C \uC790\uC2E0\uC744 \uBC14\uAFC9\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uC0C1\uB300\uC5D0 \uB530\uB77C \uBAA8\uC591\uC744 \uBC14\uAFD4 \uAC00\uBA70 \uC0C1\uB300\uB97C \uB2E4 \uBC1B\uC544 \uC8FC\uACE0 \uD488\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C\uB3C4 \uC18D\uC73C\uB85C\uB294, \uD758\uB7EC\uAC00\uB824\uB294 \uB098\uB97C \uB9D0\uC5C6\uC774 \uBD99\uC7A1\uC544 \uC8FC\uB294 \uC0AC\uB78C\uC744 \uAC04\uC808\uD788 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.002",
                  "R2.IM.010"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uAC70\uB300\uD55C \uC0B0\uB9E5\uC774 \uB451\uC73C\uB85C \uB4E4\uC5B4\uC62C \uB54C.",
                evidence: [
                  "R2.IM.011"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uB9CE\uC740 \uAC83\uC744 \uD488\uC5B4 \uC628 \uB113\uC774 / \uD769\uC5B4\uC84C\uB358 \uC2DC\uAC04\uB9CC\uD07C \uB113\uC5B4\uC9C4 \uD638\uC218",
                evidence: [
                  "R2.IM.002"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uD574\uC678, \uC720\uD1B5, \uC74C\uC2DD, \uC815\uBCF4, \uAD50\uC721.",
                evidence: [
                  "R2.IM.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uC7841-\uAC00",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC7AC1"
                ],
                diagnosis: "\uD070 \uB451\uC774 \uD070\uBB3C\uC744 \uAC00\uB46C \uC4F0\uC784 \uC788\uB294 \uD638\uC218\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD798\uC774 \uD769\uC5B4\uC9C0\uC9C0 \uC54A\uACE0 \uD55C\uACF3\uC73C\uB85C \uBAA8\uC785\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC744 \uAC70\uB294 \uC77C\uC744 \uBA3C\uC800 \uC887\uC73C\uC138\uC694. \uB451 \uC548\uC5D0 \uACE0\uC778 \uBB3C\uC774 \uC7AC\uBB3C\uC774 \uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.020",
                  "R2.IM.074"
                ],
                source: [
                  "R2.IM.020",
                  "R2.IM.074"
                ]
              },
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uC7841-\uB098",
                condition: "\uC791\uC740 \uB545\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uD070\uBB3C\uC744 \uC791\uC740 \uB451\uC73C\uB85C \uB9C9\uACE0 \uC788\uC5B4 \uB451\uC774 \uC790\uC8FC \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4. \uC560\uC368 \uBAA8\uC740 \uAC83\uC774 \uB118\uCCD0 \uD758\uB7EC\uAC00\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB118\uCE58\uB294 \uBB3C\uC744 \uD758\uB824\uBCF4\uB0BC \uAE38\uC744 \uD568\uAED8 \uB0B4 \uB450\uC138\uC694. \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C, \uC0AC\uB78C\uACFC \uBB3C\uAC74\uC774 \uC624\uAC00\uB294 \uC77C\uC774 \uB451\uC758 \uC9D0\uC744 \uB35C\uC5B4 \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.021",
                  "R1.TAK.032"
                ],
                source: [
                  "R2.IM.021",
                  "R1.TAK.032"
                ]
              },
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uC7841-\uB2E4",
                condition: "\uB451 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uB451\uC774 \uC5C6\uB294 \uD070\uBB3C\uC740 \uD55C\uACF3\uC5D0 \uBA38\uBB3C\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C \uC5EC\uB7EC \uC77C\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uBC8C\uC774\uACE0, \uB05D\uC744 \uBCF4\uAE30 \uC804\uC5D0 \uB2E4\uC74C\uC73C\uB85C \uB118\uC5B4\uAC00\uB294 \uC77C\uC774 \uC7A6\uC558\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uB451\uC774 \uC5C6\uC5B4 \uACE0\uC77C \uC218 \uC5C6\uB294 \uBB3C\uC740, \uBC14\uB2E4 \uAC74\uB108 \uB2E4\uB978 \uB545\uC5D0 \uB2FF\uC744 \uB54C \uBE44\uB85C\uC18C \uD769\uC5B4\uC9D0\uC774 \uBA48\uCDA5\uB2C8\uB2E4. \uBA38\uBB3C \uACF3\uC744 \uCC3E\uAE30\uBCF4\uB2E4 \uD758\uB7EC\uAC08 \uACF3\uC744 \uBA3C\uC800 \uC815\uD558\uC138\uC694.",
                evidence: [
                  "R2.IM.010",
                  "R2.IM.023",
                  "R2.IM.080"
                ],
                source: [
                  "R2.IM.010",
                  "R2.IM.023",
                  "R2.IM.080"
                ]
              },
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uAC00\uB450\uB294 \uB545 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uC7841-\uB2E4(\uC77C)",
                condition: "\uB451 \uC5C6\uC74C (\uC77C \uC139\uC158 \uD750\uB984)",
                slots: [
                  "\uC77C3",
                  "\uC77C4"
                ],
                diagnosis: "\uB118\uCE58\uB294 \uBB3C\uC740 \uC81C\uBC29\uC744 \uB9CC\uB4E4\uC5B4 \uBAA8\uC544\uC57C \uC4F0\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uAC00\uB458 \uB545\uC774 \uBD80\uC871\uD558\uB2C8, \uAD6D\uACBD\uC744 \uB118\uC5B4 \uC81C\uBC29\uC744 \uB9CC\uB098\uAC70\uB098 \uC624\uD788\uB824 \uBB3C\uAE38\uC744 \uD130 \uC8FC\uC5B4 \uC0AC\uB78C\uACFC \uBB3C\uAC74\uACFC \uC815\uBCF4\uAC00 \uC624\uAC00\uB294 \uC720\uD1B5\uC758 \uC77C\uC774 \uC798 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.020",
                  "R2.IM.023"
                ],
                source: [
                  "R2.IM.020",
                  "R2.IM.023"
                ],
                note: "\uC6D0\uBB38 (\uC77C) \uC139\uC158 \uD750\uB984 \uAC00\uC9C0"
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uAC00",
                condition: "\uC0B0\uB9E5 + \uD070 \uB098\uBB34",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uB451\uC5D0 \uD070 \uB098\uBB34\uAC00 \uBFCC\uB9AC\uB0B4\uB824 \uBB3C\uC774 \uB9D1\uC2B5\uB2C8\uB2E4. \uC790\uB9AC\uC640 \uACC1\uC774 \uB2E8\uB2E8\uD569\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.012",
                  "R2.IM.070"
                ],
                source: [
                  "R2.IM.012",
                  "R2.IM.070"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uB098",
                condition: "\uC0B0\uB9E5 + \uB098\uBB34 \uC5C6\uC74C (\uC6B4\uC5D0\uC11C \uB451\uC774 \uB4E4\uC5B4\uC62C \uB54C\uB3C4 \uAC19\uB2E4)",
                slots: [
                  "\uC77C5",
                  "\uC0AC7",
                  "\uC0AC8"
                ],
                diagnosis: "\uD759\uC73C\uB85C\uB9CC \uC313\uC740 \uB451\uC740 \uD63C\uC790 \uBC84\uD2F0\uC9C0 \uBABB\uD558\uACE0 \uC4F8\uB824 \uAC11\uB2C8\uB2E4.",
                prescription: "\uADF8\uB798\uC11C \uADF8 \uD759\uC5D0 \uB098\uBB34\uB97C \uC2EC\uB294 \uC77C, \uACE7 \uBB34\uC5B8\uAC00\uB97C \uD0A4\uC6B0\uACE0 \uB9CC\uB4DC\uB294 \uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uC57C\uAE30\uB97C \uC9D3\uB4E0, \uACF5\uAC04\uC744 \uC9D3\uB4E0, \uC0AC\uB78C\uC744 \uAE30\uB974\uB4E0 \uC790\uB77C\uB294 \uAC83\uC744 \uACC1\uC5D0 \uB450\uB294 \uC77C\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.012",
                  "R2.IM.030",
                  "R2.IM.083",
                  "R2.IM.084"
                ],
                source: [
                  "R2.IM.012",
                  "R2.IM.030",
                  "R2.IM.083",
                  "R2.IM.084"
                ]
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uB098\u2032",
                condition: "\uC704 \uAC00\uC9C0 + \uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC77C5"
                ],
                diagnosis: "\uACC1\uC758 \uC791\uC740 \uB545\uC774 \uD070 \uB098\uBB34\uB97C \uBD88\uB7EC\uC640 \uB451\uC5D0 \uC2EC\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.075"
                ],
                source: [
                  "R2.IM.075"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uB2E4",
                condition: "\uC0B0\uB9E5 + \uD478\uB978 \uB369\uAD74\uB9CC",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C5"
                ],
                diagnosis: "\uD070 \uB451\uC5D0 \uC791\uC740 \uB369\uAD74\uC774 \uC2EC\uC5B4\uC838, \uD070\uBB3C\uC774 \uB4E4\uBA74 \uBC84\uD2F0\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uB9E1\uC740 \uC790\uB9AC\uB098 \uACC1\uC758 \uC77C\uC774 \uC790\uB9AC\uAC00 \uD754\uB4E4\uB9AC\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB369\uAD74\uC774 \uC544\uB2C8\uB77C \uD070 \uB098\uBB34\uB97C \uD0A4\uC6B0\uC138\uC694. \uC624\uB798 \uAE4A\uAC8C \uAE30\uB974\uB294 \uC77C\uC774 \uB451\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.031",
                  "R2.IM.083"
                ],
                source: [
                  "R2.IM.031",
                  "R2.IM.083"
                ]
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uB77C",
                condition: "\uC791\uC740 \uB545 + \uD070 \uB098\uBB34",
                slots: [
                  "\uC0AC7"
                ],
                diagnosis: "\uC791\uC740 \uB451\uC5D0 \uD070 \uB098\uBB34\uAC00 \uC790\uB77C \uB451\uC774 \uBB34\uB108\uC9C0\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                evidence: [
                  "R2.IM.032"
                ],
                source: [
                  "R2.IM.032"
                ],
                note: "\uC790\uB8CC \uC5C6\uC74C \uD45C\uC2DC \uAC00\uC9C0 (\uBB38\uC11C \uB05D \uC790\uB8CC \uC5C6\uC74C \uBAA9\uB85D)"
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uB9C8",
                condition: "\uD070 \uB098\uBB34 + \uB545 \uC5C6\uC74C",
                slots: [
                  "\uACC44"
                ],
                diagnosis: "\uB545 \uC5C6\uC774 \uBB3C \uC704\uC5D0 \uB72C \uB098\uBB34\uB77C \uC81C\uB300\uB85C \uC790\uB77C\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB098\uBB34\uB97C \uC2EC\uC744 \uB545\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.IM.070"
                ],
                source: [
                  "R2.IM.070"
                ]
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uBC14",
                condition: "\uC791\uC740 \uB545\uACFC \uD070 \uB098\uBB34\uAC00 \uBB36\uC5EC \uC788\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC42"
                ],
                diagnosis: "\uC791\uC740 \uB451\uC5D0 \uBB36\uC778 \uD070 \uB098\uBB34\uAC00 \uC790\uB784\uC218\uB85D \uB451\uC774 \uBC84\uAC70\uC6CC\uC9D1\uB2C8\uB2E4.",
                prescription: "\uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uACE0, \uADF8\uB54C \uC790\uB9AC\uAC00 \uD754\uB4E4\uB9AC\uC9C0 \uC54A\uAC8C \uBBF8\uB9AC \uAE30\uBC18\uC744 \uB2E4\uC9C0\uC138\uC694.",
                evidence: [
                  "R2.IM.081"
                ],
                source: [
                  "R2.IM.081"
                ]
              },
              {
                stage: 2,
                stageName: "\uB451\uC758 \uB098\uBB34",
                stageNote: "\uB451\uC744 \uBD99\uC7A1\uB294 \uBFCC\uB9AC",
                code: "\uC7842-\uC0AC",
                condition: "\uD478\uB978 \uB369\uAD74 + \uAE08 \uC5C6\uC74C",
                slots: [
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C \uC704\uC758 \uBD80\uCD08 \uAC19\uC740 \uB369\uAD74\uC774\uC9C0\uB9CC, \uAE08\uB9E5\uC744 \uBD88\uB7EC\uC640 \uBB3C\uC744 \uB9C8\uB974\uC9C0 \uC54A\uAC8C \uD574 \uC90D\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB369\uAD74\uC774 \uBD88\uB7EC\uC624\uB294 \uC190\uAE38, \uACE7 \uAE30\uC900\uACFC \uAE30\uC220\uC758 \uC77C\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.IM.071"
                ],
                source: [
                  "R2.IM.071"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uD638\uC218 \uC704\uC758 \uBE5B (\uC7AC\uBB3C\uACFC \uC774\uB984)",
                code: "\uC7843-\uAC00",
                condition: "\uD0DC\uC591 + \uBB3C\uC774 \uB9D1\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC7AC1"
                ],
                diagnosis: "\uB9D1\uC740 \uD638\uC218 \uC704\uC5D0 \uD574\uAC00 \uB72C \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC774\uB984\uACFC \uC7AC\uBB3C\uC774 \uD568\uAED8 \uBC18\uC9DD\uC785\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC744 \uBA3C\uC800 \uC138\uC6B0\uC138\uC694. \uC0AC\uB78C\uC744 \uBD88\uB7EC \uBAA8\uC73C\uACE0 \uBCA0\uD480\uC218\uB85D \uB354 \uD06C\uAC8C \uB3CC\uC544\uC635\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.013",
                  "R2.IM.041"
                ],
                source: [
                  "R2.IM.013",
                  "R2.IM.041"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uD638\uC218 \uC704\uC758 \uBE5B (\uC7AC\uBB3C\uACFC \uC774\uB984)",
                code: "\uC7843-\uB098",
                condition: "\uD0DC\uC591 + \uBB3C\uC774 \uD750\uB824\uC9D0",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uBB3C\uC774 \uD750\uB824 \uD574\uAC00 \uBE44\uCCD0\uB3C4 \uBC18\uC9DD\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC798\uD574\uB3C4 \uC190\uC5D0 \uB0A8\uB294 \uAC83\uC774 \uC801\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4(1\uCE35 \uD0C1\uC218 \uD574\uBC95).",
                evidence: [
                  "R2.IM.040",
                  "1\uCE35 \uD0C1\uC218"
                ],
                source: [
                  "R2.IM.040",
                  "1\uCE35 \uD0C1\uC218"
                ],
                note: "1\uCE35 \uD0C1\uC218"
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uD638\uC218 \uC704\uC758 \uBE5B (\uC7AC\uBB3C\uACFC \uC774\uB984)",
                code: "\uC7843-\uB2E4",
                condition: "\uD0DC\uC591 + \uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C (\uAC00\uB9BC)",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC7AC2",
                  "\uC7AC7"
                ],
                diagnosis: "\uC774\uBBF8 \uB2F9\uC2E0\uC744 \uBE44\uCD94\uB294 \uD574\uAC00 \uB5A0 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0\uB370 \uBC14\uB85C \uC606\uC5D0\uC11C \uBE44\uAC00 \uB0B4\uB9AC\uACE0 \uC788\uC5B4\uC11C, \uAC00\uC7A5 \uC798\uD588\uB358 \uC21C\uAC04\uC5D0\uB3C4 \uC774\uB984\uC774 \uC798 \uB0A8\uC9C0 \uC54A\uC558\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uD070 \uB451\uC774 \uB4E4\uC5B4\uC640 \uBE44\uB97C \uAC70\uB450\uB294 \uB54C\uC5D0 \uD574\uAC00 \uCC98\uC74C\uC73C\uB85C \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4. \uADF8\uB54C \uB3C8\uC740 \uB545\uC5D0\uC11C \uC5F4\uB9BD\uB2C8\uB2E4. \uACF5\uAC04\uACFC \uD130, \uC9D3\uB294 \uC77C\uC5D0 \uB2FF\uC544 \uC788\uB294 \uC77C\uC774 \uB3C8\uC758 \uBB38\uC744 \uC5FD\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.061"
                ],
                source: [
                  "R2.IM.061"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uD638\uC218 \uC704\uC758 \uBE5B (\uC7AC\uBB3C\uACFC \uC774\uB984)",
                code: "\uC7843-\uB77C",
                condition: "\uD0DC\uC591 + \uB451 \uC5C6\uC74C",
                slots: [
                  "\uC7AC1"
                ],
                diagnosis: "\uB451\uC774 \uC5C6\uC5B4 \uBB3C\uC774 \uD758\uB7EC\uAC08 \uB54C, \uD574\uAC00 \uBCF4\uC11D\uC744 \uBD88\uB7EC\uC640 \uBB3C\uC744 \uB2E4\uC2DC \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. \uB2E4\uB9CC \uBE44\uAC00 \uB4E4\uBA74 \uADF8 \uD574\uAC00 \uAC00\uB824\uC9D1\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.072"
                ],
                source: [
                  "R2.IM.072"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uD638\uC218 \uC704\uC758 \uBE5B (\uC7AC\uBB3C\uACFC \uC774\uB984)",
                code: "\uC7843-\uB9C8",
                condition: "\uD0DC\uC591\uC774 \uD0DC\uC5B4\uB09C \uD574\uC5D0 \uC788\uC74C (\uC7AC\uBB3C\uC758 \uD310)",
                slots: [
                  "\uC77C2",
                  "\uC7AC1"
                ],
                diagnosis: "\uC7AC\uBB3C\uC740 \uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00\uC774\uB098, \uAD6D\uAC00\uC2DC\uD5D8\uC73C\uB85C \uB530\uB77C\uC624\uB294 \uC790\uACA9\uACFC \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB984\uC774 \uAC78\uB9AC\uACE0 \uAE30\uB85D\uC774 \uB0A8\uB294 \uC77C\uC77C\uC218\uB85D \uD798\uC774 \uBD99\uC2B5\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "\uAD6D\uAC00\uC790\uB9AC \uD310\uC815",
                  "R2.IM.041"
                ],
                source: [
                  "\uAD6D\uAC00\uC790\uB9AC \uD310\uC815",
                  "R2.IM.041"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014, \uAD6D\uAC00\uC790\uB9AC \uD310\uC815 \uAC00\uC9C0"
              },
              {
                stage: 4,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08\uB9E5",
                code: "\uC7844-\uAC00",
                condition: "\uAE08 \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uC548\uC5D0 \uB9C8\uB974\uC9C0 \uC54A\uB294 \uC218\uC6D0\uC774 \uC788\uC5B4 \uC9C0\uCCD0\uB3C4 \uB2E4\uC2DC \uCC28\uC624\uB985\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.014"
                ],
                source: [
                  "R2.IM.014"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 4,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08\uB9E5",
                code: "\uC7844-\uB098",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uAE08\uB9E5\uC774 \uBB3C\uC5D0\uC11C \uB180\uBA70 \uC218\uB7C9\uC744 \uC9C0\uCF1C \uC90D\uB2C8\uB2E4. \uB451\uACFC \uD070 \uB098\uBB34\uAC00 \uAC16\uCDB0\uC9C0\uBA74 \uADF8 \uB098\uBB34\uB97C \uC190\uC7A1\uC774 \uC0BC\uC544 \uAD8C\uD55C\uC744 \uC501\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC5D0\uC11C \uC774\uB984\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uAD6C\uC870\uB77C \uBA85\uC608\uB97C \uC887\uC73C\uC138\uC694.",
                evidence: [
                  "R2.IM.076"
                ],
                source: [
                  "R2.IM.076"
                ]
              },
              {
                stage: 4,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08\uB9E5",
                code: "\uC7844-\uB098(\uC77C)",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 + \uC6B4\uC5D0\uC11C \uB451\uC774 \uB4E4\uC5B4\uC624\uACE0 \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC77C6"
                ],
                diagnosis: "\uC190\uB05D\uC5D0\uB294 \uCEE4\uB2E4\uB780 \uAE08\uB9E5\uC774 \uC788\uC5B4 \uAE30\uC220\uACFC \uB3C4\uAD6C\uB97C \uB2E4\uB8E8\uB294 \uAC10\uAC01\uC774 \uC88B\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB2E4\uB9CC \uB451\uC774 \uB4E4\uC5B4\uC624\uB294 \uC2DC\uAE30\uC5D0\uB294 \uB3C4\uAD6C\uAC00 \uC911\uC2EC\uC774 \uB418\uBA74 \uBB3C\uC774 \uD750\uB824\uC9C0\uB2C8, \uBB34\uC5C7\uC744 \uD0A4\uC6B8\uC9C0 \uBA3C\uC800 \uC815\uD558\uACE0 \uB3C4\uAD6C\uB294 \uADF8 \uB4A4\uC5D0 \uC950\uC138\uC694.",
                evidence: [
                  "R2.IM.023 vs 051"
                ],
                source: [
                  "R2.IM.023 vs 051"
                ],
                note: "\uC6D0\uBB38 (\uC77C) \uD45C\uAE30, \uADFC\uAC70 R2.IM.023 vs 051"
              },
              {
                stage: 4,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08\uB9E5",
                code: "\uC7844-\uB2E4",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC77C2"
                ],
                diagnosis: "\uBCF4\uC11D\uC774 \uD574\uB97C \uBD88\uB7EC\uC640 \uD638\uC218 \uC704\uC5D0 \uB744\uC6C1\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uC77C\uC5D0\uC11C \uD798\uC744 \uC501\uB2C8\uB2E4. \uB2E4\uB9CC \uD070 \uBB3C\uC0B4\uC5D0 \uC791\uC740 \uB0A0\uC774 \uBB34\uB38C\uC9C0\uAE30 \uC26C\uC6B0\uB2C8, \uBB3C\uC774 \uC794\uC794\uD574\uC9C0\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.IM.077"
                ],
                source: [
                  "R2.IM.077"
                ]
              },
              {
                stage: 4,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08\uB9E5",
                code: "\uC7844-\uB77C",
                condition: "\uAE08 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4",
                  "\uC77C6"
                ],
                diagnosis: "\uBB3C\uC744 \uCC44\uC6CC \uC904 \uC218\uC6D0\uC774 \uC5C6\uC5B4 \uC27D\uAC8C \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9CC\uB4DC\uB294 \uAE08\uB9E5\uC758 \uC77C(\uBC95\xB7\uAE08\uC735\xB7\uC758\uC57D), \uBC14\uB2E4 \uAC74\uB108\uC640 \uB2FF\uC740 \uC77C, \uC678\uAD6D\uACFC \uB2FF\uC740 \uC77C\uD130\uAC00 \uC218\uC6D0\uC774 \uB429\uB2C8\uB2E4. \uB2E8 \uB451\uB9CC \uC788\uACE0 \uB098\uBB34\uAC00 \uC5C6\uC5B4 \uD750\uB824\uC9C8 \uB54C\uB294 \uB098\uBB34\uC758 \uC77C\uC774 \uBA3C\uC800\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.050",
                  "R2.IM.051"
                ],
                source: [
                  "R2.IM.050",
                  "R2.IM.051"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C\uC758 \uC591",
                stageNote: null,
                code: "\uC7845-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 \uB458 \uC774\uC0C1",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C\uC774 \uACB9\uCCD0 \uB118\uCE69\uB2C8\uB2E4. \uB451\uB3C4 \uB098\uBB34\uB3C4 \uBC84\uD2F0\uAE30 \uC5B4\uB824\uC6B8 \uB9CC\uD07C \uD798\uC774 \uD07D\uB2C8\uB2E4.",
                prescription: "\uC218\uB7C9\uC744 \uC904\uC774\uB294 \uCABD\uC774 \uB2F5\uC785\uB2C8\uB2E4. \uB4F1\uBD88\uCC98\uB7FC \uB9C8\uC74C\uACFC \uC815\uC2E0\uC744 \uBC1D\uD788\uB294 \uC77C\uC774 \uBB3C\uC744 \uC794\uC794\uD558\uAC8C \uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.060"
                ],
                source: [
                  "R2.IM.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C\uC758 \uC591",
                stageNote: null,
                code: "\uC7845-\uB098",
                condition: "\uD638\uC218 \uB458 \uC774\uC0C1 + \uB451 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB118\uCE58\uB294 \uBB3C\uC774 \uBA38\uBB3C \uACF3 \uC5C6\uC774 \uD750\uB985\uB2C8\uB2E4.",
                prescription: "\uBC14\uB2E4 \uAC74\uB108 \uC0C8 \uB545\uC5D0 \uC790\uB9AC\uB97C \uC7A1\uB294 \uAC83\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uADF8\uAC8C \uC5B4\uB835\uB2E4\uBA74 \uB9C8\uC74C\uACFC \uC815\uC2E0\uC744 \uBC1D\uD788\uB294 \uC77C\uB85C \uBB3C\uC744 \uC794\uC794\uD558\uAC8C \uD558\uC138\uC694.",
                evidence: [
                  "R2.IM.078"
                ],
                source: [
                  "R2.IM.078"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C\uC758 \uC591",
                stageNote: null,
                code: "\uC7845-\uB2E4",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uC774 \uACB0\uAD6D \uD070\uBB3C\uB85C \uD569\uCCD0\uC838 \uD798\uC774 \uB429\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.062"
                ],
                source: [
                  "R2.IM.062"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 6,
                stageName: "\uB4F1\uBD88",
                stageNote: null,
                code: "\uC7846-\uAC00",
                condition: "\uB4F1\uBD88\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uB4F1\uBD88\uACFC \uD558\uB098\uB85C \uBB36\uC778 \uD638\uC218\uC785\uB2C8\uB2E4. \uBB3C\uC774 \uC794\uC794\uD574\uC9C0\uB294 \uB300\uC2E0 \uB113\uAC8C \uD3BC\uCE58\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uACFC \uC815\uC2E0\uC758 \uC138\uACC4\uB97C \uB2E4\uB8E8\uB294 \uC77C\uC5D0\uC11C \uAE4A\uC5B4\uC9D1\uB2C8\uB2E4. \uB098\uBB34\uAC00 \uC5C6\uC5B4 \uBB3C\uC774 \uD750\uB824\uC9C8 \uB54C\uB294 \uC774 \uBB36\uC784\uC774 \uC624\uD788\uB824 \uB098\uBB34\uB97C \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.073",
                  "R2.IM.042"
                ],
                source: [
                  "R2.IM.073",
                  "R2.IM.042"
                ]
              },
              {
                stage: 7,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC7847-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D2"
                ],
                diagnosis: "\uC5B4\uB514\uC5D0\uB3C4 \uACE0\uC774\uC9C0 \uC54A\uC558\uAE30\uC5D0 \uB9CE\uC740 \uACF3\uC744 \uC9C0\uB098\uC654\uACE0, \uADF8\uB9CC\uD07C \uB9CE\uC740 \uAC83\uC744 \uD488\uC5C8\uC2B5\uB2C8\uB2E4. \uD769\uC5B4\uC84C\uB358 \uC2DC\uAC04\uB9CC\uD07C \uB2F9\uC2E0\uC758 \uD638\uC218\uB294 \uB113\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.IM.002"
                ],
                source: [
                  "R2.IM.002"
                ],
                note: "\uD2B9\uC131 \uB2E8\uACC4 \u2014 \uBB38\uC7A5 \uCE78 \uD558\uB098, \uCC98\uBC29 \uCE78 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C"
              }
            ],
            C: [
              {
                code: "\uC784\uC6B4-\uAC00",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uD3C9\uC0DD \uCC98\uC74C\uC73C\uB85C, \uD639\uC740 \uB2E4\uC2DC \uD070 \uB451\uC774 \uB4E4\uC5B4\uC624\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uD769\uC5B4\uC9C0\uB358 \uD798\uC744 \uBD99\uC7A1\uC544 \uC904 \uC790\uB9AC\uC640 \uACC1\uC774 \uC0DD\uAE41\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.011",
                  "R2.IM.020"
                ],
                source: [
                  "R2.IM.011",
                  "R2.IM.020"
                ]
              },
              {
                code: "\uC784\uC6B4-\uB098",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5 (\uC2DC\uB0C7\uBB3C\uC774 \uD574\uB97C \uAC00\uB9B4 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC43"
                ],
                sentence: "\uB451\uC774 \uBE44\uB97C \uAC70\uB46C \uAC00\uB824\uC84C\uB358 \uD574\uAC00 \uB4DC\uB7EC\uB098\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.061"
                ],
                source: [
                  "R2.IM.061"
                ]
              },
              {
                code: "\uC784\uC6B4-\uB2E4",
                incoming: "\uD070 \uB098\uBB34 (\uB451\uC774 \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                sentence: "\uB451\uC5D0 \uD070 \uB098\uBB34\uAC00 \uBFCC\uB9AC\uB0B4\uB824 \uC313\uC740 \uAC83\uC774 \uB2E8\uB2E8\uD55C \uACB0\uC2E4\uB85C \uAD73\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.012",
                  "R2.IM.070"
                ],
                source: [
                  "R2.IM.012",
                  "R2.IM.070"
                ]
              },
              {
                code: "\uC784\uC6B4-\uB77C",
                incoming: "\uC791\uC740 \uB545 (\uB451\uC774 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uACC41"
                ],
                sentence: "\uCC98\uC74C\uC73C\uB85C \uC791\uC740 \uC6B8\uD0C0\uB9AC\uAC00 \uC138\uC6CC\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB118\uCE58\uB294 \uD798\uC744 \uB2F4\uAE30\uC5D4 \uC870\uAE08 \uC881\uAC8C \uB290\uAEF4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.021"
                ],
                source: [
                  "R2.IM.021"
                ]
              },
              {
                code: "\uC784\uC6B4-\uB9C8",
                incoming: "\uB4F1\uBD88",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uC740\uC740\uD55C \uB4F1\uBD88\uACFC \uD558\uB098\uB85C \uBB36\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB113\uD788\uAE30\uBCF4\uB2E4 \uC548\uC73C\uB85C \uC815\uB9AC\uD558\uAE30 \uC88B\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.073"
                ],
                source: [
                  "R2.IM.073"
                ]
              },
              {
                code: "\uC784\uC6B4-\uBC14",
                incoming: "\uB4F1\uBD88\uC774\uB098 \uD638\uC218\uAC00 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uC790\uB9AC\uAC00 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "1\uCE35 \xA77"
                ],
                source: [
                  "1\uCE35 \xA77"
                ],
                note: "\uADFC\uAC70 \uC6D0\uBB38 1\uCE35 \xA77"
              },
              {
                code: "\uC784\uC6B4-\uC0AC",
                incoming: "\uD0DC\uC591\uC774 \uD558\uB098 \uB354 \uC634",
                slots: [
                  "\uC7AC4",
                  "\uACC44"
                ],
                sentence: "\uD558\uB298\uC5D0 \uD574\uAC00 \uD558\uB098 \uB354 \uB5A0 \uC624\uD788\uB824 \uBE5B\uC774 \uD750\uB824\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC5EC\uB7EC \uAC08\uB798\uB85C \uBC8C\uC774\uAE30\uBCF4\uB2E4 \uD558\uB098\uB97C \uACE8\uB77C \uAE4A\uAC8C \uAC00\uC138\uC694.",
                evidence: [
                  "R2.IM.090"
                ],
                source: [
                  "R2.IM.090"
                ]
              },
              {
                code: "\uC784\uC6B4-\uC544",
                incoming: "\uD070 \uB098\uBB34\uB098 \uC138\uACF5\uB41C \uBCF4\uC11D (\uD574\uAC00 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACB9\uCE5C \uD574 \uD558\uB098\uAC00 \uAC00\uB824\uC9C0\uAC70\uB098 \uC815\uB9AC\uB418\uC5B4 \uD750\uB984\uC774 \uB2E4\uC2DC \uC7A1\uD788\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.090"
                ],
                source: [
                  "R2.IM.090"
                ]
              },
              {
                code: "\uC784\uC6B4-\uC790",
                incoming: "\uAE08 (\uC6D0\uAD6D\uC5D0 \uAE08 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uB974\uB358 \uBB3C\uC774 \uB2E4\uC2DC \uCC28\uC624\uB974\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.IM.050"
                ],
                source: [
                  "R2.IM.050"
                ]
              },
              {
                code: "\uC784\uC6B4-\uCC28",
                incoming: "\uC791\uC740 \uB545\uC774\uB098 \uD070 \uB098\uBB34\uAC00 \uB2E4\uC2DC \uC634 (\uB458\uC774 \uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uB451\uACFC \uB098\uBB34\uAC00 \uD480\uB824 \uC790\uB9AC\uAC00 \uC6C0\uC9C1\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uBBF8\uB9AC \uAE30\uBC18\uC744 \uB2E4\uC838 \uB450\uC138\uC694.",
                evidence: [
                  "R2.IM.081"
                ],
                source: [
                  "R2.IM.081"
                ]
              }
            ],
            D: [
              {
                item: "\uBC30\uC6B0\uC790 \uBB38\uC81C\xB7\uC704\uC7A5\uACC4\uD1B5",
                evidence: [
                  "R2.IM.022"
                ],
                source: [
                  "R2.IM.022"
                ]
              },
              {
                item: "\uBC30\uC6B0\uC790\xB7\uC9C1\uC7A5 \uBB38\uC81C",
                evidence: [
                  "R2.IM.031",
                  "R2.IM.081"
                ],
                source: [
                  "R2.IM.031",
                  "R2.IM.081"
                ],
                note: '"\uC790\uB9AC\uAC00 \uD754\uB4E4\uB9BC"\uAE4C\uC9C0\uB9CC'
              },
              {
                item: "\uB0A8\uC790 \uB54C\uBB38\uC5D0 \uBA85\uC608 \uC2E4\uCD94",
                evidence: [
                  "R2.IM.082"
                ],
                source: [
                  "R2.IM.082"
                ]
              },
              {
                item: "\uBC95\uC801 \uBB38\uC81C",
                evidence: [
                  "R2.IM.085"
                ],
                source: [
                  "R2.IM.085"
                ]
              },
              {
                item: "\uC0B6\uC774 \uC6D0\uB9CC\uD558\uC9C0 \uBABB\uD558\uB2E4\uB294 \uC6D0\uBB38",
                evidence: [
                  "R2.IM.080"
                ],
                source: [
                  "R2.IM.080"
                ]
              },
              {
                item: '\uAC00\uB9BC\uC744 "\uBE44\uC2B7\uD55C \uC0AC\uB78C\uB4E4"\uB85C \uC77D\uB294 \uD574\uC11D',
                note: "[\uBCF4\uB958]"
              }
            ]
          },
          \u7678: {
            name: "\uACC4\uC218 \u2014 \uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C",
            sourcePage: "PDF page 43-46 (10. \uACC4\uC218)",
            _note: "PDF 10\uC7A5(pp.43~46) \uC804\uC0AC. A \uD0A4\uB294 '\uC2AC\uB86F\uCF54\uB4DC \uB77C\uBCA8' \uBCD1\uAE30(\uAC80\uC99D\uAE30 V6 \uD638\uD658). B\u5404\u884C source\uB294 \uAC80\uC99D\uAE30 V5 \uC694\uAD6C \uD544\uB4DC\uB85C evidence\uC640 \uB3D9\uC77C \uAC12. \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uBE44\uB294 \uAC00\uC9C0\uB294 \u2014 \uD45C\uAE30. (\uC77C) \uD45C\uAE30 \uAC00\uC9C0\uB294 \uC77C \uC139\uC158 \uD750\uB984 \uAC00\uC9C0. 6\uB2E8\uACC4(\uD2B9\uC131)\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098\uB77C \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C(\u2014).",
            A: {
              "\uC0AC1 \uD615\uC0C1": {
                text: "\uB2F9\uC2E0\uC740 \uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.GYE.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uC5B4\uB514\uB4E0 \uC2A4\uBA70\uB4E4\uC5B4 \uC801\uC2DC\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uB9D0\uC5C6\uC774 \uB9CE\uC740 \uAC83\uC744 \uD488\uACE0, \uB9C9\uD788\uBA74 \uC720\uC5F0\uD558\uAC8C \uAE38\uC744 \uCC3E\uC544 \uB3CC\uC544\uAC11\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uCE5C\uADFC\uD558\uACE0 \uACB8\uC190\uD574 \uBCF4\uC785\uB2C8\uB2E4. \uB204\uAD6C\uC640\uB3C4 \uAE08\uC138 \uC5B4\uC6B8\uB9AC\uB294\uB370, \uC18D\uC740 \uC27D\uAC8C \uB0B4\uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.002"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uC0C1\uD669\uC744 \uC77D\uACE0 \uC21C\uAC04\uC5D0 \uB9DE\uAC8C \uC6C0\uC9C1\uC774\uB294 \uC9C0\uD61C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC791\uC740 \uBE44\uAC00 \uB545\uC744 \uC0B4\uB9AC\uB4EF, \uB2F9\uC2E0\uC774 \uB2FF\uC740 \uC790\uB9AC\uB294 \uC0B4\uC544\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.002",
                  "R2.GYE.010"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uC2A4\uBA70\uB4E4\uACE0 \uC801\uC2DC\uB294 \uD798\uC785\uB2C8\uB2E4. \uC0AC\uB78C\uACFC \uC0AC\uB78C \uC0AC\uC774\uB85C \uD758\uB7EC \uAD00\uACC4\uB97C \uC787\uACE0, \uB9D0\uB85C \uB9C8\uC74C\uC744 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.002",
                  "R2.GYE.003"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uC791\uC740 \uBB3C\uC740 \uC54C\uB9DE\uC740 \uADF8\uB987\uC5D0 \uB2F4\uAE38 \uB54C \uB9D1\uAC8C \uACE0\uC785\uB2C8\uB2E4. \uAC10\uB2F9\uD560 \uB9CC\uD55C \uD06C\uAE30\uC758 \uC77C\uACFC \uC7AC\uBB3C\uC744 \uAFB8\uC900\uD788 \uCC44\uC6B8 \uB54C \uAC00\uC7A5 \uC624\uB798 \uB0A8\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.010",
                  "R2.GYE.071"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uC2DC\uB0C7\uBB3C\uC740 \uD750\uB974\uBA70 \uB2FF\uB294 \uACF3\uB9C8\uB2E4 \uC801\uC154 \uC90D\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uACC1\uC758 \uC0AC\uB78C\uC5D0\uAC8C \uC870\uC6A9\uD788 \uC2A4\uBA70\uB4E4\uC5B4 \uC0B4\uD53C\uACE0 \uB3CC\uBCF4\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uD769\uC5B4\uC9C0\uC9C0 \uC54A\uAC8C \uB2F4\uC544 \uC904 \uC54C\uB9DE\uC740 \uB451 \uAC19\uC740 \uC0AC\uB78C\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.010",
                  "R2.GYE.020"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uC791\uC740 \uB545(\uC54C\uB9DE\uC740 \uB451)\uC774 \uB4E4\uC5B4\uC62C \uB54C.",
                evidence: [
                  "R2.GYE.020"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uC2A4\uBA70\uB4DC\uB294 \uD798 / \uC791\uC9C0\uB9CC \uB9D1\uC740 \uBB3C",
                evidence: [
                  "R2.GYE.002",
                  "R2.GYE.071"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uD574\uC678, \uC720\uD1B5, \uC74C\uC2DD, \uC601\uC5C5, \uAD50\uC721.",
                evidence: [
                  "R2.GYE.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uB2F4\uB294 \uADF8\uB987 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uACC41-\uAC00",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC5F03"
                ],
                diagnosis: "\uC54C\uB9DE\uC740 \uB451\uC5D0 \uB2F4\uAE34 \uB9D1\uC740 \uBB3C\uC785\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB451\uC5D0 \uB369\uAD74\uC774 \uC2EC\uC5B4\uC9C0\uBA74 \uC77C\uACFC \uACC1\uC774 \uD3C9\uD654\uB86D\uAC8C \uD53C\uC5B4\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.010"
                ],
                source: [
                  "R2.GYE.010"
                ]
              },
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uB2F4\uB294 \uADF8\uB987 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uACC41-\uB098",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uD070 \uB545\uC5D0 \uBB36\uC778 \uC791\uC740 \uBB3C\uC774\uB77C \uC190\uBC1C\uC774 \uBB36\uC774\uACE0, \uBB3C\uC774 \uB113\uAC8C \uD37C\uC838 \uD750\uB824\uC9C0\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uACC4\uC18D \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uAE08\uB9E5\uC758 \uC77C, \uACE7 \uAE30\uC900\uACFC \uAE30\uC220\uC758 \uC77C\uC774 \uC218\uB7C9\uC744 \uB298\uB824 \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.021"
                ],
                source: [
                  "R2.GYE.021"
                ]
              },
              {
                stage: 1,
                stageName: "\uB451",
                stageNote: "\uBB3C\uC744 \uB2F4\uB294 \uADF8\uB987 (\uC790\uB9AC\uC640 \uACC1)",
                code: "\uACC41-\uB2E4",
                condition: "\uB451 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB2F4\uC544 \uC904 \uB451\uC774 \uC5C6\uC5B4, \uC791\uC740 \uBB3C\uC774 \uD769\uC5B4\uC838 \uD754\uC801\uC774 \uB0A8\uC9C0 \uC54A\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uBCF4\uD0E4 \uAE38\uC744 \uCC3E\uC73C\uC138\uC694. \uBC14\uB2E4 \uAC74\uB108\uC640 \uB2FF\uC740 \uC77C, \uC678\uAD6D\uACFC \uB2FF\uC740 \uC77C\uD130, \uAE30\uC900\uACFC \uAE30\uC220\uC758 \uC77C\uC774 \uBB3C\uC744 \uACC4\uC18D \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.022"
                ],
                source: [
                  "R2.GYE.022"
                ]
              },
              {
                stage: 2,
                stageName: "\uB098\uBB34",
                stageNote: "\uC801\uC154\uC11C \uAE30\uB974\uB294 \uAC83",
                code: "\uACC42-\uAC00",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uC791\uC740 \uB098\uBB34\uC5D0 \uC54C\uB9DE\uC740 \uBE44\uAC00 \uB0B4\uB824 \uC798 \uC790\uB78D\uB2C8\uB2E4. \uADF8 \uB369\uAD74\uC774 \uC218\uC6D0\uC744 \uBD88\uB7EC\uC640 \uBB3C\uB3C4 \uB9C8\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC791\uC740 \uBC30\uC6C0\uD130, \uAC00\uAE4C\uC6B4 \uC0AC\uB78C\uC744 \uD0A4\uC6B0\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.032",
                  "R2.GYE.030"
                ],
                source: [
                  "R2.GYE.032",
                  "R2.GYE.030"
                ]
              },
              {
                stage: 2,
                stageName: "\uB098\uBB34",
                stageNote: "\uC801\uC154\uC11C \uAE30\uB974\uB294 \uAC83",
                code: "\uACC42-\uB098",
                condition: "\uD070 \uB098\uBB34 \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C6"
                ],
                diagnosis: "\uD070 \uB098\uBB34\uAC00 \uBB3C\uC744 \uB9CE\uC774 \uBE68\uC544\uB4E4\uC5EC \uC27D\uAC8C \uB9C8\uB985\uB2C8\uB2E4. \uD06C\uAC8C \uD0A4\uC6B0\uB824 \uD560\uC218\uB85D \uB0B4\uAC00 \uBA3C\uC800 \uC9C0\uCE69\uB2C8\uB2E4.",
                prescription: "\uAE08\uB9E5\uC758 \uC77C\uB85C \uBB3C\uC744 \uBCF4\uD0DC\uC138\uC694. \uBC30\uC6C0\uC744 \uAE38\uAC8C \uAC00\uC838\uAC00\uB824\uBA74 \uBC14\uB2E4 \uAC74\uB108\uC5D0\uC11C \uBC30\uC6B0\uB294 \uCABD\uC774 \uBB3C\uC744 \uD568\uAED8 \uC5BB\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.031"
                ],
                source: [
                  "R2.GYE.031"
                ]
              },
              {
                stage: 2,
                stageName: "\uB098\uBB34",
                stageNote: "\uC801\uC154\uC11C \uAE30\uB974\uB294 \uAC83",
                code: "\uACC42-\uB2E4",
                condition: "\uC791\uC740 \uB545 + \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C\uACFC \uB451\uB9CC \uC788\uC5B4 \uD750\uB824\uC9D1\uB2C8\uB2E4.",
                prescription: "\uC791\uC740 \uB098\uBB34\uB97C \uC2EC\uB4EF, \uAC00\uAE4C\uC6B4 \uC0AC\uB78C\uC744 \uAC00\uB974\uCE58\uACE0 \uAE30\uB974\uB294 \uC77C\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.GYE.030"
                ],
                source: [
                  "R2.GYE.030"
                ]
              },
              {
                stage: 2,
                stageName: "\uB098\uBB34",
                stageNote: "\uC801\uC154\uC11C \uAE30\uB974\uB294 \uAC83",
                code: "\uACC42-\uB77C(\uC77C)",
                condition: "\uB098\uBB34 \uC788\uC74C (\uC77C \uC139\uC158)",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uAC74\uBB3C\uC744 \uC9D3\uAC70\uB098 \uC544\uC8FC \uAE38\uAC8C \uACF5\uBD80\uD558\uB294 \uC77C\uBCF4\uB2E4, \uC54C\uB9DE\uC740 \uD06C\uAE30\uC758 \uBC30\uC6C0\uACFC \uC9D3\uB294 \uC77C\uC5D0\uC11C \uB2A5\uB825\uC774 \uB0A9\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.GYE.071"
                ],
                source: [
                  "R2.GYE.071"
                ],
                note: "\uC6D0\uBB38 (\uC77C \uC139\uC158) \uD45C\uAE30, \uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 3,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08",
                code: "\uACC43-\uAC00",
                condition: "\uAE08 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uC774\uB77C \uC27D\uAC8C \uB9C8\uB974\uACE0 \uD750\uB824\uC9D1\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uCC44\uC6CC \uC8FC\uB294 \uAE08\uB9E5\uC758 \uC77C(\uBC95\xB7\uAE08\uC735\xB7\uAE30\uC220)\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uB3CC\uB85C \uB458\uB7EC\uC2FC \uC0D8\uBB3C\uC774 \uB9D1\uB4EF, \uB2E8\uB2E8\uD55C \uAE30\uC900 \uC548\uC5D0\uC11C \uB9D1\uC544\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.011"
                ],
                source: [
                  "R2.GYE.011"
                ]
              },
              {
                stage: 3,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08",
                code: "\uACC43-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uBCF4\uC11D\uC774 \uC218\uC6D0\uC774 \uB418\uC5B4 \uBB3C\uC744 \uCC44\uC6B0\uACE0, \uD574\uB97C \uBD88\uB7EC\uC640 \uC7AC\uBB3C\uB3C4 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uB451\uACFC \uB369\uAD74\uC774 \uAC16\uCDB0\uC9C0\uBA74 \uC815\uBC00\uD55C \uC77C\uC5D0\uC11C \uAD8C\uD55C\uC744 \uC501\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.050"
                ],
                source: [
                  "R2.GYE.050"
                ]
              },
              {
                stage: 3,
                stageName: "\uC218\uC6D0",
                stageNote: "\uBB3C\uC744 \uCC44\uC6B0\uB294 \uAE08",
                code: "\uACC43-\uB2E4",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uD070 \uAE08\uB9E5\uC774 \uB180\uAE30\uC5D4 \uBB3C\uC774 \uC595\uC9C0\uB9CC, \uB9C8\uB97C \uB54C\uB9C8\uB2E4 \uBB3C\uC744 \uCC44\uC6CC \uC8FC\uACE0 \uD750\uB824\uC9C8 \uB54C \uB369\uAD74\uC744 \uBD88\uB7EC\uC635\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.GYE.051"
                ],
                source: [
                  "R2.GYE.051"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 4,
                stageName: "\uD574\uC640 \uB4F1\uBD88",
                stageNote: "\uC7AC\uBB3C",
                code: "\uACC44-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C (\uC544\uB798\uC5D0 \uBE44 \uBFCC\uB9AC \uC57D\uD568)",
                slots: [
                  "\uC7AC1",
                  "\uC77C3"
                ],
                diagnosis: "\uD574\uB97C \uAC00\uB9AC\uC9C0\uB9CC, \uADF8 \uD574\uB97C \uC7AC\uBB3C\uB85C \uC958 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uB78C\uC744 \uD0A4\uC6CC \uAF43\uC744 \uD53C\uC6B0\uAC8C \uD558\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uC0AC\uB78C\uC744 \uAE38\uB7EC \uC131\uACFC\uB97C \uB0B4\uB294 \uC77C, \uD310\uC744 \uAFB8\uB9AC\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.041"
                ],
                source: [
                  "R2.GYE.041"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574\uC640 \uB4F1\uBD88",
                stageNote: "\uC7AC\uBB3C",
                code: "\uACC44-\uB098",
                condition: "\uD0DC\uC591 + \uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uBCD5\uC774 \uC138\uC11C \uC791\uC740 \uBB3C\uC774 \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uBCF4\uC11D\uC758 \uC77C, \uACE7 \uC815\uBC00\uD558\uACE0 \uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C\uC774 \uBB3C\uC744 \uBCF4\uD0ED\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.012"
                ],
                source: [
                  "R2.GYE.012"
                ]
              },
              {
                stage: 4,
                stageName: "\uD574\uC640 \uB4F1\uBD88",
                stageNote: "\uC7AC\uBB3C",
                code: "\uACC44-\uB2E4",
                condition: "\uB4F1\uBD88 \uC788\uC74C",
                slots: [
                  "\uC7AC1",
                  "\uC77C3"
                ],
                diagnosis: "\uB4F1\uBD88\uC744 \uC7AC\uBB3C\uB85C \uC950\uB294 \uBB3C\uC785\uB2C8\uB2E4. \uB9C8\uC74C\uACFC \uC815\uC2E0\uC758 \uC138\uACC4\uC640 \uC778\uC5F0\uC774 \uAE4A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uBB3C\uC774 \uB9C8\uB97C \uB54C \uADF8 \uB4F1\uBD88\uC774 \uD070\uBB3C\uC744 \uBD88\uB7EC\uC640 \uCC44\uC6CC \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.040"
                ],
                source: [
                  "R2.GYE.040"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uBB3C",
                stageNote: null,
                code: "\uACC45-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uC774 \uACB0\uAD6D \uD070\uBB3C\uC5D0 \uD569\uCCD0\uC838 \uD798\uC774 \uB429\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.GYE.060"
                ],
                source: [
                  "R2.GYE.060"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \u2014"
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uBB3C",
                stageNote: null,
                code: "\uACC45-\uB098",
                condition: "\uC2DC\uB0C7\uBB3C \uB458",
                slots: [
                  "\uC0AC4",
                  "\uACC44"
                ],
                diagnosis: "\uBB3C\uC774 \uB458\uC774\uB77C \uC0AC\uB78C\uACFC \uC798 \uC5B4\uC6B8\uB9AC\uACE0 \uC0DD\uAC01\uC774 \uBE60\uB985\uB2C8\uB2E4.",
                prescription: "\uD070 \uB545\uC774 \uB4E4\uC5B4\uC640 \uD558\uB098\uB97C \uB370\uB824\uAC00\uB294 \uB54C\uC5D0 \uC54C\uB9DE\uC740 \uB451\uACFC \uD130\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.061"
                ],
                source: [
                  "R2.GYE.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uACC46-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D2",
                  "\uB05D3"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uC740 \uD06C\uAC8C \uBC8C\uC77C \uB54C\uBCF4\uB2E4 \uC54C\uB9DE\uC740 \uD06C\uAE30\uB85C \uAFB8\uC900\uD788 \uD750\uB97C \uB54C \uB9D1\uC2B5\uB2C8\uB2E4. \uADF8 \uB9D1\uC74C\uC774 \uB2F9\uC2E0\uC744 \uC624\uB798 \uC4F0\uC774\uAC8C \uD569\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.GYE.071"
                ],
                source: [
                  "R2.GYE.071"
                ],
                note: "\uD2B9\uC131 \uB2E8\uACC4 \u2014 \uBB38\uC7A5 \uCE78 \uD558\uB098, \uCC98\uBC29 \uCE78 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C"
              }
            ],
            C: [
              {
                code: "\uACC4\uC6B4-\uAC00",
                incoming: "\uC791\uC740 \uB545",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uC54C\uB9DE\uC740 \uB451\uC774 \uB4E4\uC5B4\uC640 \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.020"
                ],
                source: [
                  "R2.GYE.020"
                ]
              },
              {
                code: "\uACC4\uC6B4-\uB098",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5",
                slots: [
                  "\uACC42",
                  "\uC7AC3"
                ],
                slotNote: "\uACC42 \uD544\uC218",
                sentence: "\uD070 \uB545\uC5D0 \uBB36\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB300\uC2E0 \uADF8 \uBB36\uC784\uC5D0\uC11C \uBE5B\uC774 \uC0DD\uACA8 \uC7AC\uBB3C\uACFC \uD130\uAC00 \uB4E4\uC5B4\uC624\uAE30 \uC88B\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.021",
                  "R2.GYE.023"
                ],
                source: [
                  "R2.GYE.021",
                  "R2.GYE.023"
                ]
              },
              {
                code: "\uACC4\uC6B4-\uB2E4",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5 (\uC2DC\uB0C7\uBB3C\uC774 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44",
                  "\uC7AC5"
                ],
                sentence: "\uACC1\uC758 \uBB3C\uC774 \uC815\uB9AC\uB418\uBA70 \uC54C\uB9DE\uC740 \uB451\uACFC \uD130\uAC00 \uC0DD\uAE30\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.061"
                ],
                source: [
                  "R2.GYE.061"
                ]
              },
              {
                code: "\uACC4\uC6B4-\uB77C",
                incoming: "\uC0B0\uB9E5\uC774\uB098 \uC2DC\uB0C7\uBB3C\uC774 \uB2E4\uC2DC \uC634 (\uC0B0\uB9E5\uC5D0 \uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uC608\uC678: \uB2E4\uB978 \uC77C\uAC04\uACFC \uB2EC\uB9AC, \uACC4\uC218\uB294 \uC774 \uBB36\uC784\uC774 \uD480\uB9B4 \uB54C \uBB3C\uC774 \uB354 \uD750\uB824\uC9C4\uB2E4. \uBB38\uC7A5: \uC790\uB9AC\uC640 \uACC1\uC774 \uD754\uB4E4\uB9AC\uAE30 \uC26C\uC6B4 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB113\uD788\uAE30 \uBCF4\uB2E4 \uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.070"
                ],
                source: [
                  "R2.GYE.070"
                ],
                note: "[\uC120\uC0DD\uB2D8 \uD655\uC778 \uC911]"
              },
              {
                code: "\uACC4\uC6B4-\uB9C8",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D (\uBCD5\uC774 \uC140 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uB974\uB358 \uBB3C\uC5D0 \uB2E4\uC2DC \uBB3C\uC774 \uCC28\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.012"
                ],
                source: [
                  "R2.GYE.012"
                ]
              },
              {
                code: "\uACC4\uC6B4-\uBC14",
                incoming: "\uAE08 (\uC6D0\uAD6D\uC5D0 \uAE08 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC218\uC6D0\uC774 \uC0DD\uACA8 \uBB3C\uC774 \uB9C8\uB974\uC9C0 \uC54A\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.011"
                ],
                source: [
                  "R2.GYE.011"
                ]
              },
              {
                code: "\uACC4\uC6B4-\uC0AC",
                incoming: "\uB4F1\uBD88 (\uBB3C\uC774 \uB9C8\uB97C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB4F1\uBD88\uC774 \uD070\uBB3C\uC744 \uBD88\uB7EC\uC640 \uBB3C\uC774 \uB2E4\uC2DC \uCC28\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.GYE.040"
                ],
                source: [
                  "R2.GYE.040"
                ]
              }
            ],
            D: [
              {
                item: "\uAD8C\uBAA8\uC220\uC218",
                evidence: [
                  "R2.GYE.002"
                ],
                source: [
                  "R2.GYE.002"
                ],
                note: "\uC6D0\uBB38"
              },
              {
                item: "\uC544\uD30C\uD2B8 \uCD94\uCCA8 \uB2F9\uCCA8 \uC0AC\uB840",
                evidence: [
                  "R2.GYE.023"
                ],
                source: [
                  "R2.GYE.023"
                ],
                note: "\uD2B9\uC815 \uACB0\uACFC \uB2E8\uC815"
              },
              {
                item: "\uBB36\uC784\uC774 \uD480\uB9B4 \uB54C\uC758 \uC774\uC131 \uBB38\uC81C",
                evidence: [
                  "R2.GYE.070"
                ],
                source: [
                  "R2.GYE.070"
                ]
              },
              {
                item: '"\uC624\uB798 \uACF5\uBD80\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uB2E4"',
                evidence: [
                  "R2.GYE.031"
                ],
                source: [
                  "R2.GYE.031"
                ],
                note: "\uC6D0\uBB38 \u2014 \uACB0\uC815 \uC601\uD5A5"
              }
            ]
          },
          \u4E59: {
            name: "\uC744\uBAA9 \u2014 \uD478\uB978 \uB369\uAD74",
            A: {
              \uC0AC1: {
                text: "\uB2F9\uC2E0\uC740 \uD478\uB978 \uB369\uAD74\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.EUL.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uC5B4\uB514\uC5D0 \uC2EC\uC5B4\uC9C0\uB4E0 \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uACE0, \uBC1F\uD600\uB3C4 \uB2E4\uC2DC \uC77C\uC5B4\uB098\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uAE30\uB308 \uACF3\uC774 \uC788\uC73C\uBA74 \uADF8\uAC83\uC744 \uD0C0\uACE0 \uB204\uAD6C\uBCF4\uB2E4 \uB192\uC774 \uC624\uB985\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uBD80\uB4DC\uB7FD\uACE0 \uC720\uC5F0\uD574 \uBCF4\uC774\uC9C0\uB9CC, \uD55C\uBC88 \uBED7\uAE30 \uC2DC\uC791\uD558\uBA74 \uB05D\uAE4C\uC9C0 \uAC11\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.002",
                  "R2.EUL.003"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uC740\uADFC\uD55C \uB048\uAE30\uC640 \uB3C4\uC804 \uC815\uC2E0\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC790\uB9AC\uBCF4\uB2E4 \uB354 \uD070 \uC774\uB984\uC744 \uBC14\uB77C\uBCF4\uBA70 \uAFB8\uC900\uD788 \uB098\uC544\uAC11\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.003"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uAE30\uB308 \uC904 \uC54C\uACE0 \uC774\uB04C \uC904 \uC544\uB294 \uD798\uC785\uB2C8\uB2E4. \uD070 \uC0AC\uB78C \uACC1\uC5D0\uC11C \uADF8 \uD798\uC744 \uBE4C\uB824 \uC790\uAE30 \uAE38\uC744 \uB113\uD799\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.003",
                  "R2.EUL.060"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC815\uC6D0\uC5D0\uC11C \uAC00\uC7A5 \uC544\uB984\uB2F5\uAC8C \uD53C\uB294 \uAF43\uC785\uB2C8\uB2E4. \uAC10\uB2F9\uD560 \uB9CC\uD55C \uD06C\uAE30\uC758 \uC7AC\uBB3C\uC744 \uB2E8\uB2E8\uD788 \uC958 \uB54C \uC0B6\uC774 \uD3B8\uD574\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.080"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uB369\uAD74\uC740 \uAE30\uB308 \uACF3\uC744 \uCC3E\uC544 \uAC10\uC544 \uC624\uB985\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uB9C8\uC74C\uC744 \uC900 \uC0AC\uB78C\uC5D0\uAC8C \uC628\uC804\uD788 \uAE30\uB300\uACE0, \uADF8 \uC0AC\uB78C\uACFC \uD568\uAED8 \uC790\uB78D\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uBC14\uB78C\uC744 \uB9C9\uC544 \uC904 \uC6B8\uD0C0\uB9AC \uAC19\uC740 \uACC1\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.002",
                  "R2.EUL.074"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uC791\uC740 \uB545(\uAD6C\uD68D\uB418\uACE0 \uC0DD\uBA85\uC744 \uC0B4\uAC8C \uD558\uB294 \uB545)\uC774 \uB4E4\uC5B4\uC62C \uB54C. \uB369\uAD74\uC774 \uB458\uC774\uBA74 \uCEE4\uB2E4\uB780 \uAE08\uB9E5\uC774 \uC640\uC11C \uD558\uB098\uB97C \uC815\uB9AC\uD560 \uB54C.",
                evidence: [
                  "R2.EUL.020",
                  "R2.EUL.062"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uBC1F\uD600\uB3C4 \uB2E4\uC2DC \uC77C\uC5B4\uB098\uB294 \uC0DD\uBA85\uB825 / \uAE30\uB308 \uC904 \uC544\uB294 \uD798",
                evidence: [
                  "R2.EUL.002"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uAD50\uC721, \uCD9C\uD310, \uC5B8\uB860, \uBB38\uD559, \uC608\uC220, \uC815\uCE58.",
                evidence: [
                  "R2.EUL.004"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uC7441-\uAC00",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC7AC1"
                ],
                diagnosis: "\uC6B8\uD0C0\uB9AC \uC788\uB294 \uC815\uC6D0\uC5D0 \uC2EC\uC5B4\uC9C4 \uAF43\uC785\uB2C8\uB2E4. \uC9C0\uCF1C \uC8FC\uB294 \uD14C\uB450\uB9AC \uC548\uC5D0\uC11C \uAC00\uC7A5 \uC544\uB984\uB2F5\uAC8C \uD54D\uB2C8\uB2E4.",
                prescription: "\uC6B8\uD0C0\uB9AC \uC548\uC758 \uC77C, \uAC00\uC815\uACFC \uAC00\uAE4C\uC6B4 \uC790\uB9AC\uB97C \uB2E8\uB2E8\uD788 \uAC00\uAFB8\uC138\uC694. \uADF8\uACF3\uC774 \uC7AC\uBB3C\uC758 \uC2DC\uC791\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.010",
                  "R2.EUL.074"
                ],
                source: [
                  "R2.EUL.010",
                  "R2.EUL.074"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uC7441-\uB098",
                condition: "\uD070 \uB545\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uBC14\uB78C\uB9C9\uC774 \uC5C6\uB294 \uB113\uC740 \uBC8C\uD310\uC5D0 \uC2EC\uC5B4\uC9C4 \uB369\uAD74\uC785\uB2C8\uB2E4. \uAD7D\uC774\uAC00 \uB9CE\uC740 \uAE38\uC744 \uAC78\uC5B4\uC654\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uD070 \uB545\uC744 \uD63C\uC790 \uB2E4 \uAC00\uC9C0\uB824 \uD558\uAE30\uBCF4\uB2E4, \uADF8 \uB545\uC5D0 \uC120 \uD070 \uB098\uBB34, \uACE7 \uBBFF\uC744 \uB9CC\uD55C \uC0AC\uB78C\uC774\uB098 \uC870\uC9C1\uC744 \uD0C0\uACE0 \uC624\uB974\uC138\uC694.",
                evidence: [
                  "R2.EUL.022",
                  "R2.EUL.073"
                ],
                source: [
                  "R2.EUL.022",
                  "R2.EUL.073"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uC7441-\uB2E4",
                condition: "\uB545 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC1"
                ],
                diagnosis: "\uBFCC\uB9AC\uB0B4\uB9B4 \uB545 \uC5C6\uC774 \uD0DC\uC5B4\uB098, \uC790\uB9AC\uB97C \uCC3E\uC544 \uC5EC\uB7EC \uACF3\uC744 \uC62E\uACA8 \uC654\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD55C \uAC00\uC9C0 \uC77C, \uD55C \uC77C\uD130\uB97C \uC815\uD574 \uAC70\uAE30\uC5D0 \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uC138\uC694. \uB369\uAD74\uC740 \uD55C \uBC88 \uAC10\uC740 \uACF3\uC5D0\uC11C \uAC00\uC7A5 \uB192\uC774 \uC624\uB985\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.023"
                ],
                source: [
                  "R2.EUL.023"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uC7441-\uB77C",
                condition: "\uB545 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uBFCC\uB9AC\uB0B4\uB9B4 \uACF3\uC774 \uC5EC\uB7EC \uAD70\uB370\uB77C \uB9C8\uC74C\uC774 \uC5EC\uB7EC \uACF3\uC5D0 \uAC78\uB9BD\uB2C8\uB2E4.",
                prescription: "\uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC870\uC9C1 \uC548\uC5D0\uC11C \uD55C \uC790\uB9AC\uB97C \uC9C0\uD0A4\uC138\uC694. \uCC98\uC74C \uB9FA\uC740 \uC790\uB9AC\uAC00 \uB2F9\uC2E0\uC758 \uC815\uC6D0\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.021"
                ],
                source: [
                  "R2.EUL.021"
                ]
              },
              {
                stage: 1,
                stageName: "\uB545",
                stageNote: "\uBFCC\uB9AC\uB0B4\uB9B4 \uC790\uB9AC\uC774\uC790 \uC7AC\uBB3C",
                code: "\uC7441-\uB9C8",
                condition: "\uB545 \uC788\uC74C + \uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uB545\uC774 \uBA54\uB9D0\uB77C \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uAE30 \uC5B4\uB835\uACE0, \uD558\uB358 \uC77C\uC744 \uBA48\uCD94\uACE0 \uC0C8 \uC790\uB9AC\uB97C \uCC3E\uB294 \uC77C\uC774 \uC7A6\uC558\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC774 \uC624\uAC00\uB294 \uC77C, \uBC14\uB2E4 \uAC74\uB108\uC640 \uB2FF\uB294 \uC77C\uC5D0\uC11C \uB2E4\uC2DC \uC790\uB78D\uB2C8\uB2E4. \uC544\uB798 \uAE00\uC790\uC5D0 \uC138\uACF5\uB41C \uBCF4\uC11D\uC774 \uC788\uC73C\uBA74 \uB9D0\uACFC \uB9DB\uC744 \uB2E4\uB8E8\uB294 \uC77C\uB3C4 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.024"
                ],
                source: [
                  "R2.EUL.024"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798",
                code: "\uC7442-\uAC00",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C \uC788\uC74C",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uC791\uC740 \uBE44\uC5D0\uB3C4 \uC465\uC465 \uC790\uB77C\uB294 \uB369\uAD74\uC785\uB2C8\uB2E4. \uC870\uAE08\uC758 \uB3C4\uC6C0\uB9CC \uC788\uC5B4\uB3C4 \uD06C\uAC8C \uBED7\uC5B4 \uB098\uAC11\uB2C8\uB2E4.",
                prescription: "\uC190\uAE38\uC744 \uCCAD\uD558\uB294 \uB370 \uB9DD\uC124\uC774\uC9C0 \uB9C8\uC138\uC694. \uC791\uC740 \uB3C4\uC6C0\uC774 \uB2F9\uC2E0\uC5D0\uAC90 \uD070 \uBE44\uAC00 \uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.076"
                ],
                source: [
                  "R2.EUL.076"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798",
                code: "\uC7442-\uB098",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218(\uD070\uBB3C) \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C3",
                  "\uC77C4"
                ],
                diagnosis: "\uD070\uBB3C \uC704\uC5D0 \uB72C \uB369\uAD74\uC774\uB77C \uD55C\uACF3\uC5D0 \uC815\uCC29\uD558\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uC77C\uB3C4 \uC790\uB9AC\uB3C4 \uC790\uAFB8 \uD758\uB7EC\uAC11\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uB9C9\uC544 \uC904 \uD070 \uB545\uACFC \uADF8 \uB545\uC5D0 \uC120 \uD070 \uB098\uBB34\uB97C \uCC3E\uC73C\uC138\uC694. \uADF8\uAC8C \uC5B4\uB835\uB2E4\uBA74 \uBC14\uB2E4 \uAC74\uB108 \uC0C8 \uB545\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uB294 \uAC83\uC774 \uB2F5\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.031"
                ],
                source: [
                  "R2.EUL.031"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798",
                code: "\uC7442-\uB2E4",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uBAA9\uC774 \uB9C8\uB978 \uB369\uAD74\uC774\uB77C, \uD55C\uCC3D \uC790\uB77C\uB2E4 \uBA48\uCD94\uB294 \uC77C\uC774 \uC788\uC5C8\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uBB3C \uAC00\uAE4C\uC774\uB85C \uAC00\uC138\uC694. \uD574\uC678\uC640 \uB2FF\uC740 \uC77C, \uBB3C\uC774 \uB9CE\uC740 \uACE0\uC7A5, \uBB3C\uC774 \uC624\uAC00\uB294 \uC77C\uC774 \uB2E4\uC2DC \uC790\uB77C\uAC8C \uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.032"
                ],
                source: [
                  "R2.EUL.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uC790\uB77C\uAC8C \uD558\uB294 \uD798",
                code: "\uC7442-\uB77C",
                condition: "\uBB3C\uC774 \uD750\uB824\uC9D0",
                slots: [
                  "\uC7AC2"
                ],
                diagnosis: "\uD750\uB9B0 \uBB3C\uC744 \uBA39\uACE0 \uC790\uB77C \uC81C \uBE5B\uC744 \uB0B4\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD750\uB824\uC9C0\uB294 \uC6D0\uC778\uC744 \uB530\uB77C \uCC98\uBC29\uD55C\uB2E4(1\uCE35 \uD0C1\uC218 \uD574\uBC95).",
                evidence: [
                  "R2.EUL.011"
                ],
                source: [
                  "R2.EUL.011"
                ],
                note: "1\uCE35 \uD0C1\uC218"
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uC7443-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C (\uC54C\uB9DE\uC74C)",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uBCD5\uC744 \uBC1B\uC544 \uD5A5\uAE30\uB86D\uAC8C \uD53C\uB294 \uAF43\uC785\uB2C8\uB2E4.",
                prescription: "\uBCF4\uC5EC \uC8FC\uACE0 \uB4DC\uB7EC\uB0B4\uB294 \uC77C\uC5D0\uC11C \uAF43\uC774 \uD54D\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.012",
                  "R2.EUL.070"
                ],
                source: [
                  "R2.EUL.012",
                  "R2.EUL.070"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uC7443-\uB098",
                condition: "\uB4F1\uBD88\uB9CC \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uBC24\uC5D0 \uD53C\uB294 \uAF43\uC785\uB2C8\uB2E4. \uB4DC\uB7EC\uB098\uB294 \uC790\uB9AC\uBCF4\uB2E4 \uC740\uC740\uD55C \uC790\uB9AC\uC5D0\uC11C \uC624\uB798 \uBE5B\uB0A9\uB2C8\uB2E4.",
                prescription: "\uC870\uC6A9\uD788 \uC624\uB798 \uBE44\uCD94\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.071"
                ],
                source: [
                  "R2.EUL.071"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uC7443-\uB2E4",
                condition: "\uBD88 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uBCD5\uC774 \uB108\uBB34 \uC138\uC11C \uB9C8\uC74C\uC774 \uAE09\uD574\uC9C0\uACE0, \uC790\uB9AC\uB97C \uC790\uC8FC \uC62E\uAE30\uAC8C \uB429\uB2C8\uB2E4.",
                prescription: "\uBE44\uAC00 \uB0B4\uB9AC\uB294 \uB54C\uB97C \uAE30\uB2E4\uB9AC\uACE0, \uBB3C\uC774 \uC624\uAC00\uB294 \uC77C\uC774\uB098 \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C\uC5D0\uC11C \uC228\uC744 \uACE0\uB974\uC138\uC694.",
                evidence: [
                  "R2.EUL.041"
                ],
                source: [
                  "R2.EUL.041"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uC7443-\uB77C",
                condition: "\uD0DC\uC591\uACFC \uB4F1\uBD88\uC774 \uD568\uAED8 \uC788\uC74C",
                slots: [
                  "\uC0AC7"
                ],
                diagnosis: "\uD574\uC640 \uB2EC\uC774 \uD568\uAED8 \uB5A0 \uD604\uC2E4\uACFC \uC774\uC0C1 \uC0AC\uC774\uC5D0\uC11C \uC790\uC8FC \uAC08\uB4F1\uD569\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F0\uACE0 \uCC98\uBC29 \uC2AC\uB86F\uC740 \uBE44\uC6B4\uB2E4.",
                evidence: [
                  "R2.EUL.042"
                ],
                source: [
                  "R2.EUL.042"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \uADF8\uB300\uB85C(\uC9C4\uB2E8\uB9CC \uC0AC\uC6A9)"
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uACFC \uACB0\uC2E4",
                code: "\uC7443-\uB9C8",
                condition: "\uBD88 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C3"
                ],
                diagnosis: "\uAF43 \uD53C\uC6B8 \uBCD5\uC774 \uC5C6\uC5B4 \uACB0\uC2E4\uC774 \uB2A6\uAC8C \uC635\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uACFC \uAE00\uC744 \uB2E4\uB8E8\uB294 \uC77C, \uCD9C\uD310\xB7\uC5B8\uB860\uCC98\uB7FC \uC624\uB798 \uC313\uC774\uB294 \uC77C\uC5D0\uC11C \uC5F4\uB9E4\uB97C \uB9FA\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.043"
                ],
                source: [
                  "R2.EUL.043"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uC7444-\uAC00",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uC791\uC740 \uC190\uC7A1\uC774\uC5D0 \uAF2D \uB9DE\uB294 \uC791\uC740 \uCE7C\uC744 \uC954 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC815\uBC00\uD55C \uC190\uB05D\uC73C\uB85C \uC790\uACA9\uC744 \uAC16\uCD98 \uC77C\uC744 \uD574\uB0C5\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00 \uC790\uACA9\uC744 \uC950\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uCE7C\uC744 \uBA54\uC2A4\uB85C \uC4F0\uBA74 \uC758\uB8CC, \uC81C\uB3C4\uC6A9\uC73C\uB85C \uC4F0\uBA74 \uC124\uACC4\uCC98\uB7FC\uC694.",
                evidence: [
                  "R2.EUL.050"
                ],
                source: [
                  "R2.EUL.050"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uC7444-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uB458",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uCE7C\uC774 \uB458\uC774\uB77C \uAC00\uC704\uAC00 \uB429\uB2C8\uB2E4.",
                prescription: "\uC790\uB974\uACE0 \uB2E4\uB4EC\uB294 \uC190\uAE30\uC220(\uBBF8\uC6A9, \uC7AC\uB2E8, \uAE08\uC18D)\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.050"
                ],
                source: [
                  "R2.EUL.050"
                ],
                note: "\uC6D0\uBB38 \uD45C\uC5D0\uC11C \uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78\uC774 \uC5F0\uACB0 \uCD94\uCD9C\uB418\uC5B4 \uBB38\uC7A5 \uACBD\uACC4\uB85C \uB098\uB234\uB2E4."
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uC7444-\uB2E4",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C2"
                ],
                diagnosis: "\uD070 \uCE7C\uACFC \uBB36\uC5EC \uC5ED\uD560\uC5D0 \uB9E4\uC774\uAE30 \uC27D\uC2B5\uB2C8\uB2E4. \uB300\uC2E0 \uADF8 \uCE7C\uC744 \uC791\uAC8C \uB2E4\uB4EC\uC5B4 \uC4F8 \uC904 \uC555\uB2C8\uB2E4.",
                prescription: "\uC81C\uBCF5\uC744 \uC785\uB294 \uACF5\uC801\uC778 \uC790\uB9AC, \uADDC\uC728\uC774 \uBD84\uBA85\uD55C \uC870\uC9C1\uC5D0\uC11C \uD798\uC744 \uC501\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.051"
                ],
                source: [
                  "R2.EUL.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uC7444-\uB77C",
                condition: "\uAE08 \uB9CE\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uB0A0 \uC120 \uAC83\uB4E4\uC5D0 \uB458\uB7EC\uC2F8\uC5EC \uB9C8\uC74C\uC774 \uC27D\uAC8C \uBCA0\uC774\uACE0 \uC608\uBBFC\uD574\uC9D1\uB2C8\uB2E4.",
                prescription: "\uBB3C\uCC98\uB7FC \uBD80\uB4DC\uB7FD\uAC8C \uBE44\uCF1C \uAC00\uACE0, \uBCD5\uC744 \uCB10\uB4EF \uB4DC\uB7EC\uB0B4\uB294 \uC77C\uB85C \uB0A0\uC744 \uB204\uADF8\uB7EC\uB728\uB9AC\uC138\uC694.",
                evidence: [
                  "R2.EUL.052"
                ],
                source: [
                  "R2.EUL.052"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB2E4\uB4EC\uB294 \uC190\uAE38, \uBA85\uC608",
                code: "\uC7444-\uB9C8",
                condition: "\uAE08 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C4"
                ],
                diagnosis: "\uB2E4\uB4EC\uB294 \uC190\uAE38 \uC5C6\uC774 \uC790\uB77C \uC790\uC720\uB86D\uACE0, \uC21C\uC11C\uC5D0 \uC5BD\uB9E4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C(\uBC95\xB7\uAE08\uC735\xB7\uACBD\uC601\xB7\uC758\uD559)\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.EUL.054"
                ],
                source: [
                  "R2.EUL.054"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uAE30\uB308 \uACF3\uACFC \uC5BD\uD798",
                code: "\uC7445-\uAC00",
                condition: "\uD070 \uB098\uBB34 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C1",
                  "\uC77C2"
                ],
                diagnosis: "\uD070 \uB098\uBB34\uB97C \uD0C0\uACE0 \uC624\uB974\uB294 \uB369\uAD74\uC785\uB2C8\uB2E4. \uBBFF\uC744 \uB9CC\uD55C \uC0AC\uB78C\uC774\uB098 \uC870\uC9C1\uC758 \uD798\uC744 \uBE4C\uB824 \uD63C\uC790\uC11C\uB294 \uB2FF\uC9C0 \uBABB\uD560 \uB192\uC774\uAE4C\uC9C0 \uC624\uB985\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uB97C \uCC3E\uC73C\uC138\uC694. \uADF8 \uACC1\uC5D0\uC11C \uB2F9\uC2E0\uC758 \uC5ED\uD560\uC774 \uCEE4\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.060"
                ],
                source: [
                  "R2.EUL.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uAE30\uB308 \uACF3\uACFC \uC5BD\uD798",
                code: "\uC7445-\uB098",
                condition: "\uD070 \uB098\uBB34\uAC00 \uD0DC\uC5B4\uB09C \uD574\uC5D0 \uC788\uC74C",
                slots: [
                  "\uC77C2"
                ],
                diagnosis: "\uAD6D\uAC00 \uAE30\uAD00\uC774 \uB2F9\uC2E0\uC774 \uD0C0\uACE0 \uC624\uB97C \uD070 \uB098\uBB34\uC785\uB2C8\uB2E4.",
                prescription: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00, \uACF5\uC801\uC778 \uC870\uC9C1\uC758 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.060"
                ],
                source: [
                  "R2.EUL.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uAE30\uB308 \uACF3\uACFC \uC5BD\uD798",
                code: "\uC7445-\uB2E4",
                condition: "\uD070 \uB098\uBB34\uAC00 \uC791\uC740 \uB545\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC42"
                ],
                diagnosis: "\uAE30\uB300\uB824\uB358 \uB098\uBB34\uAC00 \uBB36\uC5EC \uC788\uC5B4 \uD568\uAED8 \uC5BD\uD799\uB2C8\uB2E4. \uAE30\uB308 \uACF3\uC774 \uC788\uB294\uB370\uB3C4 \uAE30\uB300\uC9C0 \uBABB\uD558\uB294 \uB2F5\uB2F5\uD568\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB098\uBB34\uAC00 \uD480\uB9AC\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694. \uADF8\uB54C \uD568\uAED8 \uC624\uB985\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.061"
                ],
                source: [
                  "R2.EUL.061"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uAE30\uB308 \uACF3\uACFC \uC5BD\uD798",
                code: "\uC7445-\uB77C",
                condition: "\uB369\uAD74 \uB458 \uC774\uC0C1",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uAC19\uC740 \uB369\uAD74\uC774 \uACC1\uC5D0 \uC788\uC5B4 \uC790\uB77C\uBA74\uC11C \uC11C\uB85C \uC5BD\uD799\uB2C8\uB2E4.",
                prescription: "\uC5BD\uD798\uC744 \uC815\uB9AC\uD574 \uC8FC\uB294 \uCEE4\uB2E4\uB780 \uAE08\uB9E5\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uC77C\uACFC \uC790\uB9AC\uC640 \uC778\uC5F0\uC774 \uD480\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.062"
                ],
                source: [
                  "R2.EUL.062"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uB098\uBB34",
                stageNote: "\uAE30\uB308 \uACF3\uACFC \uC5BD\uD798",
                code: "\uC7445-\uB9C8",
                condition: "\uC544\uB798 \uAE00\uC790\uC5D0 \uB098\uBB34 \uBFCC\uB9AC \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uBC1C\uBC11\uC774 \uC595\uC544 \uC27D\uAC8C \uBF51\uD788\uACE0 \uC790\uC8FC \uC62E\uACA8 \uB2E4\uB2D9\uB2C8\uB2E4.",
                prescription: "\uBFCC\uB9AC\uAC00 \uBAA8\uC774\uB294 \uB54C\uB97C \uAE30\uB2E4\uB824 \uD06C\uAC8C \uC62E\uAE30\uC138\uC694.",
                evidence: [
                  "R2.EUL.063"
                ],
                source: [
                  "R2.EUL.063"
                ]
              },
              {
                stage: 6,
                stageName: "\uBB36\uC784",
                stageNote: null,
                code: "\uC7446-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5\uACFC \uBB36\uC784",
                slots: [
                  "\uACC42"
                ],
                diagnosis: "\uC7444-\uB2E4\uC640 \uAC19\uB2E4.",
                prescription: "\uC7444-\uB2E4\uC640 \uAC19\uB2E4. \uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uB97C \uACC42\uC5D0 \uBC18\uB4DC\uC2DC \uC4F4\uB2E4.",
                evidence: [
                  "R2.EUL.051"
                ],
                source: [
                  "R2.EUL.051"
                ],
                note: "1\uCE35 \xA77"
              },
              {
                stage: 7,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC7447-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D3"
                ],
                diagnosis: "\uC6B8\uD0C0\uB9AC \uC548\uC5D0\uC11C \uAC00\uC7A5 \uC544\uB984\uB2F5\uAC8C \uD53C\uB294 \uAF43\uC785\uB2C8\uB2E4. \uD070 \uC774\uB984\uC744 \uBC14\uB77C\uBCF4\uB418, \uACE7\uACE0 \uAE68\uB057\uD55C \uAE38\uB85C \uC624\uB97C \uB54C \uC624\uB798 \uD53C\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB38\uC7A5 \uD558\uB098\uB97C \uB05D3 \uC2AC\uB86F\uC5D0 \uADF8\uB300\uB85C \uC4F4\uB2E4(\uC6D0\uBB38 \uD45C\uC5D0 \uCC98\uBC29 \uCE78 \uC5C6\uC74C).",
                evidence: [
                  "R2.EUL.080"
                ],
                source: [
                  "R2.EUL.080"
                ],
                note: "7\uB2E8\uACC4 \uD45C\uB294 \uBB38\uC7A5 \uCE78\uC774 \uD558\uB098\uB2E4(\uC6D0\uBB38)."
              }
            ],
            C: [
              {
                code: "\uC744\uC6B4-\uAC00",
                incoming: "\uC791\uC740 \uB545",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uC815\uC6D0\uC5D0 \uC2EC\uC5B4\uC838 \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.020",
                  "R2.EUL.074"
                ]
              },
              {
                code: "\uC744\uC6B4-\uB098",
                incoming: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 (\uB369\uAD74 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC5BD\uD600 \uC788\uB358 \uB369\uAD74\uC774 \uC815\uB9AC\uB418\uBA70 \uC790\uB9AC\uAC00 \uC5F4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.062"
                ]
              },
              {
                code: "\uC744\uC6B4-\uB2E4",
                incoming: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C (\uD070 \uB545\uB9CC \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC44"
                ],
                sentence: "\uBC8C\uD310\uC774 \uC815\uC6D0\uC73C\uB85C \uBC14\uB00C\uC5B4 \uC7AC\uBB3C\uC744 \uC958 \uC218 \uC788\uAC8C \uB418\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.073",
                  "R2.EUL.076"
                ]
              },
              {
                code: "\uC744\uC6B4-\uB77C",
                incoming: "\uD070 \uB098\uBB34 (\uD070 \uB545 \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                sentence: "\uD070 \uB098\uBB34\uB97C \uD0C0\uACE0 \uC624\uB974\uBA70 \uC790\uB9AC\uAC00 \uC62C\uB77C\uAC00\uACE0, \uB545\uACFC \uD130\uAC00 \uC0DD\uAE30\uAE30 \uC88B\uC740 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.073"
                ]
              },
              {
                code: "\uC744\uC6B4-\uB9C8",
                incoming: "\uC2DC\uB0C7\uBB3C (\uBD88 \uB9CE\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC13C \uBCD5\uC774 \uAC00\uB824\uC838 \uB2E4\uC2DC \uC790\uB77C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.041",
                  "R2.EUL.070"
                ]
              },
              {
                code: "\uC744\uC6B4-\uBC14",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uB098\uBB34 \uBFCC\uB9AC\uB85C \uBAA8\uC784",
                slots: [
                  "\uACC43"
                ],
                sentence: "\uBC1C\uBC11\uC774 \uB2E8\uB2E8\uD574\uC838 \uD55C\uACF3\uC5D0 \uBFCC\uB9AC\uB0B4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.EUL.063"
                ]
              },
              {
                code: "\uC744\uC6B4-\uC0AC",
                incoming: "\uD478\uB978 \uB369\uAD74\uC774\uB098 \uCEE4\uB2E4\uB780 \uAE08\uB9E5\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC5EC \uC788\uB358 \uC790\uB9AC\uAC00 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "1\uCE35 \xA77"
                ],
                note: "1\uCE35 \xA77"
              }
            ],
            D: [
              {
                label: "\uCD9C\uB825 \uC548 \uD568",
                rule: "\uD310\uC815\uC5D0\uB294 \uC4F0\uB418 \uBB38\uC7A5\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uC9C0 \uC54A\uB294\uB2E4 (PDF 0-1 6\uBC88).",
                items: [
                  {
                    item: "\uC5EC\uB7EC \uC774\uC131\uACFC\uC758 \uAD00\uACC4\xB7\uBD80\uBD80 \uBB38\uC81C\xB7\uAC74\uAC15",
                    evidence: [
                      "R2.EUL.021"
                    ]
                  },
                  {
                    item: "\uC5EC\uC131\uC758 \uC815\uC2E0\uC801 \uACE0\uD1B5\xB7\uACE8\uB2E4\uACF5\uC99D",
                    evidence: [
                      "R2.EUL.053"
                    ]
                  },
                  {
                    item: "\uC5EC\uC131\uC758 \uBC24\uC77C",
                    evidence: [
                      "R2.EUL.071"
                    ]
                  },
                  {
                    item: "\uC220\uC9D1\xB7\uCEE4\uD53C\uC20D \uC5C5\uC885 \uB2E8\uC815",
                    evidence: [
                      "R2.EUL.072"
                    ],
                    note: "\uD655\uC778 \uD544\uC694"
                  },
                  {
                    item: "\uCE7C\uC5D0 \uC798\uB9BC",
                    evidence: [
                      "R2.EUL.075"
                    ]
                  }
                ]
              }
            ]
          },
          \u4E19: {
            name: "\uBCD1\uD654 \u2014 \uD0DC\uC591",
            A: {
              \uC0AC1: {
                text: "\uB2F9\uC2E0\uC740 \uD0DC\uC591\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.BYEONG.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uD604\uC2E4\uC5D0 \uBC1C\uC744 \uB51B\uACE0 \uBC1D\uAC8C \uC6C0\uC9C1\uC774\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uD310\uB2E8\uC774 \uBE60\uB974\uACE0, \uB9E4\uC77C \uC0C8\uB85C \uB5A0\uC624\uB974\uB4EF \uC0C8\uB85C\uC6B4 \uC2DC\uC791\uC744 \uB450\uB824\uC6CC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uC5B4\uB514\uC11C\uB4E0 \uB208\uC5D0 \uB744\uACE0 \uC790\uB9AC\uB97C \uD658\uD558\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4. \uAC89\uC740 \uBC1D\uC740 \uB370, \uC18D\uC5D0\uB294 \uCC28\uAC11\uACE0 \uB0C9\uCCA0\uD55C \uACC4\uC0B0\uC774 \uD568\uAED8 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.003"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uC9C8\uC11C\uC640 \uC608\uC758\uB97C \uC9C0\uD0A4\uBA74\uC11C\uB3C4 \uCD94\uC9C4\uB825\uC774 \uC788\uC5B4, \uB9E1\uC740 \uC77C\uC744 \uC815\uBA74\uC73C\uB85C \uBC00\uACE0 \uB098\uAC11\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.002"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uC55E\uC5D0 \uC11C\uC11C \uBE44\uCD94\uACE0 \uC774\uB044\uB294 \uD798\uC785\uB2C8\uB2E4. \uB4DC\uB7EC\uB0B4\uACE0 \uC54C\uB9AC\uB294 \uC77C\uC5D0\uC11C \uB204\uAD6C\uBCF4\uB2E4 \uAC15\uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.001",
                  "R2.BYEONG.004"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uD0DC\uC591\uC740 \uC7AC\uBB3C\uBCF4\uB2E4 \uC774\uB984\uC73C\uB85C \uBE5B\uB0A9\uB2C8\uB2E4. \uC774\uB984\uC744 \uBA3C\uC800 \uC138\uC6B0\uBA74 \uC7AC\uBB3C\uC774 \uADF8 \uBE5B\uC744 \uB530\uB77C\uC635\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.050",
                  "R2.BYEONG.070"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uD0DC\uC591\uC740 \uBAA8\uB450\uB97C \uBE44\uCD94\uC9C0\uB9CC \uD558\uB298\uC5D0\uB294 \uD558\uB098\uB9CC \uB739\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uACC1\uC758 \uC0AC\uB78C\uC744 \uD658\uD558\uAC8C \uBE44\uCD94\uB294 \uC0AC\uB78C\uC774\uACE0, \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uC720\uC77C\uD55C \uBE5B\uC774\uACE0 \uC2F6\uC5B4 \uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.010"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD070\uBB3C(\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218)\uC744 \uAC70\uB300\uD55C \uC0B0\uB9E5\uC774 \uB9C9\uC544 \uC8FC\uACE0, \uBC30\uC6B0\uC790 \uC790\uB9AC\uAC00 \uBB3C\uC758 \uAE30\uC6B4\uC73C\uB85C \uBAA8\uC77C \uB54C. \uC77C\uAC04\uC774 \uBB36\uC5EC \uC788\uC73C\uBA74 \uD480\uB9B4 \uB54C.",
                evidence: [
                  "\uBCF8\uCC45 p.142, 145 \uC0AC\uB840"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uB9E4\uC77C \uB2E4\uC2DC \uB5A0\uC624\uB974\uB294 \uD798 / \uB5B3\uB5B3\uD568",
                evidence: [
                  "R2.BYEONG.002",
                  "R2.BYEONG.070"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uBC1D\uC744 \uB54C \uBC29\uC1A1\xB7\uC608\uC220\xB7\uD64D\uBCF4, \uC5B4\uB450\uC6B8 \uB54C \uC815\uC2E0\xB7\uC2EC\uB9AC\xB7\uCCA0\uD559\xB7\uC885\uAD50.",
                evidence: [
                  "R2.BYEONG.004"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uBC1D\uAE30",
                stageNote: "\uB0AE\uC758 \uD574\uC778\uAC00, \uBC24\uC758 \uD574\uC778\uAC00",
                code: "\uBCD11-\uAC00",
                condition: "\uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE(\uBD88\uC758 \uBFCC\uB9AC)",
                slots: [
                  "\uC0AC4",
                  "\uC77C1"
                ],
                diagnosis: "\uBFCC\uB9AC\uAC00 \uB2E8\uB2E8\uD55C \uD55C\uB0AE\uC758 \uD574\uC785\uB2C8\uB2E4. \uC5B4\uB514\uC11C\uB4E0 \uC874\uC7AC\uAC10\uC774 \uBD84\uBA85\uD569\uB2C8\uB2E4.",
                prescription: "\uB4DC\uB7EC\uB0B4\uACE0 \uC54C\uB9AC\uB294 \uC77C, \uC0AC\uB78C\uB4E4 \uC55E\uC5D0 \uC11C\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.010"
                ],
                source: [
                  "R2.BYEONG.010"
                ]
              },
              {
                stage: 1,
                stageName: "\uBC1D\uAE30",
                stageNote: "\uB0AE\uC758 \uD574\uC778\uAC00, \uBC24\uC758 \uD574\uC778\uAC00",
                code: "\uBCD11-\uB098",
                condition: "\uC544\uB798 \uAE00\uC790\uAC00 \uBC24(\uBB3C\uC758 \uBB34\uB9AC)",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C3"
                ],
                diagnosis: "\uBC24\uC5D0 \uB72C \uD574\uB77C \uAC00\uC9C4 \uBE5B\uB9CC\uD07C \uB4DC\uB7EC\uB098\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uB2A5\uB825\uC774 \uC788\uB294\uB370 \uC54C\uC544\uBCF4\uB294 \uC0AC\uB78C\uC774 \uC801\uB2E4\uACE0 \uB290\uB08D\uB2C8\uB2E4.",
                prescription: "\uBC14\uAE65\uC744 \uBE44\uCD94\uB294 \uC77C\uBCF4\uB2E4 \uB9C8\uC74C\uC744 \uBE44\uCD94\uB294 \uC77C, \uACE7 \uC0AC\uB78C\uC758 \uB9C8\uC74C\uACFC \uC0DD\uAC01\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC5D0\uC11C \uBE5B\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.011",
                  "R2.BYEONG.004"
                ],
                source: [
                  "R2.BYEONG.011",
                  "R2.BYEONG.004"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC00\uB9BC\uACFC \uBB36\uC784",
                stageNote: null,
                code: "\uBCD12-\uAC00",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2"
                ],
                diagnosis: "\uB0AE\uC5D0 \uB0B4\uB9AC\uB294 \uBE44\uC5D0 \uAC00\uB824\uC9C4 \uD574\uC785\uB2C8\uB2E4. \uAC00\uC7A5 \uBE5B\uB098\uC57C \uD560 \uC21C\uAC04\uC5D0 \uD750\uB824\uC9C0\uB294 \uC77C\uC774 \uBC18\uBCF5\uB410\uC744 \uAC81\uB2C8\uB2E4.",
                prescription: "\uBE44\uB97C \uAC70\uB46C \uAC08 \uAC70\uB300\uD55C \uC0B0\uB9E5\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB54C\uAE4C\uC9C0\uB294 \uB4DC\uB7EC\uB0C4\uBCF4\uB2E4 \uC900\uBE44\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.012"
                ],
                source: [
                  "R2.BYEONG.012"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC00\uB9BC\uACFC \uBB36\uC784",
                stageNote: null,
                code: "\uBCD12-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uBCF4\uC11D\uC5D0 \uBE5B\uC774 \uBB36\uC5EC \uC5B4\uB450\uC6CC\uC9C4 \uD574\uC785\uB2C8\uB2E4. \uD558\uACE0 \uC2F6\uC740 \uC77C\uC774 \uC788\uC5B4\uB3C4 \uC190\uBC1C\uC774 \uBB36\uC778 \uB4EF \uB2F5\uB2F5\uD569\uB2C8\uB2E4.",
                prescription: "\uBB36\uC784\uC774 \uD480\uB9AC\uB294 \uB54C\uAC00 \uC815\uD574\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uC804\uC5D0\uB294 \uBB36\uC778 \uADF8 \uC77C, \uACE7 \uAE08\uC735\xB7\uBC95\xB7\uC815\uBC00\uD55C \uC190\uC77C\uC744 \uB2F9\uC2E0\uC758 \uC77C\uB85C \uC0BC\uC73C\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.013"
                ],
                source: [
                  "R2.BYEONG.013"
                ],
                note: "1\uCE35 \xA77"
              },
              {
                stage: 2,
                stageName: "\uAC00\uB9BC\uACFC \uBB36\uC784",
                stageNote: null,
                code: "\uBCD12-\uB098\u2032",
                condition: "\uC704 \uAC00\uC9C0 + \uC6D0\uAD6D\uC5D0 \uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC77C2"
                ],
                diagnosis: "\uC774 \uBB36\uC784\uC774 \uC624\uD788\uB824 \uC5C6\uB358 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. \uBB36\uC778 \uC790\uB9AC\uAC00 \uC774\uB984\uC774 \uAC78\uB9AC\uB294 \uC790\uB9AC\uB85C \uC774\uC5B4\uC9D1\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.BYEONG.013"
                ],
                source: [
                  "R2.BYEONG.013"
                ],
                note: "\uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0\uC11C \uB300\uC2DC(\u2014)\uB85C \uBE44\uC5B4 \uC788\uB2E4."
              },
              {
                stage: 3,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uAC00 \uACB9\uCE60 \uB54C",
                code: "\uBCD13-\uAC00",
                condition: "\uD0DC\uC591 \uB458",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uD558\uB298\uC5D0 \uD574\uAC00 \uB458\uC774\uB77C \uC624\uD788\uB824 \uBE5B\uC774 \uD750\uB824\uC9D1\uB2C8\uB2E4. \uC560\uC4F4 \uB9CC\uD07C \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uACE0 \uB298 \uB204\uAD70\uAC00\uC640 \uACAC\uC8FC\uAC8C \uB429\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uAC00 \uD558\uB098\uB97C \uAC00\uB824 \uC8FC\uAC70\uB098 \uBCF4\uC11D\uC774 \uD558\uB098\uB97C \uC815\uB9AC\uD574 \uC8FC\uB294 \uB54C\uC5D0 \uB2E4\uC2DC \uBC1D\uC544\uC9D1\uB2C8\uB2E4. \uADF8\uB54C\uB97C \uAE30\uC900\uC73C\uB85C \uACC4\uD68D\uC744 \uC138\uC6B0\uC138\uC694. \uBC14\uB2E4 \uAC74\uB108 \uD574\uC758 \uB098\uB77C\uC640 \uB2FF\uB294 \uC77C\uB3C4 \uBE5B\uC744 \uB418\uCC3E\uB294 \uAE38\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.014",
                  "R2.BYEONG.016"
                ],
                source: [
                  "R2.BYEONG.014",
                  "R2.BYEONG.016"
                ]
              },
              {
                stage: 3,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uAC00 \uACB9\uCE60 \uB54C",
                code: "\uBCD13-\uB098",
                condition: "\uD0DC\uC591 \uC14B \uC774\uC0C1",
                slots: [
                  "\uC0AC4"
                ],
                diagnosis: "\uD574\uAC00 \uC5EC\uB7FF \uBAA8\uC5EC \uB2E4\uC2DC \uD558\uB098\uC758 \uD070 \uBE5B\uC774 \uB429\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                evidence: [
                  "R2.BYEONG.015"
                ],
                source: [
                  "R2.BYEONG.015"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \uADF8\uB300\uB85C(\uC9C4\uB2E8\uB9CC \uC0AC\uC6A9)"
              },
              {
                stage: 3,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uAC00 \uACB9\uCE60 \uB54C",
                code: "\uBCD13-\uB2E4",
                condition: "\uC138\uC0C1\uC744 \uBC1D\uD788\uB294 \uB4F1\uBD88 \uC788\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C4"
                ],
                diagnosis: "\uD574\uC640 \uB2EC\uC774 \uD568\uAED8 \uB5A0 \uD604\uC2E4\uACFC \uC774\uC0C1 \uC0AC\uC774\uC5D0\uC11C \uC790\uC8FC \uB9C8\uC74C\uC774 \uAC08\uB9BD\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uAC00 \uC0AC\uC774\uB97C \uAC00\uB824 \uC8FC\uB294 \uB54C, \uB610\uB294 \uD070\uBB3C\uC744 \uAC74\uB108\uB294 \uC120\uD0DD\uC774 \uAC08\uB4F1\uC744 \uD480\uC5B4 \uC90D\uB2C8\uB2E4. \uBC14\uB2E4 \uAC74\uB108\uC758 \uBC30\uC6C0\uC774\uB098 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.017",
                  "\uBCF8\uCC45 p.140"
                ],
                source: [
                  "R2.BYEONG.017",
                  "\uBCF8\uCC45 p.140"
                ],
                note: "\uBCF8\uCC45 p.140"
              },
              {
                stage: 3,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uAC00 \uACB9\uCE60 \uB54C",
                code: "\uBCD13-\uB77C",
                condition: "\uAC00\uB824 \uC904 \uD070 \uB098\uBB34\uAC00 \uC791\uC740 \uB545\uACFC \uBB36\uC784",
                slots: [
                  "\uACC42"
                ],
                diagnosis: "\uAC00\uB824 \uC904 \uB098\uBB34\uAC00 \uBB36\uC5EC \uC788\uC5B4 \uAC08\uB4F1\uC774 \uC27D\uAC8C \uD480\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uADF8 \uB098\uBB34\uAC00 \uD480\uB9AC\uB294 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.018"
                ],
                source: [
                  "R2.BYEONG.018"
                ]
              },
              {
                stage: 4,
                stageName: "\uB098\uBB34",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uC77C, \uBC30\uC6C0",
                code: "\uBCD14-\uAC00",
                condition: "\uD070 \uB098\uBB34 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uB098\uBB34\uC5D0 \uAF43\uC744 \uD53C\uC6B0\uB294 \uD574\uC785\uB2C8\uB2E4. \uBC30\uC6B0\uACE0 \uC313\uC740 \uAC83\uC774 \uACB0\uC2E4\uC774 \uB418\uC5B4 \uC778\uC815\uBC1B\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBC30\uC6B4 \uAC83\uC744 \uAC00\uB974\uCE58\uACE0 \uD3BC\uCE58\uB294 \uC77C, \uD559\uBB38\uACFC \uAD50\uC721\uC758 \uC790\uB9AC\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.020"
                ],
                source: [
                  "R2.BYEONG.020"
                ]
              },
              {
                stage: 4,
                stageName: "\uB098\uBB34",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uC77C, \uBC30\uC6C0",
                code: "\uBCD14-\uB098",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C",
                slots: [
                  "\uC77C2",
                  "\uC7AC2"
                ],
                diagnosis: "\uC791\uC740 \uAF43\uC744 \uD5A5\uAE30\uB86D\uAC8C \uD53C\uC6B0\uB294 \uD574\uC785\uB2C8\uB2E4.",
                prescription: "\uC81C\uBCF5\uC744 \uC785\uB294 \uACF5\uC801\uC778 \uC77C, \uADDC\uC728 \uC788\uB294 \uC870\uC9C1\uC5D0\uC11C \uD798\uC744 \uC501\uB2C8\uB2E4. \uC7AC\uBB3C\uC744 \uD06C\uAC8C \uC950\uB824 \uD558\uBA74 \uC190\uBC1C\uC774 \uBB36\uC774\uB2C8 \uC774\uB984\uC744 \uBA3C\uC800 \uB450\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.021"
                ],
                source: [
                  "R2.BYEONG.021"
                ]
              },
              {
                stage: 4,
                stageName: "\uB098\uBB34",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uC77C, \uBC30\uC6C0",
                code: "\uBCD14-\uB2E4",
                condition: "\uBD88\uC774 \uB108\uBB34 \uC148",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6"
                ],
                diagnosis: "\uBE5B\uC774 \uB108\uBB34 \uC138\uC11C \uB545\uC774 \uB9C8\uB974\uACE0, \uD0A4\uC6B0\uB358 \uAC83\uC774 \uC790\uB77C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uB2E4\uC2DC \uC790\uB78D\uB2C8\uB2E4. \uADF8\uB54C\uAE4C\uC9C0 \uBB34\uB9AC\uD558\uAC8C \uD0A4\uC6B0\uB824 \uD558\uC9C0 \uB9C8\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.022"
                ],
                source: [
                  "R2.BYEONG.022"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C",
                stageNote: "\uB5A0\uC624\uB97C \uD638\uC218, \uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uBCD15-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uB113\uC740 \uD638\uC218 \uC704\uC5D0 \uB72C \uD574\uC785\uB2C8\uB2E4. \uC774\uB984\uACFC \uC790\uB9AC\uAC00 \uD568\uAED8 \uC62C\uB77C\uAC00\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uC9C4\uD559, \uC2B9\uC9C4, \uC120\uCD9C\uCC98\uB7FC \uC774\uB984\uC774 \uAC78\uB9AC\uB294 \uC77C\uC5D0\uC11C \uBE5B\uB0A9\uB2C8\uB2E4. \uBA85\uC608\uB97C \uBA3C\uC800 \uC887\uC73C\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.030"
                ],
                source: [
                  "R2.BYEONG.030"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C",
                stageNote: "\uB5A0\uC624\uB97C \uD638\uC218, \uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uBCD15-\uB098",
                condition: "\uD638\uC218 + \uAC70\uB300\uD55C \uC0B0\uB9E5 + \uD070 \uB098\uBB34 (+\uAE08\uB9E5)",
                slots: [
                  "\uC7AC1",
                  "\uC7AC6"
                ],
                diagnosis: "\uB9D1\uC740 \uD638\uC218 \uC704\uC5D0 \uB72C \uD574\uC785\uB2C8\uB2E4. \uC774\uB984\uACFC \uC7AC\uBB3C\uC774 \uD568\uAED8 \uB530\uB77C\uC635\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC744 \uC313\uC744\uC218\uB85D \uC7AC\uBB3C\uC774 \uB530\uB974\uB294 \uAD6C\uC870\uC785\uB2C8\uB2E4. \uBA85\uC608\uB97C \uCD94\uAD6C\uD558\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.060",
                  "R2.BYEONG.062"
                ],
                source: [
                  "R2.BYEONG.060",
                  "R2.BYEONG.062"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C",
                stageNote: "\uB5A0\uC624\uB97C \uD638\uC218, \uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uBCD15-\uB2E4",
                condition: "\uD638\uC218\uAC00 \uD750\uB824\uC9D0",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC7AC2"
                ],
                diagnosis: "\uD750\uB9B0 \uBB3C \uC704\uC5D0 \uB72C \uD574\uB77C \uC774\uB984\uC774 \uD750\uB824\uC9C0\uB294 \uC77C\uC774 \uC0DD\uAE30\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB451\uC5D0 \uB098\uBB34\uB97C \uC2EC\uB4EF, \uBB34\uC5B8\uAC00\uB97C \uD0A4\uC6B0\uB294 \uC77C\uC744 \uACC1\uC5D0 \uB450\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.031"
                ],
                source: [
                  "R2.BYEONG.031"
                ]
              },
              {
                stage: 5,
                stageName: "\uBB3C",
                stageNote: "\uB5A0\uC624\uB97C \uD638\uC218, \uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uBCD15-\uB77C",
                condition: "\uD638\uC218 \uB458",
                slots: [
                  "\uC0AC7"
                ],
                diagnosis: "\uBB3C\uC774 \uB450 \uACF3\uC774\uB77C \uC5B4\uB514\uC5D0 \uB5A0\uC57C \uD560\uC9C0 \uB9C8\uC74C\uC774 \uAC08\uB9BD\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                evidence: [
                  "R2.BYEONG.032"
                ],
                source: [
                  "R2.BYEONG.032"
                ],
                note: "\uCC98\uBC29 \uCE78 \uC6D0\uBB38 \uADF8\uB300\uB85C(\uC9C4\uB2E8\uB9CC \uC0AC\uC6A9)"
              },
              {
                stage: 5,
                stageName: "\uBB3C",
                stageNote: "\uB5A0\uC624\uB97C \uD638\uC218, \uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uBCD15-\uB9C8",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uB5A0\uC624\uB97C \uD638\uC218\uAC00 \uC5C6\uC5B4, \uC774\uB984\uC744 \uAC78 \uC790\uB9AC\uB97C \uC2A4\uC2A4\uB85C \uCC3E\uC544\uC57C \uD569\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uAC00 \uC774\uB984\uC774 \uC11C\uB294 \uB54C\uC785\uB2C8\uB2E4. \uADF8\uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "\uBCF8\uCC45 p.146, 149 \uC0AC\uB840"
                ],
                source: [
                  "\uBCF8\uCC45 p.146, 149 \uC0AC\uB840",
                  "R2 \uCF54\uB4DC \uC5C6\uC74C(\uC6D0\uBB38 \uADFC\uAC70)"
                ],
                note: "\uC6D0\uBB38 \uADFC\uAC70\uAC00 \uBCF8\uCC45 \uC0AC\uB840 \uD398\uC774\uC9C0\uB2E4."
              },
              {
                stage: 6,
                stageName: "\uB545",
                stageNote: "\uBE44\uCD94\uC5B4 \uD0A4\uC6B0\uB294 \uAC83",
                code: "\uBCD16-\uAC00",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uB113\uC740 \uB4E4\uD310\uC744 \uBE44\uCD94\uC5B4 \uB9CC\uBB3C\uC744 \uD0A4\uC6B0\uB294 \uD574\uC785\uB2C8\uB2E4.",
                prescription: "\uB9CE\uC740 \uAC83\uC744 \uAE38\uB7EC \uB0B4\uB294 \uC77C, \uD130\uB97C \uC77C\uAD6C\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.060"
                ],
                source: [
                  "R2.BYEONG.060"
                ]
              },
              {
                stage: 6,
                stageName: "\uB545",
                stageNote: "\uBE44\uCD94\uC5B4 \uD0A4\uC6B0\uB294 \uAC83",
                code: "\uBCD16-\uB098",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC5F06"
                ],
                diagnosis: "\uC815\uC6D0\uC744 \uBE44\uCD94\uB294 \uD574\uC785\uB2C8\uB2E4. \uAC00\uAE4C\uC6B4 \uACF3\uC744 \uD658\uD558\uAC8C \uB9CC\uB4DC\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uAC00\uC815\uACFC \uAC00\uAE4C\uC6B4 \uC6B8\uD0C0\uB9AC\uB97C \uAC00\uAFB8\uB294 \uC77C\uC774 \uBE5B\uC744 \uD0A4\uC6C1\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.061"
                ],
                source: [
                  "R2.BYEONG.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uB545",
                stageNote: "\uBE44\uCD94\uC5B4 \uD0A4\uC6B0\uB294 \uAC83",
                code: "\uBCD16-\uB2E4",
                condition: "\uBD88\uACFC \uD759\uC774 \uC9C0\uB098\uCE68",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C3"
                ],
                diagnosis: "\uBE5B\uACFC \uD759\uC774 \uC9C0\uB098\uCCD0 \uB545\uC774 \uB9C8\uB974\uACE0, \uC2DC\uB044\uB7EC\uC6B4 \uACF3\uC744 \uB5A0\uB098 \uC870\uC6A9\uD55C \uACF3\uC744 \uCC3E\uAC8C \uB429\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uACFC \uC815\uC2E0\uC744 \uB2E4\uB8E8\uB294 \uC77C, \uACE0\uC694\uD55C \uC790\uB9AC\uC5D0\uC11C \uBE5B\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.041"
                ],
                source: [
                  "R2.BYEONG.041"
                ]
              },
              {
                stage: 7,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uBCD17-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C (\uC544\uB798 \uBFCC\uB9AC \uD2BC\uD2BC)",
                slots: [
                  "\uC7AC1",
                  "\uC7AC6"
                ],
                diagnosis: "\uD070 \uC7AC\uBB3C\uC744 \uC958 \uC218 \uC788\uB294 \uD574\uC785\uB2C8\uB2E4.",
                prescription: "\uC7AC\uBB3C\uBCF4\uB2E4 \uC774\uB984\uC744 \uBA3C\uC800 \uB450\uC138\uC694. \uBE5B\uC774 \uC11C\uBA74 \uC7AC\uBB3C\uC740 \uBCF4\uC11D\uB9CC\uD07C\uC529 \uD655\uC2E4\uD788 \uB530\uB77C\uC635\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.050"
                ],
                source: [
                  "R2.BYEONG.050"
                ]
              },
              {
                stage: 7,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uBCD17-\uB098",
                condition: "\uAE08 + \uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218",
                slots: [
                  "\uC7AC1",
                  "\uC7AC7"
                ],
                diagnosis: "\uAE08\uB9E5\uC774 \uBB3C\uC744 \uB9CC\uB4E4\uACE0 \uD574\uAC00 \uADF8 \uBB3C \uC704\uC5D0 \uB739\uB2C8\uB2E4. \uC774\uB984\uC774 \uB192\uC544\uC9C0\uACE0 \uC7AC\uBB3C\uB3C4 \uB530\uB985\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC744 \uAC70\uB294 \uC77C\uACFC \uC7AC\uBB3C\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC744 \uD568\uAED8 \uAC00\uC838\uAC00\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.051"
                ],
                source: [
                  "R2.BYEONG.051"
                ]
              },
              {
                stage: 7,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uBCD17-\uB2E4",
                condition: "\uD0DC\uC591 \uB458\uC774 \uAC01\uAC01 \uBCF4\uC11D\uC744 \uB04C\uC5B4\uC634",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294 \uACF3\uC5D0\uC11C \uC815\uBCF4\uB97C \uBAA8\uC73C\uB294 \uAC10\uAC01\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC815\uBCF4\uB97C \uB2E4\uB8E8\uB294 \uC77C, \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uAC8C \uD310\uC744 \uC77D\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.073"
                ],
                source: [
                  "R2.BYEONG.073"
                ]
              },
              {
                stage: 8,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uBCD18-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D3"
                ],
                diagnosis: "\uD0DC\uC591\uC740 \uC815\uB2F9\uD558\uACE0 \uBD84\uBA85\uD574\uC57C \uC624\uB798 \uBE5B\uB0A9\uB2C8\uB2E4. \uB5B3\uB5B3\uD55C \uC774\uB984\uC774 \uB2F9\uC2E0\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.",
                prescription: "\uBB38\uC7A5 \uD558\uB098\uB97C \uB05D3 \uC2AC\uB86F\uC5D0 \uADF8\uB300\uB85C \uC4F4\uB2E4(\uC6D0\uBB38 \uD45C\uC5D0 \uCC98\uBC29 \uCE78 \uC5C6\uC74C).",
                evidence: [
                  "R2.BYEONG.070"
                ],
                source: [
                  "R2.BYEONG.070"
                ],
                note: "8\uB2E8\uACC4 \uD45C\uB294 \uBB38\uC7A5 \uCE78\uC774 \uD558\uB098\uB2E4(\uC6D0\uBB38)."
              },
              {
                stage: 8,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uBCD18-\uB098",
                condition: "\uC5EC\uC131",
                slots: [
                  "\uC0AC4",
                  "\uC77C1"
                ],
                diagnosis: "\uC9D1 \uC548\uC5D0 \uBA38\uBB3C\uAE30\uBCF4\uB2E4 \uBC14\uAE65\uC5D0\uC11C \uD65C\uB3D9\uD560 \uB54C \uBE5B\uB098\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uBB38\uC7A5 \uD558\uB098\uB97C \uD574\uB2F9 \uC2AC\uB86F\uC5D0 \uADF8\uB300\uB85C \uC4F4\uB2E4(\uC6D0\uBB38 \uD45C\uC5D0 \uCC98\uBC29 \uCE78 \uC5C6\uC74C).",
                evidence: [
                  "R2.BYEONG.071"
                ],
                source: [
                  "R2.BYEONG.071"
                ],
                note: "8\uB2E8\uACC4 \uD45C\uB294 \uBB38\uC7A5 \uCE78\uC774 \uD558\uB098\uB2E4(\uC6D0\uBB38)."
              }
            ],
            C: [
              {
                code: "\uBCD1\uC6B4-\uAC00",
                incoming: "\uAC70\uB300\uD55C \uC0B0\uB9E5 (\uC2DC\uB0C7\uBB3C\uC774 \uAC00\uB9B4 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC43"
                ],
                sentence: "\uD574\uB97C \uAC00\uB9AC\uB358 \uBE44\uAC00 \uAC77\uD788\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.012"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uB098",
                incoming: "\uD070 \uB098\uBB34 (\uD574 \uB458\xB7\uD574\uC640 \uB2EC\uC774 \uD568\uAED8\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC0AC\uC774\uB97C \uAC00\uB824 \uC8FC\uB294 \uB098\uBB34\uAC00 \uB4E4\uC5B4\uC640 \uB2E4\uC2DC \uBC1D\uC544\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.014",
                  "R2.BYEONG.017"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uB2E4",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D (\uD574\uAC00 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uD574\uAC00 \uC815\uB9AC\uB418\uC5B4 \uB2F9\uC2E0\uB9CC \uBC1D\uC544\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.014"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uB77C",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D (\uD574\uAC00 \uD558\uB098\uC77C \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBE5B\uC774 \uBB36\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uB113\uD788\uAE30\uBCF4\uB2E4 \uB2E4\uC9C0\uC138\uC694.",
                evidence: [
                  "R2.BYEONG.013"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uB9C8",
                incoming: "\uD0DC\uC591\uC774\uB098 \uBCF4\uC11D\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC5EC \uC788\uB358 \uBE5B\uC774 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "1\uCE35 \xA77",
                  "\uBCF8\uCC45 p.142"
                ],
                note: "1\uCE35 \xA77, \uBCF8\uCC45 p.142"
              },
              {
                code: "\uBCD1\uC6B4-\uBC14",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uB4F1\uBD88\uACFC \uD568\uAED8\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uC74C\uC744 \uAC00\uB974\uB358 \uB2EC\uC774 \uC815\uB9AC\uB418\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.017"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uC0AC",
                incoming: "\uD070\uBB3C + \uAC70\uB300\uD55C \uC0B0\uB9E5, \uBC30\uC6B0\uC790 \uC790\uB9AC\uAC00 \uBB3C\uB85C \uBAA8\uC784",
                slots: [
                  "\uC5F04",
                  "\uC5F05"
                ],
                sentence: "\uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "\uBCF8\uCC45 p.142"
                ],
                note: "\uBCF8\uCC45 p.142"
              },
              {
                code: "\uBCD1\uC6B4-\uC544",
                incoming: "\uBB3C (\uBD88\uC774 \uB108\uBB34 \uC140 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uB978 \uB545\uC774 \uC816\uC5B4 \uD0A4\uC6B0\uB358 \uAC83\uC774 \uB2E4\uC2DC \uC790\uB77C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.022"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uC790",
                incoming: "\uD0DC\uC591\uC774 \uD558\uB098 \uB354 \uC634",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uBE5B\uC774 \uACB9\uCCD0 \uD750\uB824\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC14B\uC774 \uB418\uBA74 \uB2E4\uC2DC \uBC1D\uC544\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.014",
                  "R2.BYEONG.015"
                ]
              },
              {
                code: "\uBCD1\uC6B4-\uCC28",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uBC24\uC73C\uB85C \uBAA8\uC784",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uBE5B\uC774 \uC7A0\uAE30\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC548\uC744 \uB3CC\uBCF4\uB294 \uCABD\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.BYEONG.011"
                ]
              }
            ],
            D: [
              {
                label: "\uCD9C\uB825 \uC548 \uD568",
                rule: "\uD310\uC815\uC5D0\uB294 \uC4F0\uB418 \uBB38\uC7A5\uC73C\uB85C \uB0B4\uBCF4\uB0B4\uC9C0 \uC54A\uB294\uB2E4 (PDF 0-1 6\uBC88).",
                items: [
                  {
                    item: "\uD0C0\uC778\uC744 \uBB34\uC2DC\uD558\uACE0 \uC0C1\uCC98\uB97C \uC900\uB2E4\uB294 \uC11C\uC220 \uC6D0\uBB38",
                    evidence: [
                      "R2.BYEONG.003"
                    ],
                    note: "\uC0AC3\uC740 \uAE0D\uC815 \uBC88\uC5ED\uB9CC \uC0AC\uC6A9"
                  },
                  {
                    item: "\uACB0\uD63C \uC2DC \uD1F4\uC9C1 \uACBD\uD5A5",
                    evidence: [
                      "R2.BYEONG.072"
                    ]
                  },
                  {
                    item: "\uBCF8\uCC45 \uC0AC\uB840\uC758 \uC774\uD63C\xB7\uC0AC\uBCC4\xB7\uC5C5\uC885 \uB2E8\uC815",
                    evidence: []
                  }
                ]
              }
            ]
          },
          \u4E01: {
            name: "\uC815\uD654 \u2014 \uC138\uC0C1\uC744 \uBC1D\uD788\uB294 \uB4F1\uBD88",
            sourcePage: "PDF page 17-21 (4. \uC815\uD654)",
            _note: "PDF 4\uC7A5(pp.17~21) \uC804\uC0AC. A \uD0A4\uB294 '\uC2AC\uB86F\uCF54\uB4DC \uB77C\uBCA8' \uBCD1\uAE30(\uAC80\uC99D\uAE30 V6 \uD638\uD658, \u7532 \uC608\uC81C\uC758 \uC0AC2=\uC131\uD5A5 \uB9E4\uD551 \uC720\uC9C0). B\u5404\u884C source\uB294 \uAC80\uC99D\uAE30 V5 \uC694\uAD6C \uD544\uB4DC\uB85C evidence\uC640 \uB3D9\uC77C \uAC12. 0\uB2E8\uACC4\uB294 \uD615\uD0DC \uD310\uC815 \uD45C(\uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78 \uC5C6\uC74C \u2192 \u2014). 7\uB2E8\uACC4\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098(\uB05D \uC2AC\uB86F \uD6C4\uBCF4)\uB77C \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC74C(\u2014).",
            A: {
              "\uC0AC1 \uD615\uC0C1": {
                text: "\uB2F9\uC2E0\uC740 \uC138\uC0C1\uC744 \uBC1D\uD788\uB294 \uB4F1\uBD88, \uADF8\uC911\uC5D0\uC11C\uB3C4 {0\uB2E8\uACC4 \uD615\uD0DC}\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.JEONG.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uC12C\uC138\uD558\uACE0 \uB530\uB73B\uD55C \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uBCF4\uC774\uC9C0 \uC54A\uB294 \uB9C8\uC74C\uC758 \uC138\uACC4\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uACE0, \uC0AC\uB78C\uC744 \uC790\uC560\uB86D\uAC8C \uD488\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.005"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uBC1D\uACE0 \uCF8C\uD65C\uD558\uAC8C \uC5B4\uC6B8\uB9AC\uBA74\uC11C\uB3C4 \uC608\uC758\uC640 \uC21C\uC11C\uB97C \uC9C0\uD0B5\uB2C8\uB2E4. \uC55E\uC5D0 \uB098\uC11C\uAE30\uBCF4\uB2E4 \uB4A4\uC5D0\uC11C \uD310\uC744 \uBC1D\uD788\uB294 \uCABD\uC744 \uD0DD\uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.005",
                  "R2.JEONG.060"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uD310\uB2E8\uB825\uACFC \uCD94\uC9C4\uB825\uC774 \uC788\uACE0, \uC790\uC2E0\uC744 \uD0DC\uC6CC \uACC1\uC744 \uBC1D\uD788\uB294 \uD5CC\uC2E0\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.005",
                  "R2.JEONG.062"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uB4DC\uB7EC\uB098\uC9C0 \uC54A\uAC8C \uBE44\uCD94\uACE0 \uC5F0\uCD9C\uD558\uB294 \uD798\uC785\uB2C8\uB2E4. \uBB34\uB300 \uC55E\uBCF4\uB2E4 \uBB34\uB300 \uB4A4\uC5D0\uC11C \uD310\uC744 \uC644\uC131\uD569\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.060"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uB4F1\uBD88\uC740 \uBB3C \uC704\uC5D0\uC11C \uAC00\uC7A5 \uC544\uB984\uB2F5\uAC8C \uBE44\uCE69\uB2C8\uB2E4. \uC774\uB984\uC774 \uAC78\uB9AC\uB294 \uC790\uB9AC\uB97C \uBA3C\uC800 \uC138\uC6B0\uBA74 \uC7AC\uBB3C\uC774 \uB530\uB77C\uC635\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.030",
                  "R2.JEONG.041"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uB4F1\uBD88\uC740 \uC5B4\uB460 \uC18D\uC5D0\uC11C \uACC1\uC744 \uC870\uC6A9\uD788 \uBC1D\uD799\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uC18C\uB9AC \uC5C6\uC774 \uC0C1\uB300\uC758 \uAE38\uC744 \uBE44\uCDB0 \uC8FC\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uB2F9\uC2E0\uC758 \uBE5B\uC744 \uB2F4\uC544 \uC904 \uB113\uC740 \uD638\uC218 \uAC19\uC740 \uACC1\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.003",
                  "R2.JEONG.032"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218\uC640 \uD569\uD560 \uB54C.",
                evidence: [
                  "R2.JEONG.032"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uC5B4\uB450\uC6B8\uC218\uB85D \uBC1D\uC544\uC9C0\uB294 \uD798 / \uC790\uC2E0\uC744 \uD0DC\uC6CC \uACC1\uC744 \uBC1D\uD788\uB294 \uD5CC\uC2E0",
                evidence: [
                  "R2.JEONG.010",
                  "R2.JEONG.062"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uBC29\uC1A1\xB7PD, \uC608\uC220, \uC815\uC2E0\uC138\uACC4\xB7\uC2EC\uB9AC\uC0C1\uB2F4, \uCCA0\uD559, \uC778\uD130\uB137, \uAD11\uACE0.",
                evidence: [
                  "R2.JEONG.006"
                ]
              }
            },
            B: [
              {
                stage: 0,
                stageName: "\uD615\uD0DC \uD310\uC815",
                stageNote: "\uAC19\uC740 \uB4F1\uBD88\uB3C4 \uBB34\uC5C7\uC73C\uB85C \uBE5B\uB098\uB294\uC9C0 \uBA3C\uC800 \uC815\uD55C\uB2E4",
                stageRule: "\uB458 \uC774\uC0C1 \uD574\uB2F9\uD558\uBA74 \uC5B4\uB290 \uD615\uD0DC\uB97C \uBA3C\uC800 \uC4F8\uC9C0 [\uD310\uC815 \uD544\uC694]. \uD615\uD0DC\uB294 2\uB2E8\uACC4(\uACB9\uCE60 \uB54C \uBC1D\uC544\uC9C0\uB294\uC9C0 \uD750\uB824\uC9C0\uB294\uC9C0)\uC640 3\uB2E8\uACC4(\uB098\uBB34\uC758 \uC5ED\uD560)\uB97C \uBC14\uAFBC\uB2E4.",
                code: "\uC8150-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 \uC788\uC74C",
                form: "\uB2EC",
                sa1Phrase: "\uD638\uC218 \uC704\uB97C \uBE44\uCD94\uB294 \uB2EC",
                slots: [],
                diagnosis: "\u2014",
                prescription: "\u2014",
                evidence: [
                  "R2.JEONG.003"
                ],
                source: [
                  "R2.JEONG.003"
                ],
                note: "0\uB2E8\uACC4\uB294 \uD615\uD0DC \uD310\uC815 \uD45C. \uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78\uC774 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30\uD588\uACE0 form\xB7sa1Phrase\uAC00 \uC6D0\uBB38 \uCE78\uC774\uB2E4."
              },
              {
                stage: 0,
                stageName: "\uD615\uD0DC \uD310\uC815",
                stageNote: "\uAC19\uC740 \uB4F1\uBD88\uB3C4 \uBB34\uC5C7\uC73C\uB85C \uBE5B\uB098\uB294\uC9C0 \uBA3C\uC800 \uC815\uD55C\uB2E4",
                stageRule: "\uB458 \uC774\uC0C1 \uD574\uB2F9\uD558\uBA74 \uC5B4\uB290 \uD615\uD0DC\uB97C \uBA3C\uC800 \uC4F8\uC9C0 [\uD310\uC815 \uD544\uC694]. \uD615\uD0DC\uB294 2\uB2E8\uACC4(\uACB9\uCE60 \uB54C \uBC1D\uC544\uC9C0\uB294\uC9C0 \uD750\uB824\uC9C0\uB294\uC9C0)\uC640 3\uB2E8\uACC4(\uB098\uBB34\uC758 \uC5ED\uD560)\uB97C \uBC14\uAFBC\uB2E4.",
                code: "\uC8150-\uB098",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C + \uB098\uBB34 \uC788\uC74C",
                form: "\uAC00\uB85C\uB4F1",
                sa1Phrase: "\uBE44\uAC00 \uC640\uB3C4 \uC9C0\uC9C0\uB300 \uC704\uC5D0\uC11C \uBE5B\uB098\uB294 \uAC00\uB85C\uB4F1",
                slots: [],
                diagnosis: "\u2014",
                prescription: "\u2014",
                evidence: [
                  "R2.JEONG.004"
                ],
                source: [
                  "R2.JEONG.004"
                ],
                note: "0\uB2E8\uACC4\uB294 \uD615\uD0DC \uD310\uC815 \uD45C. \uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78\uC774 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30\uD588\uACE0 form\xB7sa1Phrase\uAC00 \uC6D0\uBB38 \uCE78\uC774\uB2E4."
              },
              {
                stage: 0,
                stageName: "\uD615\uD0DC \uD310\uC815",
                stageNote: "\uAC19\uC740 \uB4F1\uBD88\uB3C4 \uBB34\uC5C7\uC73C\uB85C \uBE5B\uB098\uB294\uC9C0 \uBA3C\uC800 \uC815\uD55C\uB2E4",
                stageRule: "\uB458 \uC774\uC0C1 \uD574\uB2F9\uD558\uBA74 \uC5B4\uB290 \uD615\uD0DC\uB97C \uBA3C\uC800 \uC4F8\uC9C0 [\uD310\uC815 \uD544\uC694]. \uD615\uD0DC\uB294 2\uB2E8\uACC4(\uACB9\uCE60 \uB54C \uBC1D\uC544\uC9C0\uB294\uC9C0 \uD750\uB824\uC9C0\uB294\uC9C0)\uC640 3\uB2E8\uACC4(\uB098\uBB34\uC758 \uC5ED\uD560)\uB97C \uBC14\uAFBC\uB2E4.",
                code: "\uC8150-\uB2E4",
                condition: "\uC544\uB798 \uAE00\uC790\uC5D0 \uBB3C, \uB610\uB294 \uB4F1\uBD88 \uB458 \uC774\uC0C1",
                form: "\uBCC4",
                sa1Phrase: "\uBC24\uD558\uB298\uC758 \uBCC4(\uC14B\uC774\uBA74 \uC740\uD558\uC218)",
                slots: [],
                diagnosis: "\u2014",
                prescription: "\u2014",
                evidence: [
                  "R2.JEONG.002"
                ],
                source: [
                  "R2.JEONG.002"
                ],
                note: "0\uB2E8\uACC4\uB294 \uD615\uD0DC \uD310\uC815 \uD45C. \uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78\uC774 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30\uD588\uACE0 form\xB7sa1Phrase\uAC00 \uC6D0\uBB38 \uCE78\uC774\uB2E4."
              },
              {
                stage: 0,
                stageName: "\uD615\uD0DC \uD310\uC815",
                stageNote: "\uAC19\uC740 \uB4F1\uBD88\uB3C4 \uBB34\uC5C7\uC73C\uB85C \uBE5B\uB098\uB294\uC9C0 \uBA3C\uC800 \uC815\uD55C\uB2E4",
                stageRule: "\uB458 \uC774\uC0C1 \uD574\uB2F9\uD558\uBA74 \uC5B4\uB290 \uD615\uD0DC\uB97C \uBA3C\uC800 \uC4F8\uC9C0 [\uD310\uC815 \uD544\uC694]. \uD615\uD0DC\uB294 2\uB2E8\uACC4(\uACB9\uCE60 \uB54C \uBC1D\uC544\uC9C0\uB294\uC9C0 \uD750\uB824\uC9C0\uB294\uC9C0)\uC640 3\uB2E8\uACC4(\uB098\uBB34\uC758 \uC5ED\uD560)\uB97C \uBC14\uAFBC\uB2E4.",
                code: "\uC8150-\uB77C",
                condition: "\uC704\uC5D0 \uD574\uB2F9 \uC5C6\uC74C",
                form: "\uCD1B\uBD88",
                sa1Phrase: "\uC790\uC2E0\uC744 \uD0DC\uC6CC \uACC1\uC744 \uBC1D\uD788\uB294 \uCD1B\uBD88",
                slots: [],
                diagnosis: "\u2014",
                prescription: "\u2014",
                evidence: [
                  "R2.JEONG.001",
                  "R2.JEONG.062"
                ],
                source: [
                  "R2.JEONG.001",
                  "R2.JEONG.062"
                ],
                note: "0\uB2E8\uACC4\uB294 \uD615\uD0DC \uD310\uC815 \uD45C. \uC9C4\uB2E8\xB7\uCC98\uBC29 \uCE78\uC774 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30\uD588\uACE0 form\xB7sa1Phrase\uAC00 \uC6D0\uBB38 \uCE78\uC774\uB2E4."
              },
              {
                stage: 1,
                stageName: "\uBC24\uACFC \uB0AE",
                stageNote: null,
                code: "\uC8151-\uAC00",
                condition: "\uC544\uB798 \uAE00\uC790\uAC00 \uBC24 (\uBB3C\uC758 \uBB34\uB9AC)",
                slots: [
                  "\uC0AC4",
                  "\uC77C2"
                ],
                diagnosis: "\uC5B4\uB450\uC6B8\uC218\uB85D \uB354 \uBC1D\uAC8C \uBE5B\uB098\uB294 \uB4F1\uBD88\uC785\uB2C8\uB2E4. \uB0A8\uB4E4\uC774 \uC9C0\uCE58\uB294 \uB54C, \uB9C9\uB9C9\uD55C \uC790\uB9AC\uC5D0\uC11C \uC624\uD788\uB824 \uD798\uC744 \uB0C5\uB2C8\uB2E4.",
                prescription: "\uBAA8\uB450\uAC00 \uC5B4\uB824\uC6CC\uD558\uB294 \uC790\uB9AC, \uC5B4\uB460\uC744 \uBC1D\uD600\uC57C \uD558\uB294 \uC77C\uC5D0\uC11C \uC774\uB984\uC774 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.010"
                ],
                source: [
                  "R2.JEONG.010"
                ]
              },
              {
                stage: 1,
                stageName: "\uBC24\uACFC \uB0AE",
                stageNote: null,
                code: "\uC8151-\uB098",
                condition: "\uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE (\uBD88\uC758 \uBB34\uB9AC)",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uD55C\uB0AE\uC758 \uB4F1\uBD88\uC774\uB77C \uAC00\uC9C4 \uBE5B\uC774 \uC798 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBC24\uC758 \uC77C, \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294 \uC790\uB9AC, \uC2DC\uCC28\uAC00 \uD070 \uB098\uB77C\uC640 \uB2FF\uC740 \uC77C\uC5D0\uC11C \uBE5B\uC744 \uB418\uCC3E\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.011"
                ],
                source: [
                  "R2.JEONG.011"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uC640 \uB4F1\uBD88",
                code: "\uC8152-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uD574\uC640 \uD568\uAED8 \uB5A0 \uC788\uB294 \uB4F1\uBD88\uC774\uB77C, \uD574\uAC00 \uBC1D\uC744\uC218\uB85D \uB0B4 \uBE5B\uC774 \uBB3B\uD799\uB2C8\uB2E4. \uD604\uC2E4\uACFC \uC774\uC0C1 \uC0AC\uC774\uC5D0\uC11C \uC790\uC8FC \uB9C8\uC74C\uC774 \uAC08\uB9BD\uB2C8\uB2E4.",
                prescription: "\uD574\uB97C \uC815\uB9AC\uD574 \uC8FC\uB294 \uBCF4\uC11D\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C, \uBE44\uAC00 \uD574\uB97C \uAC00\uB9AC\uB294 \uB54C, \uD070 \uB098\uBB34\uAC00 \uAC00\uB824 \uC8FC\uB294 \uB54C\uC5D0 \uBE5B\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uADF8\uC804\uC774\uB77C\uBA74 \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C\uC774 \uAE38\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.012"
                ],
                source: [
                  "R2.JEONG.012"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uC640 \uB4F1\uBD88",
                code: "\uC8152-\uB098",
                condition: "\uB4F1\uBD88 \uB458 + \uD615\uD0DC\uAC00 \uB2EC",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uB2EC\uC774 \uB458\uC774\uB77C \uC624\uD788\uB824 \uD750\uB824\uC9D1\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uAC00 \uD558\uB098\uB97C \uAC00\uB824 \uC8FC\uB294 \uB54C\uB97C \uAE30\uB2E4\uB9AC\uC138\uC694.",
                evidence: [
                  "R2.JEONG.013"
                ],
                source: [
                  "R2.JEONG.013"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uC640 \uB4F1\uBD88",
                code: "\uC8152-\uB2E4",
                condition: "\uB4F1\uBD88 \uB458 \uC774\uC0C1 + \uD615\uD0DC\uAC00 \uBCC4\xB7\uAC00\uB85C\uB4F1",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uBCC4\uC774 \uBAA8\uC5EC \uBCC4\uBB34\uB9AC\uAC00 \uB429\uB2C8\uB2E4. \uD568\uAED8 \uC788\uC744\uC218\uB85D \uB354 \uBC1D\uC544\uC9C0\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uACFC \uC815\uC2E0\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uAC00\uB85C\uB4F1\uC774\uB77C\uBA74 \uBE5B\uC744 \uB2E4\uB8E8\uB294 \uC77C\uB3C4 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.014"
                ],
                source: [
                  "R2.JEONG.014"
                ]
              },
              {
                stage: 2,
                stageName: "\uAC19\uC740 \uBD88",
                stageNote: "\uD574\uC640 \uB4F1\uBD88",
                code: "\uC8152-\uB77C",
                condition: "\uB4F1\uBD88 \uB458 \uC774\uC0C1 (\uACF5\uD1B5)",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uACC1\uC5D0 \uAC19\uC740 \uBD88\uC774 \uC788\uC5B4, \uBC1C\uBC11\uC5D0 \uC7AC\uBB3C\uC774\uB098 \uC790\uB9AC\uAC00 \uBC1B\uCCD0 \uC904 \uB54C \uD798\uC774 \uB0A9\uB2C8\uB2E4.",
                prescription: "\uB113\uC740 \uD638\uC218\uAC00 \uB4E4\uC5B4\uC640 \uD558\uB098\uB97C \uB370\uB824\uAC00\uB294 \uB54C\uC5D0 \uC790\uB9AC\uAC00 \uC815\uB9AC\uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.015"
                ],
                source: [
                  "R2.JEONG.015"
                ]
              },
              {
                stage: 3,
                stageName: "\uB098\uBB34",
                stageNote: "\uC9C0\uC9C0\uB300\uC640 \uAF43",
                code: "\uC8153-\uAC00",
                condition: "\uD070 \uB098\uBB34 + \uD615\uD0DC\uAC00 \uAC00\uB85C\uB4F1",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uB192\uC740 \uC9C0\uC9C0\uB300 \uC704\uC758 \uAC00\uB85C\uB4F1\uC774\uB77C \uBA40\uB9AC\uAE4C\uC9C0 \uBE44\uCDA5\uB2C8\uB2E4.",
                prescription: "\uB9C8\uC74C\uACFC \uC815\uC2E0\uC744 \uAC00\uB974\uCE58\uB294 \uC77C\uC5D0\uC11C \uD06C\uAC8C \uC4F0\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.020"
                ],
                source: [
                  "R2.JEONG.020"
                ]
              },
              {
                stage: 3,
                stageName: "\uB098\uBB34",
                stageNote: "\uC9C0\uC9C0\uB300\uC640 \uAF43",
                code: "\uC8153-\uB098",
                condition: "\uD070 \uB098\uBB34 (\uAC00\uB85C\uB4F1 \uC544\uB2D8)",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uB098\uBB34\uC5D0 \uC791\uC740 \uAF43\uC744 \uD53C\uC6C1\uB2C8\uB2E4. \uACB0\uC2E4\uC740 \uC791\uC9C0\uB9CC \uBD84\uBA85\uD569\uB2C8\uB2E4.",
                prescription: "\uD070 \uD310\uBCF4\uB2E4 \uC791\uACE0 \uD655\uC2E4\uD55C \uACB0\uACFC\uB97C \uC313\uC544 \uAC00\uC138\uC694.",
                evidence: [
                  "R2.JEONG.020"
                ],
                source: [
                  "R2.JEONG.020"
                ]
              },
              {
                stage: 3,
                stageName: "\uB098\uBB34",
                stageNote: "\uC9C0\uC9C0\uB300\uC640 \uAF43",
                code: "\uC8153-\uB2E4",
                condition: "\uD478\uB978 \uB369\uAD74 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC5F06"
                ],
                diagnosis: "\uB369\uAD74\uC5D0 \uC54C\uB9DE\uAC8C \uAF43\uC744 \uD53C\uC6B0\uB294 \uB4F1\uBD88\uC785\uB2C8\uB2E4. \uAC00\uAE4C\uC6B4 \uC0AC\uB78C\uC744 \uD589\uBCF5\uD558\uAC8C \uD558\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAC00\uB85C\uB4F1\uC774\uB77C\uBA74 \uB0AE\uC740 \uACF3\uC5D0\uC11C \uAE38\uC744 \uC778\uB3C4\uD558\uB294 \uC77C, \uACE7 \uC0AC\uB78C\uC758 \uB9C8\uC74C\uC744 \uB3CC\uBCF4\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.021"
                ],
                source: [
                  "R2.JEONG.021"
                ]
              },
              {
                stage: 3,
                stageName: "\uB098\uBB34",
                stageNote: "\uC9C0\uC9C0\uB300\uC640 \uAF43",
                code: "\uC8153-\uB77C",
                condition: "\uB098\uBB34 \uB9CE\uC74C + \uD615\uD0DC\uAC00 \uAC00\uB85C\uB4F1",
                slots: [
                  "\uC0AC7"
                ],
                diagnosis: "\uC9C0\uC9C0\uB300\uAC00 \uB108\uBB34 \uB9CE\uC544 \uBE5B\uC774 \uAC00\uB824\uC9D1\uB2C8\uB2E4. \uC8FC\uBCC0 \uC0AC\uB78C\uC758 \uC77C\uC5D0 \uD718\uB9D0\uB824 \uB0B4 \uC77C\uC744 \uBABB \uD560 \uB54C\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                evidence: [
                  "R2.JEONG.022"
                ],
                source: [
                  "R2.JEONG.022"
                ],
                note: "\uC6D0\uBB38 \uCC98\uBC29 \uCE78: \uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4. \uCC98\uBC29 \uBBF8\uC81C\uACF5, \uC9C4\uB2E8\uBB38\uB9CC \uC0AC\uC6A9."
              },
              {
                stage: 4,
                stageName: "\uBB3C",
                stageNote: "\uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uC8154-\uAC00",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218\uC640 \uD569",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C3"
                ],
                diagnosis: "\uD638\uC218 \uC704\uC5D0 \uBE44\uCE5C \uB2EC\uC785\uB2C8\uB2E4. \uBB36\uC778 \uB4EF \uBCF4\uC5EC\uB3C4 \uADF8 \uC790\uB9AC\uC5D0\uC11C \uB098\uBB34\uB97C \uAE38\uB7EC \uB0C5\uB2C8\uB2E4.",
                prescription: "\uAC00\uB974\uCE58\uACE0, \uC9D3\uACE0, \uC0AC\uB78C\uC744 \uB9C8\uC8FC\uD558\uB294 \uC77C, \uB9C8\uC74C\uC744 \uACF5\uBD80\uD558\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4. \uC774\uB984\uC744 \uAC78\uACE0 \uBCA0\uD480\uC218\uB85D \uC0B6\uC774 \uC548\uC815\uB429\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.030"
                ],
                source: [
                  "R2.JEONG.030"
                ]
              },
              {
                stage: 4,
                stageName: "\uBB3C",
                stageNote: "\uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uC8154-\uB098",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC7AC7"
                ],
                diagnosis: "\uBE44\uAC00 \uC640\uB3C4 \uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uAC00\uB85C\uB4F1\uC785\uB2C8\uB2E4. \uD574\uAC00 \uAC00\uB824\uC9C8 \uB54C \uC624\uD788\uB824 \uB0B4 \uBE5B\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                prescription: "\uADF8 \uC2DC\uB0C7\uBB3C\uC774 \uB545\uC744 \uB04C\uC5B4\uC640 \uB098\uBB34\uB97C \uC2EC\uAC8C \uD574 \uC8FC\uB2C8, \uC791\uC740 \uD130\uB97C \uB9C8\uB828\uD574 \uB450\uC138\uC694.",
                evidence: [
                  "R2.JEONG.033"
                ],
                source: [
                  "R2.JEONG.033"
                ]
              },
              {
                stage: 4,
                stageName: "\uBB3C",
                stageNote: "\uC774\uB984\uACFC \uC790\uB9AC",
                code: "\uC8154-\uB2E4",
                condition: "\uBB3C \uB9CE\uC74C",
                slots: [
                  "\uC77C3",
                  "\uC77C4"
                ],
                diagnosis: "\uBB3C\uC774 \uB9CE\uC544\uB3C4 \uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uB4F1\uBD88\uC785\uB2C8\uB2E4. \uC5B4\uB460 \uC18D\uC5D0\uC11C \uB354 \uBE5B\uB0A9\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC774 \uC624\uAC00\uB294 \uC77C, \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C, \uC720\uD1B5\uACFC \uC74C\uC2DD\uC5D0\uC11C \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.034"
                ],
                source: [
                  "R2.JEONG.034"
                ]
              },
              {
                stage: 5,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uC8155-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC7AC1",
                  "\uC7AC2"
                ],
                diagnosis: "\uD070 \uC1E0\uB97C \uC791\uC740 \uBD88\uB85C \uB179\uC774\uAE30 \uC5B4\uB824\uC6CC, \uD070 \uC7AC\uBB3C\uC744 \uBC14\uB85C \uC950\uAE30\uB294 \uC27D\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB369\uAD74\uC774 \uAE08\uB9E5\uC744 \uB2E4\uB4EC\uC5B4 \uC8FC\uAC70\uB098 \uD638\uC218\uC640 \uD569\uD574 \uB098\uBB34\uAC00 \uC0DD\uAE30\uB294 \uB54C\uC5D0 \uC7AC\uBB3C\uC774 \uC190\uC5D0 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uADF8 \uB54C\uB97C \uC9DA\uC5B4 \uB450\uC138\uC694.",
                evidence: [
                  "R2.JEONG.040"
                ],
                source: [
                  "R2.JEONG.040"
                ]
              },
              {
                stage: 5,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uC8155-\uB098",
                condition: "\uAE08\uB9E5\uC774 \uD0DC\uC5B4\uB09C \uD574\uC5D0 + \uD638\uC218\uC640 \uD569",
                slots: [
                  "\uC77C2",
                  "\uC7AC1"
                ],
                diagnosis: "\uAD6D\uAC00\uC640 \uAD00\uB828\uB41C \uAE30\uAD00\uC5D0\uC11C \uC7AC\uBB3C\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.",
                prescription: "\uACF5\uC801\uC778 \uC77C, \uAD6D\uAC00 \uAE30\uAD00\uC758 \uC790\uB9AC\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.063"
                ],
                source: [
                  "R2.JEONG.063"
                ]
              },
              {
                stage: 5,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uC8155-\uB2E4",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC7AC1",
                  "\uC77C3"
                ],
                diagnosis: "\uC958 \uC218 \uC788\uB294 \uC7AC\uBB3C\uC744 \uAC00\uC9C4 \uB4F1\uBD88\uC785\uB2C8\uB2E4. \uB2E4\uB9CC \uADF8 \uBCF4\uC11D\uC774 \uD574\uB97C \uBD88\uB7EC\uC640 \uB9C8\uC74C\uC774 \uAC08\uB9AC\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC774\uB984\uC744 \uBA3C\uC800 \uC138\uC6B0\uC138\uC694. \uBC95\xB7\uAE08\uC735\xB7\uC758\uB8CC\uCC98\uB7FC \uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.041"
                ],
                source: [
                  "R2.JEONG.041"
                ]
              },
              {
                stage: 5,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uC8155-\uB77C",
                condition: "\uC544\uB798 \uAE00\uC790\uAC00 \uAE08\uC73C\uB85C \uBAA8\uC784",
                slots: [
                  "\uC7AC1"
                ],
                diagnosis: "\uBC1C\uBC11\uC73C\uB85C \uC7AC\uBB3C\uC774 \uBAA8\uC5EC\uB4DC\uB294 \uB4F1\uBD88\uC785\uB2C8\uB2E4.",
                prescription: "\uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4.",
                evidence: [
                  "R2.JEONG.042"
                ],
                source: [
                  "R2.JEONG.042"
                ],
                note: "\uC6D0\uBB38 \uCC98\uBC29 \uCE78: \uC790\uB8CC \uC5C6\uC74C \u2014 \uC9C4\uB2E8\uB9CC \uC4F4\uB2E4. \uCC98\uBC29 \uBBF8\uC81C\uACF5, \uC9C4\uB2E8\uBB38\uB9CC \uC0AC\uC6A9."
              },
              {
                stage: 5,
                stageName: "\uAE08",
                stageNote: "\uC7AC\uBB3C",
                code: "\uC8155-\uB9C8",
                condition: "\uAE08 \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uB4DC\uB7EC\uB098\uC9C0 \uC54A\uAC8C \uD310\uC744 \uC9C0\uD0A4\uB294 \uC77C\uC5D0 \uB9DE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC815\uBCF4\uB97C \uB2E4\uB8E8\uB294 \uC77C, \uC2E0\uBD84\uC774 \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.061"
                ],
                source: [
                  "R2.JEONG.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uB545",
                stageNote: "\uBE44\uCD94\uC5B4 \uAE30\uB974\uB294 \uAC83",
                code: "\uC8156-\uAC00",
                condition: "\uAC70\uB300\uD55C \uC0B0\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C3"
                ],
                diagnosis: "\uB113\uC740 \uBC8C\uD310\uC5D0 \uD640\uB85C \uB72C \uB2EC\uC774\uB77C \uC678\uB85C\uC6C0\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC81C\uB3C4 \uBC16\uC758 \uAD50\uC721, \uACE7 \uC2A4\uC2A4\uB85C \uCC28\uB9AC\uB294 \uBC30\uC6C0\uD130\uC5D0\uC11C \uC131\uACFC\uB97C \uB0C5\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.050"
                ],
                source: [
                  "R2.JEONG.050"
                ]
              },
              {
                stage: 6,
                stageName: "\uB545",
                stageNote: "\uBE44\uCD94\uC5B4 \uAE30\uB974\uB294 \uAC83",
                code: "\uC8156-\uB098",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC5F06"
                ],
                diagnosis: "\uC815\uC6D0\uC5D0 \uB72C \uB2EC\uC785\uB2C8\uB2E4. \uAC00\uC815\uC744 \uAFB8\uB9AC\uB294 \uD798\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAC00\uAE4C\uC6B4 \uC6B8\uD0C0\uB9AC\uB97C \uAC00\uAFB8\uB294 \uC77C\uC774 \uBE5B\uC744 \uD0A4\uC6C1\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.051"
                ],
                source: [
                  "R2.JEONG.051"
                ]
              },
              {
                stage: 7,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uC8157-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D3",
                  "\uC77C1"
                ],
                diagnosis: "\uB4F1\uBD88\uC740 \uC790\uC2E0\uC744 \uD0DC\uC6CC \uACC1\uC744 \uBC1D\uD799\uB2C8\uB2E4. \uC55E\uC5D0 \uC11C\uAE30\uBCF4\uB2E4 \uB4A4\uC5D0\uC11C \uBE44\uCD94\uB294 \uC77C, \uC5F0\uCD9C\uD558\uACE0 \uAE30\uD68D\uD558\uB294 \uC77C\uC5D0\uC11C \uAC00\uC7A5 \uBE5B\uB0A9\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.JEONG.060",
                  "R2.JEONG.062"
                ],
                source: [
                  "R2.JEONG.060",
                  "R2.JEONG.062"
                ],
                note: "\uD2B9\uC131 \uD45C\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098(\uB05D \uC2AC\uB86F\uC6A9). \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30."
              }
            ],
            C: [
              {
                code: "\uC815\uC6B4-\uAC00",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uD569)",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC42"
                ],
                sentence: "\uBE5B\uC744 \uB2F4\uC544 \uC904 \uD638\uC218\uB97C \uB9CC\uB098\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uACC1\uC758 \uC790\uB9AC\uAC00 \uC815\uD574\uC9D1\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.032"
                ]
              },
              {
                code: "\uC815\uC6B4-\uB098",
                incoming: "\uB4F1\uBD88\uC774\uB098 \uD638\uC218\uAC00 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42",
                  "\uC7AC5"
                ],
                slotNote: "\uACC42 \uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uBE5B\uC774 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC0B0\uB9E5\uC774 \uBB3C\uC744 \uB9C9\uACE0 \uB098\uBB34\uAC00 \uC11C\uBA74 \uC791\uC740 \uD130\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.031"
                ]
              },
              {
                code: "\uC815\uC6B4-\uB2E4",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uBC24\uC73C\uB85C \uBAA8\uC784",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC5B4\uB460\uC774 \uAE4A\uC5B4\uC838 \uC624\uD788\uB824 \uBE5B\uC774 \uCEE4\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.010"
                ]
              },
              {
                code: "\uC815\uC6B4-\uB77C",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uC0C8\uBCBD\xB7\uCD08\uC800\uB141\uC73C\uB85C \uBC14\uB01C",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB0AE\uC5D0 \uBB3B\uD614\uB358 \uBE5B\uC774 \uB2E4\uC2DC \uBCF4\uC774\uAE30 \uC2DC\uC791\uD558\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.011"
                ]
              },
              {
                code: "\uC815\uC6B4-\uB9C8",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D\xB7\uC2DC\uB0C7\uBB3C\xB7\uD070 \uB098\uBB34 (\uD574\uC640 \uD568\uAED8\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uD574\uAC00 \uC815\uB9AC\uB418\uAC70\uB098 \uAC00\uB824\uC838 \uB0B4 \uBE5B\uC774 \uB4DC\uB7EC\uB098\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.012",
                  "R2.JEONG.033"
                ]
              },
              {
                code: "\uC815\uC6B4-\uBC14",
                incoming: "\uD070 \uB098\uBB34 (\uB2EC\uC774 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uD558\uB098\uB97C \uAC00\uB824 \uC8FC\uB294 \uB098\uBB34\uAC00 \uB4E4\uC5B4\uC640 \uB2E4\uC2DC \uBC1D\uC544\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.013"
                ]
              },
              {
                code: "\uC815\uC6B4-\uC0AC",
                incoming: "\uD070 \uB098\uBB34 (\uAC00\uB85C\uB4F1\uC774 \uB458 \uC774\uC0C1\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uC9C0\uC9C0\uB300\uAC00 \uC0DD\uACA8 \uBE5B\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC774 \uCEE4\uC9C0\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.014"
                ]
              },
              {
                code: "\uC815\uC6B4-\uC544",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uB4F1\uBD88 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uBD88\uC774 \uC815\uB9AC\uB418\uC5B4 \uC790\uB9AC\uAC00 \uC5F4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.015"
                ]
              },
              {
                code: "\uC815\uC6B4-\uC790",
                incoming: "\uC544\uB798 \uAE00\uC790\uAC00 \uAE08\uC73C\uB85C \uBAA8\uC784",
                slots: [
                  "\uC7AC3",
                  "\uACC44"
                ],
                sentence: "\uBC1C\uBC11\uC73C\uB85C \uC7AC\uBB3C\uC774 \uBAA8\uC774\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.JEONG.042"
                ]
              }
            ],
            D: [
              {
                item: "\uBC30\uC6B0\uC790\uC758 \uC9C1\uC5C5 \uB2E8\uC815",
                evidence: [
                  "R2.JEONG.051"
                ],
                note: "\uD655\uC778 \uD544\uC694"
              },
              {
                item: "\uC5EC\uC131\uC774 \uACB0\uD63C\uD558\uBA74 \uACBD\uC81C\uC801\uC73C\uB85C \uD3B8\uD574\uC9C4\uB2E4\uB294 \uC11C\uC220",
                evidence: [
                  "R2.JEONG.032"
                ],
                note: "\uD6C4\uBC18\uBD80"
              }
            ]
          },
          \u620A: {
            name: "\uBB34\uD1A0 \u2014 \uAC70\uB300\uD55C \uC0B0\uB9E5",
            sourcePage: "PDF page 22-26 (5. \uBB34\uD1A0, D\uB294 p26 \uC0C1\uB2E8)",
            _note: "PDF 5\uC7A5(pp.22~25, D\uB294 p.26 \uC0C1\uB2E8) \uC804\uC0AC. A \uD0A4\uB294 '\uC2AC\uB86F\uCF54\uB4DC \uB77C\uBCA8' \uBCD1\uAE30(\uAC80\uC99D\uAE30 V6 \uD638\uD658). B\u5404\u884C source\uB294 \uAC80\uC99D\uAE30 V5 \uC694\uAD6C \uD544\uB4DC\uB85C evidence\uC640 \uB3D9\uC77C \uAC12. \uCC98\uBC29 \uCE78\uC774 \u2014\uC778 \uD589(\uBB341-\uAC00\u2032)\uACFC \uBB38\uC7A5 \uCE78 \uD558\uB098\uC778 7\uB2E8\uACC4(\uBB347-\uAC00)\uB294 \u2014 \uD45C\uAE30 + note.",
            A: {
              "\uC0AC1 \uD615\uC0C1": {
                text: "\uB2F9\uC2E0\uC740 \uAC70\uB300\uD55C \uC0B0\uB9E5\uC785\uB2C8\uB2E4. {1\uC21C\uC704 \uAC00\uC9C0 \uD55C \uC904}",
                evidence: [
                  "R2.MU.001"
                ]
              },
              "\uC0AC2 \uC131\uD5A5": {
                text: "\uBAA8\uB4E0 \uAC83\uC744 \uBC1B\uC544\uB4E4\uC774\uACE0 \uAE38\uB7EC \uB0B4\uB294 \uB113\uC740 \uD488\uC758 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uC27D\uAC8C \uD754\uB4E4\uB9AC\uC9C0 \uC54A\uACE0, \uD55C\uBC88 \uBBFF\uC740 \uAC83\uC740 \uC624\uB798 \uBBFF\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.002"
                ]
              },
              "\uC0AC3 \uB0A8\uB4E4\uC774\uBCF4\uB294\uB098": {
                text: "\uB108\uADF8\uB7FD\uACE0 \uB4EC\uC9C1\uD574 \uBCF4\uC785\uB2C8\uB2E4. \uBCC0\uD654 \uC55E\uC5D0\uC11C\uB294 \uC2E0\uC911\uD574\uC11C, \uC0C8\uB85C\uC6B4 \uAC83\uC744 \uBC1B\uC544\uB4E4\uC774\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.002"
                ]
              },
              "\uC0AC4 \uCE6D\uCC2C": {
                text: "\uC5B4\uB5A4 \uC790\uB9AC\uC5D0 \uAC00\uB3C4 \uAE08\uC138 \uC801\uC751\uD558\uACE0, \uD310 \uC804\uCCB4\uB97C \uAFB8\uB824 \uAC00\uB294 \uAC10\uAC01\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.003"
                ]
              },
              "\uC77C1 \uBB34\uAE30": {
                text: "\uD310\uC744 \uAFB8\uB9AC\uACE0 \uC0AC\uB78C\uACFC \uC790\uC6D0\uC744 \uC544\uC6B0\uB974\uB294 \uD798\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.003"
                ]
              },
              "\uC7AC6 \uB3C8\uC758\uC21C\uC11C": {
                text: "\uB113\uC740 \uB545\uC740 \uBB3C\uC774 \uC801\uC154\uC57C \uBE44\uC625\uD574\uC9D1\uB2C8\uB2E4. \uC7AC\uBB3C\uBCF4\uB2E4 \uC774\uB984\uC744 \uBA3C\uC800 \uC138\uC6B8 \uB54C \uC7AC\uBB3C\uC774 \uB9D1\uAC8C \uACE0\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.011",
                  "R2.MU.031"
                ]
              },
              "\uC5F01 \uAD00\uACC4\uC120\uC5B8": {
                text: "\uC0B0\uB9E5\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uD488\uACE0 \uADF8 \uC790\uB9AC\uC5D0 \uBA38\uBB45\uB2C8\uB2E4. \uB2F9\uC2E0\uB3C4 \uACC1\uC758 \uC0AC\uB78C\uC744 \uB109\uB109\uD788 \uBC1B\uC544 \uC8FC\uACE0 \uBB35\uBB35\uD788 \uC9C0\uD0A4\uB294 \uC0AC\uB78C\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74\uC11C \uC18D\uC73C\uB85C\uB294 \uB2F9\uC2E0 \uC704\uC5D0 \uBFCC\uB9AC\uB0B4\uB824 \uD568\uAED8 \uC790\uB77C \uC904 \uD070 \uB098\uBB34 \uAC19\uC740 \uC0AC\uB78C\uC744 \uBC14\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.002",
                  "R2.MU.010",
                  "R2.MU.022"
                ]
              },
              marriageCondition: {
                label: "\uACB0\uD63C \uC870\uAC74",
                text: "\uD070 \uB098\uBB34\uAC00 \uC2EC\uC5B4\uC9C8 \uB54C.",
                evidence: [
                  "R2.MU.022"
                ]
              },
              endingTheme: {
                label: "\uB05D \uC18C\uC7AC",
                text: "\uBCC0\uD558\uC9C0 \uC54A\uB294 \uBBFF\uC74C / \uBB34\uC5C7\uC774\uB4E0 \uAE38\uB7EC \uB0B4\uB294 \uD488",
                evidence: [
                  "R2.MU.002"
                ]
              },
              careerNote: {
                label: "\uC9C1\uC5C5 \uACB0(\uCC38\uACE0\uC6A9, \uB098\uC5F4 \uAE08\uC9C0)",
                text: "\uBD80\uB3D9\uC0B0, \uACBD\uC601, \uAD50\uC721(\uB098\uBB34\uB97C \uB4E4\uC77C \uB54C), \uC885\uAD50(\uB545\uC774 \uBA54\uB9C8\uB97C \uB54C).",
                evidence: [
                  "R2.MU.003"
                ]
              }
            },
            B: [
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uB545 \uC704\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC774\uB984\uACFC \uC790\uB9AC)",
                code: "\uBB341-\uAC00",
                condition: "\uD070 \uB098\uBB34 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uB545\uC5D0 \uD070 \uB098\uBB34\uAC00 \uC120 \uC0B0\uB9E5\uC785\uB2C8\uB2E4. \uBFCC\uB9AC\uB0B4\uB9B0 \uAC83\uC744 \uD06C\uAC8C \uD0A4\uC6CC \uC774\uB984\uC744 \uC5BB\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBC30\uC6C0\uC774 \uAE4A\uC5B4\uC9C8\uC218\uB85D \uC774\uB984\uACFC \uC7AC\uBB3C\uC774 \uD568\uAED8 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.010",
                  "R2.MU.022"
                ],
                source: [
                  "R2.MU.010",
                  "R2.MU.022"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uB545 \uC704\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC774\uB984\uACFC \uC790\uB9AC)",
                code: "\uBB341-\uAC00\u2032",
                condition: "\uD070 \uB098\uBB34 + \uC704\uC5D0 \uBB3C \uC5C6\uC74C + \uC544\uB798 \uAE00\uC790\uC5D0 \uBB3C",
                slots: [
                  "\uC7AC1"
                ],
                diagnosis: "\uB098\uBB34\uAC00 \uAE4A\uC774 \uBFCC\uB9AC\uB0B4\uB824 \uB545\uC18D \uBB3C\uC744 \uB04C\uC5B4\uC62C\uB9BD\uB2C8\uB2E4. \uB4DC\uB7EC\uB098\uC9C0 \uC54A\uB294 \uACF3\uC5D0\uC11C \uC7AC\uBB3C\uC774 \uC548\uC815\uB429\uB2C8\uB2E4.",
                prescription: "\u2014",
                evidence: [
                  "R2.MU.021"
                ],
                source: [
                  "R2.MU.021"
                ],
                note: "\uC6D0\uBB38 \uCC98\uBC29 \uCE78 \u2014. \uC9C4\uB2E8\uB9CC \uC0AC\uC6A9."
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uB545 \uC704\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC774\uB984\uACFC \uC790\uB9AC)",
                code: "\uBB341-\uB098",
                condition: "\uD478\uB978 \uB369\uAD74\uB9CC \uC788\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uB113\uC740 \uBC8C\uD310\uC5D0 \uB369\uAD74\uC774 \uBB34\uC131\uD574 \uC815\uC791 \uD070 \uAC83\uC774 \uC790\uB77C\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uD558\uB294 \uC77C\uC740 \uB9CE\uC740\uB370 \uD06C\uAC8C \uB0A8\uB294 \uAC83\uC774 \uC801\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB369\uAD74\uB3C4 \uC624\uB798 \uD0A4\uC6B0\uBA74 \uD070 \uB098\uBB34\uAC00 \uB429\uB2C8\uB2E4. \uD55C \uBD84\uC57C\uB97C \uC624\uB798 \uAE4A\uAC8C \uBC30\uC6B0\uC138\uC694.",
                evidence: [
                  "R2.MU.023"
                ],
                source: [
                  "R2.MU.023"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uB545 \uC704\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC774\uB984\uACFC \uC790\uB9AC)",
                code: "\uBB341-\uB2E4",
                condition: "\uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC77C4"
                ],
                diagnosis: "\uC544\uBB34\uAC83\uB3C4 \uC2EC\uC5B4\uC9C0\uC9C0 \uC54A\uC740 \uB113\uC740 \uB545\uC785\uB2C8\uB2E4. \uD488\uC740 \uD06C\uC9C0\uB9CC \uBB34\uC5C7\uC744 \uAE30\uB97C\uC9C0 \uC815\uD574\uC9C0\uC9C0 \uC54A\uC544 \uD798\uC774 \uD769\uC5B4\uC9D1\uB2C8\uB2E4.",
                prescription: "\uB098\uBB34\uB97C \uC2EC\uB294 \uC77C, \uACE7 \uAC00\uB974\uCE58\uACE0 \uC9D3\uACE0 \uC785\uD788\uACE0 \uC0AC\uB78C\uC744 \uB9C8\uC8FC\uD558\uB294 \uC77C\uC774 \uB545\uC758 \uAC00\uCE58\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.020"
                ],
                source: [
                  "R2.MU.020"
                ]
              },
              {
                stage: 1,
                stageName: "\uB098\uBB34",
                stageNote: "\uB545 \uC704\uC5D0 \uBB34\uC5C7\uC774 \uC2EC\uC5B4\uC84C\uB098 (\uC774\uB984\uACFC \uC790\uB9AC)",
                code: "\uBB341-\uB77C",
                condition: "\uD070 \uB098\uBB34 + \uD478\uB978 \uB369\uAD74 \uD568\uAED8",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC5F06"
                ],
                diagnosis: "\uD070 \uB098\uBB34 \uACC1\uC5D0 \uB369\uAD74\uC774 \uC5BD\uD600 \uB098\uBB34\uAC00 \uC798 \uC790\uB77C\uC9C0 \uBABB\uD569\uB2C8\uB2E4.",
                prescription: "\uD55C \uADF8\uB8E8\uB97C \uC815\uD574 \uB05D\uAE4C\uC9C0 \uD0A4\uC6B0\uC138\uC694.",
                evidence: [
                  "R2.MU.082"
                ],
                source: [
                  "R2.MU.082"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uAC00",
                condition: "\uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uBA54\uB9C8\uB978 \uB113\uC740 \uB545\uC774\uB77C \uC560\uC368\uB3C4 \uAE38\uB7EC\uC9C0\uB294 \uAC83\uC774 \uC801\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uCC3E\uC544 \uBC14\uAE65\uC73C\uB85C \uB098\uAC00\uC138\uC694. \uD574\uC678\uC640 \uB2FF\uC740 \uC77C, \uBB3C\uAC74\uACFC \uC74C\uC2DD\uC774 \uC624\uAC00\uB294 \uC77C\uC774 \uB545\uC744 \uC801\uC2ED\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.011",
                  "R2.MU.033"
                ],
                source: [
                  "R2.MU.011",
                  "R2.MU.033"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uB098",
                condition: "\uBB3C \uC788\uC74C + \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uC77C4",
                  "\uC77C6"
                ],
                diagnosis: "\uBB3C\uACFC \uD759\uB9CC \uC788\uC5B4 \uB545\uC774 \uD759\uD0D5\uC774 \uB429\uB2C8\uB2E4. \uB4E4\uC5B4\uC628 \uAC83\uC774 \uBAA8\uC774\uC9C0 \uC54A\uACE0 \uD769\uC5B4\uC9D1\uB2C8\uB2E4.",
                prescription: "\uB098\uBB34\uB97C \uC2EC\uB294 \uC77C(\uAC00\uB974\uCE58\uACE0 \uC9D3\uB294 \uC77C)\uC774 \uBB3C\uC744 \uB9D1\uAC8C \uD569\uB2C8\uB2E4. \uC774\uB54C \uAE08\uB9E5\uC758 \uC77C\uC740 \uD759\uD0D5\uC744 \uD0A4\uC6B0\uB2C8 \uB4A4\uB85C \uB450\uC138\uC694.",
                evidence: [
                  "R2.MU.030",
                  "R2.MU.052"
                ],
                source: [
                  "R2.MU.030",
                  "R2.MU.052"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uB2E4",
                condition: "\uBB3C \uB9CE\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uC77C6"
                ],
                diagnosis: "\uBB3C\uC774 \uB108\uBB34 \uB9CE\uC544 \uC2EC\uC740 \uAC83\uC758 \uBFCC\uB9AC\uAC00 \uBC84\uD2F0\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.",
                prescription: "\uC7AC\uBB3C\uBCF4\uB2E4 \uC774\uB984\uC744 \uBA3C\uC800 \uC887\uC73C\uC138\uC694. \uBC14\uB2E4 \uAC74\uB108\uC758 \uC77C\uC740 \uC624\uD788\uB824 \uD759\uD0D5\uC744 \uD0A4\uC6B0\uB2C8 \uC2E0\uC911\uD558\uAC8C \uACE0\uB974\uC138\uC694.",
                evidence: [
                  "R2.MU.031",
                  "R2.MU.034"
                ],
                source: [
                  "R2.MU.031",
                  "R2.MU.034"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uB77C",
                condition: "\uB9D1\uACE0 \uCCAD\uC544\uD55C \uC2DC\uB0C7\uBB3C\uACFC \uBB36\uC784",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC42"
                ],
                diagnosis: "\uC791\uC740 \uBB3C\uACFC \uBB36\uC778 \uD070 \uB545\uC774\uB77C \uC190\uBC1C\uC774 \uBB36\uC774\uACE0, \uB4E4\uC5B4\uC628 \uAC83\uB3C4 \uD750\uB824\uC9C0\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC744 \uACC4\uC18D \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uAE08\uB9E5\uC758 \uC77C, \uACE7 \uBC95\xB7\uAE08\uC735\xB7\uAE30\uC220\uCC98\uB7FC \uAE30\uC900\uC774 \uBD84\uBA85\uD55C \uC77C\uC774 \uC218\uB7C9\uC744 \uB298\uB824 \uC90D\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.032"
                ],
                source: [
                  "R2.MU.032"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uB77C\u2032",
                condition: "\uC704 \uAC00\uC9C0 + \uC6D0\uAD6D\uC5D0 \uBD88 \uC5C6\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uADF8 \uBB36\uC784\uC774 \uC5C6\uB358 \uBE5B\uC744 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uBC29\uC1A1\xB7\uC608\uC220\xB7\uAD50\uC721\xB7\uB9C8\uC74C\uC744 \uB2E4\uB8E8\uB294 \uC77C\uC5D0\uC11C \uB2A5\uB825\uC774 \uB4DC\uB7EC\uB0A9\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.043"
                ],
                source: [
                  "R2.MU.043"
                ]
              },
              {
                stage: 2,
                stageName: "\uBB3C",
                stageNote: "\uB545\uC744 \uC801\uC2DC\uB294 \uC7AC\uBB3C",
                code: "\uBB342-\uB9C8",
                condition: "\uC6D0\uAD6D\uC5D0 \uBB3C\uC740 \uC788\uB294\uB370 10\uB144 \uC6B4\uC5D0\uC11C \uBB3C\uC774 \uC624\uC9C0 \uC54A\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uACC43"
                ],
                diagnosis: "\uACE0\uC5EC \uC788\uB294 \uBB3C\uC774\uB77C \uD06C\uAC8C \uD750\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uBB3C\uC774 \uD750\uB974\uB294 \uB54C\uAC00 \uC624\uAE30 \uC804\uAE4C\uC9C0\uB294, \uD310\uC744 \uBC8C\uC774\uAE30\uBCF4\uB2E4 \uC870\uC9C1 \uC548\uC5D0\uC11C \uC790\uB9AC\uB97C \uD0A4\uC6B0\uB294 \uD750\uB984\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.035"
                ],
                source: [
                  "R2.MU.035"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uB3C4\uC6C0",
                code: "\uBB343-\uAC00",
                condition: "\uD0DC\uC591 \uC788\uC74C",
                slots: [
                  "\uC0AC4",
                  "\uC77C1"
                ],
                diagnosis: "\uC0B0\uB9E5\uC744 \uBE44\uCD94\uB294 \uD574\uAC00 \uC788\uC5B4 \uACC1\uC758 \uB3C4\uC6C0\uC73C\uB85C \uAF43\uC744 \uD53C\uC6C1\uB2C8\uB2E4.",
                prescription: "\uC717\uC0AC\uB78C\uACFC \uACC1\uC758 \uCC38\uBAA8\uC758 \uC190\uAE38\uC744 \uC798 \uC4F0\uC138\uC694. \uD070 \uB098\uBB34\uAC00 \uC788\uB2E4\uBA74 \uBC30\uC6C0\uC73C\uB85C \uC774\uB984\uC774 \uC12D\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.040"
                ],
                source: [
                  "R2.MU.040"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uB3C4\uC6C0",
                code: "\uBB343-\uB098",
                condition: "\uBD88 \uC5C6\uC74C",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC43"
                ],
                diagnosis: "\uAF43 \uD53C\uC6B8 \uBE5B\uC774 \uB2A6\uAC8C \uC624\uB294 \uB545\uC785\uB2C8\uB2E4.",
                prescription: "\uBE5B\uC774 \uC624\uAE30 \uC804\uAE4C\uC9C0\uB294 \uC870\uC9C1 \uC548\uC5D0\uC11C \uC790\uB9AC\uB97C \uD0A4\uC6B0\uC138\uC694. \uBE5B\uC774 \uC77C\uCC0D \uC654\uB2E4\uBA74 \uADF8 \uB4A4\uB85C\uB294 \uC870\uC9C1\uC5D0\uC11C \uC313\uB294 \uCABD\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.041"
                ],
                source: [
                  "R2.MU.041"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uB3C4\uC6C0",
                code: "\uBB343-\uB2E4",
                condition: "\uD0DC\uC591\uACFC \uB4F1\uBD88 \uD568\uAED8",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uC77C6"
                ],
                diagnosis: "\uD574\uC640 \uB2EC\uC774 \uD568\uAED8 \uB5A0 \uB9C8\uC74C\uC774 \uAC08\uB9AC\uACE0, \uBD88\uC774 \uC138\uC9C0\uBA74 \uBB3C\uC774 \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uAC00 \uC0AC\uC774\uB97C \uAC00\uB824 \uC8FC\uB294 \uB54C\uB97C \uAE30\uB2E4\uB9AC\uACE0, \uBD88\uC744 \uD0A4\uC6B0\uB294 \uC77C\uC740 \uD53C\uD558\uC138\uC694.",
                evidence: [
                  "R2.MU.042"
                ],
                source: [
                  "R2.MU.042"
                ]
              },
              {
                stage: 3,
                stageName: "\uD574",
                stageNote: "\uAF43\uC744 \uD53C\uC6B0\uB294 \uB3C4\uC6C0",
                code: "\uBB343-\uB77C",
                condition: "\uD0DC\uC591 + \uC544\uB798 \uAE00\uC790\uAC00 \uD55C\uB0AE",
                slots: [
                  "\uC0AC5",
                  "\uC0AC6",
                  "\uACC44"
                ],
                diagnosis: "\uD587\uBE5B\uC774 \uB108\uBB34 \uC138\uC11C \uB545\uC774 \uB9C8\uB985\uB2C8\uB2E4.",
                prescription: "\uBCF4\uC11D\uC774 \uB4E4\uC5B4\uC640 \uBB3C\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uB54C\uC5D0 \uB2E4\uC2DC \uC790\uB78D\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.071"
                ],
                source: [
                  "R2.MU.071"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB545\uC18D\uC758 \uC7AC\uC8FC",
                code: "\uBB344-\uAC00",
                condition: "\uCEE4\uB2E4\uB780 \uAE08\uB9E5 \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uB545\uC18D \uAE08\uB9E5\uC774 \uBB3C\uC744 \uB9CC\uB4E4\uACE0 \uB098\uBB34\uB97C \uB2E4\uB4EC\uC2B5\uB2C8\uB2E4.",
                prescription: "\uD070 \uB098\uBB34\uAC00 \uC788\uB2E4\uBA74 \uC9D3\uACE0 \uC138\uC6B0\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.050"
                ],
                source: [
                  "R2.MU.050"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB545\uC18D\uC758 \uC7AC\uC8FC",
                code: "\uBB344-\uB098",
                condition: "\uC138\uACF5\uB41C \uBCF4\uC11D \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uBCF4\uC11D\uC774 \uD574\uB97C \uBD88\uB7EC\uC640 \uB098\uBB34\uC5D0 \uAF43\uC744 \uD53C\uC6C1\uB2C8\uB2E4.",
                prescription: "\uACF5\uAC04\uACFC \uC0AC\uBB3C\uC744 \uC544\uB984\uB2F5\uAC8C \uAFB8\uBBF8\uB294 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.051"
                ],
                source: [
                  "R2.MU.051"
                ]
              },
              {
                stage: 4,
                stageName: "\uAE08",
                stageNote: "\uB545\uC18D\uC758 \uC7AC\uC8FC",
                code: "\uBB344-\uB2E4",
                condition: "\uAE08 + \uB098\uBB34 \uC5C6\uC74C + \uD759\uD0D5",
                slots: [
                  "\uC77C6"
                ],
                diagnosis: "\uBB342-\uB098\uC640 \uAC19\uB2E4.",
                prescription: "\uCC98\uBC29\uC740 \uB098\uBB34\uAC00 \uBA3C\uC800\uB2E4.",
                evidence: [
                  "R2.MU.052"
                ],
                source: [
                  "R2.MU.052"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uBB345-\uAC00",
                condition: "\uC0B0\uB9E5 \uB458",
                slots: [
                  "\uC0AC7",
                  "\uC0AC8",
                  "\uACC44"
                ],
                diagnosis: "\uB545\uC774 \uB458\uC774\uB77C \uB113\uC740 \uD3C9\uC57C\uAC00 \uB429\uB2C8\uB2E4. \uB450 \uAC00\uC9C0 \uC77C\uC744 \uD568\uAED8 \uBC8C\uC774\uB294 \uC77C\uC774 \uB9CE\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB113\uC5B4\uC9C4 \uB545\uB9CC\uD07C \uB098\uBB34\uB97C \uC2EC\uC73C\uC138\uC694. \uACC1\uC758 \uC0B0\uB9E5\uC744 \uC815\uB9AC\uD574 \uC8FC\uB294 \uC2DC\uB0C7\uBB3C\uC774 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uC790\uB9AC\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.060"
                ],
                source: [
                  "R2.MU.060"
                ]
              },
              {
                stage: 5,
                stageName: "\uAC19\uC740 \uD759",
                stageNote: null,
                code: "\uBB345-\uB098",
                condition: "\uC791\uC740 \uB545 \uC788\uC74C",
                slots: [
                  "\uC77C3"
                ],
                diagnosis: "\uD070 \uB545 \uACC1\uC5D0 \uC791\uC740 \uC815\uC6D0\uC774 \uBD99\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uADF8 \uC815\uC6D0\uC774 \uD070 \uB098\uBB34\uB97C \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD559\uAD50\uC640 \uBC30\uC6C0\uC5D0 \uB2FF\uC740 \uC77C\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.061"
                ],
                source: [
                  "R2.MU.061"
                ]
              },
              {
                stage: 6,
                stageName: "\uB2E4\uB978 \uAE00\uC790\uAC00 \uB9CC\uB4DC\uB294 \uAE38",
                stageNote: null,
                code: "\uBB346-\uAC00",
                condition: "\uB4F1\uBD88 + \uBB3C \uC5C6\uC74C",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                diagnosis: "\uB4F1\uBD88\uC774 \uD070\uBB3C\uC744 \uB04C\uC5B4\uC640 \uB545\uC5D0 \uB098\uBB34\uB97C \uC2EC\uC5B4 \uC90D\uB2C8\uB2E4.",
                prescription: "\uB113\uC740 \uD638\uC218\uAC00 \uB4E4\uC5B4\uC624\uB294 \uB54C\uC5D0 \uC9D3\uB294 \uC77C, \uAC74\uBB3C\uC774 \uC0DD\uAE41\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.070"
                ],
                source: [
                  "R2.MU.070"
                ]
              },
              {
                stage: 6,
                stageName: "\uB2E4\uB978 \uAE00\uC790\uAC00 \uB9CC\uB4DC\uB294 \uAE38",
                stageNote: null,
                code: "\uBB346-\uB098",
                condition: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 + \uD070 \uB098\uBB34 \uC5C6\uC74C",
                slots: [
                  "\uC7AC2",
                  "\uC77C4"
                ],
                diagnosis: "\uD070\uBB3C\uC744 \uAC00\uB454 \uB451\uC778\uB370 \uB098\uBB34\uAC00 \uC5C6\uC5B4 \uBB3C\uC774 \uB9D1\uC544\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
                prescription: "\uB098\uBB34\uB97C \uC2EC\uB294 \uC77C\uC744 \uACC1\uC5D0 \uB450\uACE0 \uC774\uB984\uC744 \uBA3C\uC800 \uC887\uC73C\uBA74 \uC7AC\uBB3C\uC774 \uB530\uB985\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.072"
                ],
                source: [
                  "R2.MU.072"
                ]
              },
              {
                stage: 6,
                stageName: "\uB2E4\uB978 \uAE00\uC790\uAC00 \uB9CC\uB4DC\uB294 \uAE38",
                stageNote: null,
                code: "\uBB346-\uB2E4",
                condition: "\uC2DC\uB0C7\uBB3C\uACFC \uBB36\uC784 + \uD070 \uB098\uBB34",
                slots: [
                  "\uC7AC2",
                  "\uC77C6"
                ],
                diagnosis: "\uB098\uBB34\uAC00 \uC790\uB784\uC218\uB85D \uC791\uC740 \uBB3C\uC774 \uB9C8\uB985\uB2C8\uB2E4. \uBC30\uC6C0\uC774 \uAE4A\uC5B4\uC9C8\uC218\uB85D \uC190\uC5D0 \uB0A8\uB294 \uAC83\uC774 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                prescription: "\uAE08\uB9E5\uC758 \uC77C\uB85C \uBB3C\uC744 \uBCF4\uD0DC\uC138\uC694. \uAE08\uB9E5\uC774 \uC5C6\uB2E4\uBA74 \uBC14\uB2E4 \uAC74\uB108\uC5D0\uC11C \uBC30\uC6B0\uBA74 \uBB3C\uC744 \uD568\uAED8 \uC5BB\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.073",
                  "R2.MU.081"
                ],
                source: [
                  "R2.MU.073",
                  "R2.MU.081"
                ]
              },
              {
                stage: 7,
                stageName: "\uD2B9\uC131 (\uB05D \uC2AC\uB86F \uD6C4\uBCF4)",
                stageNote: null,
                code: "\uBB347-\uAC00",
                condition: "\uD56D\uC0C1",
                slots: [
                  "\uB05D1",
                  "\uB05D2",
                  "\uB05D3"
                ],
                diagnosis: "\uC0B0\uB9E5\uC740 \uD55C\uBC88 \uD488\uC740 \uAC83\uC744 \uC624\uB798 \uC9C0\uD0B5\uB2C8\uB2E4. \uADF8 \uBBFF\uC74C\uC774 \uAC00\uC7A5 \uD070 \uC790\uC0B0\uC785\uB2C8\uB2E4. \uB545\uC774 \uC27D\uAC8C \uBCC0\uD558\uC9C0 \uC54A\uB4EF \uBCC0\uD654 \uC55E\uC5D0\uC11C \uB2A6\uC5B4\uC9C0\uAE30 \uC26C\uC6B0\uB2C8, \uB2E4\uC74C \uACC4\uC808\uC744 \uBBF8\uB9AC \uC900\uBE44\uD574 \uB450\uC138\uC694.",
                prescription: "\u2014",
                evidence: [
                  "R2.MU.002"
                ],
                source: [
                  "R2.MU.002"
                ],
                note: "\uD2B9\uC131 \uD45C\uB294 \uBB38\uC7A5 \uCE78 \uD558\uB098(\uB05D \uC2AC\uB86F\uC6A9). \uCC98\uBC29 \uCE78\uC774 \uC6D0\uBB38\uC5D0 \uC5C6\uC5B4 \u2014\uB85C \uD45C\uAE30. \uC6D0\uBB38 \uC2AC\uB86F \uD45C\uAE30: \uB05D1~\uB05D3."
              }
            ],
            C: [
              {
                code: "\uBB34\uC6B4-\uAC00",
                incoming: "\uD070 \uB098\uBB34",
                slots: [
                  "\uC5F04",
                  "\uC5F05",
                  "\uACC43"
                ],
                sentence: "\uD070 \uB098\uBB34\uAC00 \uC2EC\uC5B4\uC838 \uACC1\uC758 \uC790\uB9AC\uC640 \uBC30\uC6C0\uACFC \uC774\uB984\uC774 \uD568\uAED8 \uC11C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.022"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uB098",
                incoming: "\uD070 \uB098\uBB34 (\uB369\uAD74\uB9CC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB369\uAD74\uC774 \uD070 \uB098\uBB34\uB97C \uD0C0\uACE0 \uC624\uB974\uBA70 \uC77C\uC774 \uC815\uB9AC\uB418\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.023"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uB2E4",
                incoming: "\uBB3C (\uC6D0\uAD6D\uC5D0 \uBB3C \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uC7AC3",
                  "\uACC43"
                ],
                sentence: "\uBA54\uB9C8\uB978 \uB545\uC774 \uC816\uC5B4 \uC7AC\uBB3C\uC774 \uD750\uB974\uAE30 \uC2DC\uC791\uD558\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.011",
                  "R2.MU.035"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uB77C",
                incoming: "\uBD88 (\uC6D0\uAD6D\uC5D0 \uBD88 \uC5C6\uC744 \uB54C)",
                slots: [
                  "\uC7AC5",
                  "\uACC44"
                ],
                sentence: "\uAE30\uB2E4\uB9AC\uB358 \uAF43\uC774 \uD53C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.041"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uB9C8",
                incoming: "\uC138\uACF5\uB41C \uBCF4\uC11D (\uBD88\uC774 \uC140 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uB9C8\uB978 \uB545\uC5D0 \uBB3C\uC774 \uC0DD\uACA8 \uB2E4\uC2DC \uC790\uB77C\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.071"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uBC14",
                incoming: "\uB113\uACE0 \uACE0\uC694\uD55C \uD638\uC218 (\uB4F1\uBD88 \uC788\uC744 \uB54C)",
                slots: [
                  "\uC7AC5"
                ],
                sentence: "\uC9D3\uB294 \uC77C\uC774 \uC2DC\uC791\uB418\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.070"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uC0AC",
                incoming: "\uC2DC\uB0C7\uBB3C (\uC0B0\uB9E5\uC774 \uB458\uC77C \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uACC1\uC758 \uC0B0\uB9E5\uC774 \uC815\uB9AC\uB418\uBA70 \uC790\uB9AC\uAC00 \uC5F4\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.060"
                ]
              },
              {
                code: "\uBB34\uC6B4-\uC544",
                incoming: "\uC2DC\uB0C7\uBB3C\uC774\uB098 \uC0B0\uB9E5\uC774 \uB2E4\uC2DC \uC634 (\uBB36\uC5EC \uC788\uC744 \uB54C)",
                slots: [
                  "\uACC42"
                ],
                slotNote: "\uD544\uC218",
                sentence: "\uBB36\uC600\uB358 \uC790\uB9AC\uAC00 \uD480\uB9AC\uB294 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4.",
                evidence: [],
                note: "1\uCE35 \xA77"
              },
              {
                code: "\uBB34\uC6B4-\uC790",
                incoming: "\uBB3C (\uBB3C\uC774 \uC774\uBBF8 \uB9CE\uC744 \uB54C)",
                slots: [
                  "\uACC44"
                ],
                sentence: "\uBB3C\uC774 \uB118\uCCD0 \uB545\uC774 \uD750\uB824\uC9C0\uAE30 \uC26C\uC6B4 {\uC5F0\uB3C4}\uC785\uB2C8\uB2E4. \uC9C0\uD0A4\uB294 \uCABD\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4.",
                evidence: [
                  "R2.MU.031"
                ],
                note: "1\uCE35 \uD0C1\uC218"
              }
            ],
            D: [
              {
                item: "\uC2B9\uB3C4\uC9C0\uBA85\xB7\uC778\uC0C9\uD568",
                evidence: [
                  "R2.MU.060"
                ]
              },
              {
                item: "\uACF5\uBD80\uD560\uC218\uB85D \uAC00\uB09C\uD574\uC9C4\uB2E4\uB294 \uC11C\uC220",
                evidence: [
                  "R2.MU.073"
                ],
                note: "\uC6D0\uBB38"
              },
              {
                item: "\uC5EC\uC131 \uBB34\uAD00\uC758 \uBD80\uBD80 \uC778\uC5F0 \uC57D\uD654",
                evidence: [
                  "R2.MU.080"
                ]
              },
              {
                item: "\uBC30\uC6B0\uC790 \uC678\uC758 \uC774\uC131",
                evidence: [
                  "R2.MU.082"
                ]
              },
              {
                item: "\uC5EC\uC131\uC758 \uACF5\uD5C8\uC640 \uC678\uB85C\uC6C0",
                evidence: [
                  "R2.MU.083"
                ]
              },
              {
                item: "\uC5EC\uC131\uC740 \uACB0\uD63C\uD558\uBA74 \uC548\uC815\uB41C\uB2E4\uB294 \uC11C\uC220",
                evidence: [
                  "R2.MU.022"
                ],
                note: "\uD6C4\uBC18\uBD80"
              }
            ]
          }
        },
        _todo: {
          next: "\uC744~\u7678 9\uC7A5 \uC804\uC0AC (\uB2E8\uACC4 2). \uC744\uBAA9 \uC7A5\uC740 PDF page 8 \uD5E4\uB529, \uBCF8\uBB38\uC740 page 9\uBD80\uD130.",
          unresolved: "selection \uC6B0\uC120\uC21C\uC704\uC758 [\uD310\uC815 \uD544\uC694] \uD0DC\uADF8, \uAC11\uC6B4-\uC0AC(1\uCE35 \uD6C4\uBCF4(\uD574\uAC00 \uB458) [\uD310\uC815 \uD544\uC694])\uB294 \uC624\uB108 \uD310\uC815 \uB300\uAE30 \uD56D\uBAA9\uC73C\uB85C \uC6D0\uBB38 \uD45C\uAE30 \uC720\uC9C0\uD588\uB2E4."
        }
      };
    }
  });

  // entry.cjs
  var require_entry = __commonJS({
    "entry.cjs"() {
      var { computeChart } = require_engine();
      var { getLuckPillars } = require_dist2();
      var STEMS_SOURCE = require_stems().stems;
      var RELATIONS = require_relations();
      var DYNAMICS = require_dynamics();
      var REGIONS_SOURCE = require_regions();
      var SLOTS_SOURCE = require_slots();
      var KEEP_FIELDS = [
        "stemHanja",
        "stemHangul",
        "element",
        "yinyang",
        "catchphrase",
        "nature",
        "metaphor",
        "coreTraits",
        "growthNeeds",
        "careerDirections",
        "dangers",
        "unverified",
        "unverifiedSourceIds",
        "sources"
      ];
      var STEMS = STEMS_SOURCE.map((stem) => {
        const slim = {};
        for (const field of KEEP_FIELDS) slim[field] = stem[field];
        return slim;
      });
      var ELEMENT_HANJA = { \uBAA9: "\u6728", \uD654: "\u706B", \uD1A0: "\u571F", \uAE08: "\u91D1", \uC218: "\u6C34" };
      var ELEMENT_KOR = { "\u6728": "\uBAA9", "\u706B": "\uD654", "\u571F": "\uD1A0", "\u91D1": "\uAE08", "\u6C34": "\uC218" };
      var ELEMENT_ORDER = ["\u6728", "\u706B", "\u571F", "\u91D1", "\u6C34"];
      var STEM_KOR_ELEMENT = { \uAC11: "\uBAA9", \uC744: "\uBAA9", \uBCD1: "\uD654", \uC815: "\uD654", \uBB34: "\uD1A0", \uAE30: "\uD1A0", \uACBD: "\uAE08", \uC2E0: "\uAE08", \uC784: "\uC218", \uACC4: "\uC218" };
      var BRANCH_KOR_ELEMENT = { \uC790: "\uC218", \uCD95: "\uD1A0", \uC778: "\uBAA9", \uBB18: "\uBAA9", \uC9C4: "\uD1A0", \uC0AC: "\uD654", \uC624: "\uD654", \uBBF8: "\uD1A0", \uC2E0: "\uAE08", \uC720: "\uAE08", \uC220: "\uD1A0", \uD574: "\uC218" };
      var ELEMENT_VS_DAY = RELATIONS.dayStemVsElements;
      var DAY_VS_STEMS = RELATIONS.dayStemVsStems;
      var ANSIM_PATTERNS = RELATIONS.ansimPatterns.map((p) => ({
        id: p.id,
        condition: p.condition,
        mind: p.mind,
        interpretation: p.interpretation,
        unverified: p.unverified === true,
        unverifiedSourceIds: p.unverifiedSourceIds || [],
        sources: p.sources || []
      }));
      var ROLE_VOCAB = RELATIONS.meta.roleVocabulary;
      var ROLE_DISPLAY = {
        "\uBE44\uB3D9": "\uB098\uC640 \uAC19\uC740 \uC131\uC9C8\uC758 \uAE30\uC6B4",
        "\uC2DD\uC0C1": "\uD45C\uD604\uACFC \uACB0\uC2E4\uC758 \uAE30\uC6B4",
        "\uC7AC\uC131": "\uC7AC\uBB3C\xB7\uBC30\uC6B0\uC790\uC758 \uAE30\uC6B4",
        "\uAD00\uC131": "\uC9C1\uC7A5\uACFC \uC9C8\uC11C\xB7\uBA85\uC608\uC758 \uAE30\uC6B4",
        "\uC778\uC131": "\uACF5\uBD80\uC640 \uAE30\uC5B5\xB7\uC5B4\uBA38\uB2C8\uC758 \uAE30\uC6B4"
      };
      var GLOSSARY = [
        { term: "\uC77C\uAC04", meaning: "\uB098\uB97C \uB098\uD0C0\uB0B4\uB294 \uC704 \uAE00\uC790" },
        { term: "\uCC9C\uAC04", meaning: "\uC704 \uAE00\uC790(\uC2DC\uAC04\xB7\uBAA9\uD45C)" },
        { term: "\uC9C0\uC9C0", meaning: "\uC544\uB798 \uAE00\uC790(\uACF5\uAC04\xB7\uBB34\uB300)" },
        { term: "\uC6D0\uAD6D", meaning: "\uD0DC\uC5B4\uB09C \uC21C\uAC04\uC758 \uC5EC\uB35F \uAE00\uC790" },
        { term: "\uD569", meaning: "\uB450 \uAE00\uC790\uAC00 \uBB36\uC5EC \uC131\uC9C8\uC774 \uBC14\uB00C\uB294 \uBCC0\uD654" },
        { term: "\uCDA9", meaning: "\uBC29\uD5A5\uC774 \uC815\uBA74\uC73C\uB85C \uBD80\uB52A\uD788\uB294 \uBCC0\uD654" },
        { term: "\uB300\uC6B4", meaning: "10\uB144 \uB2E8\uC704 \uD750\uB984" },
        { term: "\uC9C4\uD0DC\uC591\uC2DC", meaning: "\uD587\uC591 \uC704\uCE58 \uAE30\uC900 \uC2E4\uC81C \uC2DC\uAC01" },
        { term: "\uACF5\uB9DD", meaning: "\uBE44\uC5B4 \uC788\uB294 \uAE00\uC790 \uC790\uB9AC" },
        { term: "\uBE44\uB3D9", meaning: ROLE_VOCAB["\uBE44\uB3D9"] },
        { term: "\uC2DD\uC0C1", meaning: ROLE_VOCAB["\uC2DD\uC0C1"] },
        { term: "\uC7AC\uC131", meaning: ROLE_VOCAB["\uC7AC\uC131"] },
        { term: "\uAD00\uC131", meaning: ROLE_VOCAB["\uAD00\uC131"] },
        { term: "\uC778\uC131", meaning: ROLE_VOCAB["\uC778\uC131"] },
        { term: "\uC0BC\uD569\xB7\uBC18\uD569", meaning: "\uC138 \uAE00\uC790\uAC00 \uBAA8\uC5EC(\uB450 \uAE00\uC790\uBA74 \uBC18) \uD55C \uC624\uD589\uC73C\uB85C \uD798\uC774 \uBAA8\uC774\uB294 \uBCC0\uD654" },
        { term: "\uACF5\uD611", meaning: "\uC911\uC2EC \uAE00\uC790\uAC00 \uC5C6\uC5B4 \uADF8 \uAE00\uC790\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uB300\uAE30 \uC0C1\uD0DC" }
      ];
      var STEM_COMBOS = DYNAMICS.heavenlyStemCombos.map((c) => ({
        pairing: c.pairing,
        stems: c.stems.slice(),
        resultElement: c.resultElement,
        nature: c.nature,
        transformationRule: c.transformationRule,
        pull: {
          core: c.pullPrinciple.core,
          rootRule: c.pullPrinciple.rootRule,
          weakPull: c.pullPrinciple.weakPull,
          unverified: c.pullPrinciple.unverified === true,
          unverifiedSourceIds: c.pullPrinciple.unverifiedSourceIds || []
        },
        releaseRules: c.releaseRules.slice(),
        sources: c.sources.slice()
      }));
      var COMBO_RATIO_RULES = DYNAMICS.comboRatioRules.map((r) => ({
        id: r.id,
        rule: r.rule,
        detail: r.detail,
        sources: r.sources.slice()
      }));
      var BD_SOURCE = DYNAMICS.branchDynamics;
      var BRANCH_DYN = {
        general: {
          stemChungNote: BD_SOURCE.general.stemChungNote,
          chungMeaning: BD_SOURCE.general.chungMeaning,
          triggerRule: BD_SOURCE.general.triggerRule,
          sources: BD_SOURCE.general.sources.slice()
        },
        chungs: BD_SOURCE.chungs.map((c) => ({
          group: c.group,
          members: c.group.split(""),
          label: c.label,
          meaning: c.meaning,
          unverified: c.unverified === true,
          unverifiedSourceIds: c.unverifiedSourceIds || [],
          sources: c.sources.slice()
        })),
        sanhabs: BD_SOURCE.sanhabs.map((s) => ({
          element: s.element,
          members: s.members.slice(),
          core: s.core,
          note: s.note,
          sources: s.sources.slice()
        })),
        banghabs: BD_SOURCE.banghabs.map((b) => ({
          direction: b.direction,
          season: b.season,
          element: b.element,
          members: b.members.slice(),
          core: b.core,
          sources: b.sources.slice()
        })),
        yukhabs: {
          rule: BD_SOURCE.yukhabs.rule,
          excluded: BD_SOURCE.yukhabs.excluded.slice(),
          unverified: BD_SOURCE.yukhabs.unverified === true,
          unverifiedSourceIds: BD_SOURCE.yukhabs.unverifiedSourceIds || [],
          sources: BD_SOURCE.yukhabs.sources.slice(),
          /** rule 문장이 명시하는 실사용 쌍: 寅亥는 나무, 辰酉는 쇠. */
          pairs: [
            { a: "\u5BC5", b: "\u4EA5", element: "\u6728" },
            { a: "\u8FB0", b: "\u9149", element: "\u91D1" }
          ]
        }
      };
      var PILLAR_ROLES = REGIONS_SOURCE.pillarRoles.map((r) => ({
        pillar: r.pillar,
        years: r.years,
        lifeStage: r.lifeStage,
        domain: r.domain,
        area: r.area,
        personType: r.personType,
        detail: r.detail,
        sources: r.sources.slice()
      }));
      var NO_HOUR_NOTE = {
        rule: REGIONS_SOURCE.noHourNote.rule,
        sources: REGIONS_SOURCE.noHourNote.sources.slice()
      };
      var SELECTION_ORDER_SOURCE = SLOTS_SOURCE.rules.selection.items.find(
        (item) => item && item.rule === "\uC6B0\uC120\uC21C\uC704(\uAE30\uBCF8\uAC12)"
      );
      var SAJU_SLOTS = {
        version: SLOTS_SOURCE.meta.version,
        source: SLOTS_SOURCE.meta.source,
        selectionOrder: SELECTION_ORDER_SOURCE ? SELECTION_ORDER_SOURCE.order.slice() : [],
        /* 타겟 프로파일(master-strategy §2-4 최소안): id·이름·문체 밴드·강조 섹션 순서·진입
         * 시나리오. 슬롯 문장은 프로파일마다 새로 쓰지 않고 표시 순서와 펼침만 바꾼다. */
        targetProfiles: SLOTS_SOURCE.targetProfiles || {},
        stems: {}
      };
      Object.keys(SLOTS_SOURCE.stems).forEach((hanja) => {
        const data = SLOTS_SOURCE.stems[hanja];
        SAJU_SLOTS.stems[hanja] = {
          name: data.name,
          B: (data.B || []).map((b) => ({
            stage: b.stage,
            stageName: b.stageName,
            code: b.code,
            condition: b.condition,
            slots: b.slots.slice(),
            diagnosis: b.diagnosis,
            prescription: b.prescription,
            source: b.source.slice()
          }))
        };
      });
      globalThis.SAJU_SLOTS = SAJU_SLOTS;
      var EXCESS_MIN = 3;
      function elementStatus(count) {
        if (count >= EXCESS_MIN) return "tooMuch";
        if (count === 0) return "tooLittle";
        return "balance";
      }
      function elementCounts(chart) {
        const counts = {};
        for (const k of ["year", "month", "day", "hour"]) {
          const p = chart.pillars[k];
          if (!p) continue;
          counts[p.stem.element] = (counts[p.stem.element] || 0) + 1;
          counts[p.branch.element] = (counts[p.branch.element] || 0) + 1;
        }
        return counts;
      }
      function elementStates(chart) {
        const counts = elementCounts(chart);
        const table = ELEMENT_VS_DAY[chart.dayMaster.hanja];
        const out = [];
        for (const hanja of ELEMENT_ORDER) {
          const kor = ELEMENT_KOR[hanja];
          const count = counts[kor] || 0;
          const status = elementStatus(count);
          const entry = table[hanja];
          out.push({
            element: kor,
            hanja,
            count,
            status,
            role: entry.role,
            roleText: ROLE_VOCAB[entry.role] || "",
            text: entry[status],
            isDayMaster: entry.role === "\uBE44\uB3D9",
            unverified: entry.unverified === true,
            unverifiedSourceIds: entry.unverifiedSourceIds || [],
            sources: entry.sources.slice()
          });
        }
        return out;
      }
      function stemList(chart) {
        const out = [];
        for (const k of ["year", "month", "day", "hour"]) {
          const p = chart.pillars[k];
          if (p) out.push(p.stem.hanja);
        }
        return out;
      }
      function stemCombos(chart) {
        const stems = stemList(chart);
        const dm = chart.dayMaster.hanja;
        const count = {};
        for (const s of stems) count[s] = (count[s] || 0) + 1;
        const out = [];
        for (const combo of STEM_COMBOS) {
          const a = combo.stems[0];
          const b = combo.stems[1];
          const ca = count[a] || 0;
          const cb = count[b] || 0;
          if (ca === 0 || cb === 0) continue;
          const formed = ca === 1 && cb === 1;
          out.push({
            status: formed ? "formed" : "blocked",
            combo,
            ratio: ca + ":" + cb,
            involvesDayMaster: a === dm || b === dm
          });
        }
        return out;
      }
      function branchDynamics(chart) {
        const branches = [];
        for (const k of ["year", "month", "day", "hour"]) {
          const p = chart.pillars[k];
          if (p) branches.push(p.branch.hanja);
        }
        const has = (b) => branches.indexOf(b) > -1;
        const out = [];
        for (const ch of BRANCH_DYN.chungs) {
          const present = ch.members.filter(has);
          if (present.length >= 3) {
            out.push({
              kind: "chung",
              label: ch.label + "(" + ch.group + ")",
              present: present.slice(),
              text: ch.meaning,
              unverified: ch.unverified,
              unverifiedSourceIds: ch.unverifiedSourceIds.slice(),
              sources: ch.sources.slice()
            });
          }
        }
        for (const sh of BRANCH_DYN.sanhabs) {
          const present = sh.members.filter(has);
          if (present.length === 3) {
            out.push({
              kind: "sanhap",
              label: sh.element + " \uC0BC\uD569",
              present: present.slice(),
              text: "\uC655\uC9C0 " + sh.core + "\uB97C \uD3EC\uD568\uD55C \uC0BC\uD569\uC774 \uC131\uB9BD\uD588\uB2E4. " + sh.note,
              unverified: false,
              unverifiedSourceIds: [],
              sources: sh.sources.slice()
            });
          } else if (present.length === 2) {
            const withCore = present.indexOf(sh.core) > -1;
            out.push({
              kind: withCore ? "banhap" : "gonghyeop",
              label: withCore ? sh.element + " \uBC18\uD569" : sh.element + " \uACF5\uD611",
              present: present.slice(),
              text: withCore ? "\uC655\uC9C0 " + sh.core + "\uB97C \uD3EC\uD568\uD55C \uBC18\uD569\uC774\uB2E4. " + sh.note : "\uC655\uC9C0 " + sh.core + "\uAC00 \uC5C6\uC5B4 \uC655\uC9C0\uB97C \uB04C\uC5B4\uC624\uB824\uB294 \uACF5\uD611 \uC0C1\uD0DC\uB85C \uBCF8\uB2E4.",
              unverified: false,
              unverifiedSourceIds: [],
              sources: sh.sources.slice()
            });
          }
        }
        for (const bh of BRANCH_DYN.banghabs) {
          const present = bh.members.filter(has);
          if (present.length === 3) {
            out.push({
              kind: "banghap",
              label: bh.element + " \uBC29\uD569(" + bh.direction + ")",
              present: present.slice(),
              text: bh.season + " \uBC29\uD5A5\uC758 \uC138 \uC9C0\uC9C0\uAC00 \uBAA8\uC5EC " + bh.element + " \uBC29\uD569\uC774 \uC131\uB9BD\uD588\uB2E4.",
              unverified: false,
              unverifiedSourceIds: [],
              sources: bh.sources.slice()
            });
          }
        }
        for (const pair of BRANCH_DYN.yukhabs.pairs) {
          if (has(pair.a) && has(pair.b)) {
            out.push({
              kind: "yukhap",
              label: pair.element + " \uC721\uD569",
              present: [pair.a, pair.b],
              text: BRANCH_DYN.yukhabs.rule,
              unverified: BRANCH_DYN.yukhabs.unverified,
              unverifiedSourceIds: BRANCH_DYN.yukhabs.unverifiedSourceIds.slice(),
              sources: BRANCH_DYN.yukhabs.sources.slice()
            });
          }
        }
        return out;
      }
      function matchAnsim(chart) {
        const dm = chart.dayMaster.hanja;
        const others = [];
        for (const k of ["year", "month", "hour"]) {
          const p = chart.pillars[k];
          if (p) others.push(p.stem.hanja);
        }
        const hasS = (h) => others.indexOf(h) > -1;
        const formedPairs = stemCombos(chart).filter((c) => c.status === "formed");
        const counts = elementCounts(chart);
        const byId = {
          AP01: dm === "\u4E01" && hasS("\u620A"),
          AP02: dm === "\u4E01" && hasS("\u5DF1"),
          AP03: formedPairs.some((c) => c.involvesDayMaster),
          AP04: hasS(dm),
          AP05: dm === "\u8F9B" && !hasS("\u4E59"),
          AP06: dm === "\u5E9A" && hasS("\u7532"),
          AP07: dm === "\u58EC" && !hasS("\u620A"),
          AP08: dm === "\u7678" && hasS("\u5DF1"),
          AP09: dm === "\u620A" && (counts["\uBAA9"] || 0) === 0,
          AP10: dm === "\u5DF1" && hasS("\u4E59"),
          AP11: dm === "\u7532" && hasS("\u4E19"),
          AP12: dm === "\u4E19" && hasS("\u58EC"),
          AP19: formedPairs.some((c) => c.combo.pairing === "\u4E01\u58EC"),
          AP20: formedPairs.some((c) => c.combo.pairing === "\u4E19\u8F9B"),
          AP21: formedPairs.some((c) => c.combo.pairing === "\u620A\u7678")
        };
        return ANSIM_PATTERNS.filter((p) => byId[p.id] === true);
      }
      function stemRelations(chart) {
        const table = DAY_VS_STEMS[chart.dayMaster.hanja];
        const out = [];
        const positions = [["year", "\uB144\uAC04"], ["month", "\uC6D4\uAC04"], ["hour", "\uC2DC\uAC04"]];
        for (const pair of positions) {
          const p = chart.pillars[pair[0]];
          if (!p) {
            out.push({ position: pair[1], excluded: true });
            continue;
          }
          const rel = table[p.stem.hanja];
          out.push({
            position: pair[1],
            excluded: false,
            hanja: p.stem.hanja,
            hangul: p.stem.hangul,
            image: rel.image,
            rule: rel.rule,
            sources: rel.sources.slice()
          });
        }
        return out;
      }
      function luckPillars(chart, gender) {
        if (gender !== "male" && gender !== "female") return null;
        const res = getLuckPillars({
          instantUTCms: Date.parse(chart.instantUTC),
          birthYear: Number(chart.input.dateISO.slice(0, 4)),
          monthPillar: {
            heavenlyStem: chart.monthPillar.stem.hangul,
            earthlyBranch: chart.monthPillar.branch.hangul
          },
          sajuYearStemIndex: chart.yearPillar.stem.index,
          gender,
          count: 10
        });
        const rows = res.pillars.map((p) => ({
          fromAge: p.age,
          toAge: p.age + 9,
          korean: p.korean,
          stemElement: STEM_KOR_ELEMENT[p.pillar.heavenlyStem] || null,
          branchElement: BRANCH_KOR_ELEMENT[p.pillar.earthlyBranch] || null
        }));
        const birthMs = Date.parse(chart.input.dateISO + "T00:00:00Z");
        const currentAge = Math.floor((Date.now() - birthMs) / 31556952e3);
        let currentIndex = -1;
        for (let i = 0; i < rows.length; i++) {
          if (currentAge >= rows[i].fromAge && currentAge <= rows[i].toAge) {
            currentIndex = i;
            break;
          }
        }
        return {
          forward: res.forward,
          startAge: res.startAge,
          startText: res.startYears + "\uB144 " + res.startMonths + "\uAC1C\uC6D4",
          monthPillar: chart.monthPillar.hanja,
          rows,
          currentAge,
          currentIndex
        };
      }
      function fillCheck(myCounts, partnerCounts) {
        const absent = [];
        const filled = [];
        for (const kor of ["\uBAA9", "\uD654", "\uD1A0", "\uAE08", "\uC218"]) {
          if ((myCounts[kor] || 0) === 0) {
            absent.push(kor);
            if ((partnerCounts[kor] || 0) > 0) filled.push(kor);
          }
        }
        return { absent, filled };
      }
      function dayMasterCombo(myHanja, partnerHanja) {
        for (const combo of STEM_COMBOS) {
          const a = combo.stems[0];
          const b = combo.stems[1];
          if (a === myHanja && b === partnerHanja || a === partnerHanja && b === myHanja) {
            return combo;
          }
        }
        return null;
      }
      globalThis.SajuRoot = {
        version: "0.3.1",
        computeChart,
        getLuckPillars,
        STEMS,
        ELEMENT_HANJA,
        ELEMENT_KOR,
        ELEMENT_ORDER,
        STEM_KOR_ELEMENT,
        BRANCH_KOR_ELEMENT,
        view: {
          EXCESS_MIN,
          elementStatus,
          elementCounts,
          elementStates,
          stemCombos,
          branchDynamics,
          matchAnsim,
          stemRelations,
          luckPillars,
          fillCheck,
          dayMasterCombo,
          STEM_COMBOS,
          COMBO_RATIO_RULES,
          BRANCH_DYN,
          PILLAR_ROLES,
          NO_HOUR_NOTE,
          ANSIM_PATTERNS,
          ROLE_VOCAB,
          ROLE_DISPLAY,
          GLOSSARY,
          DAY_VS_STEMS,
          ELEMENT_VS_DAY
        }
      };
    }
  });
  require_entry();
})();
/*! Bundled license information:

manseryeok/dist/index.js:
manseryeok/dist/index.js:
  (**
   * 만세력(萬歲曆) 계산 라이브러리
   * Korean Saju (Four Pillars) and Manseryeok calculation library
   *
   * @author Yoohyojun
   * @license MIT
   *)
*/
