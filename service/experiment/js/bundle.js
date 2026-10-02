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

  // entry.cjs
  var require_entry = __commonJS({
    "entry.cjs"() {
      var { computeChart } = require_engine();
      var { getLuckPillars } = require_dist2();
      var STEMS_SOURCE = require_stems().stems;
      var RELATIONS = require_relations();
      var DYNAMICS = require_dynamics();
      var REGIONS_SOURCE = require_regions();
      var KEEP_FIELDS = [
        "stemHanja",
        "stemHangul",
        "element",
        "yinyang",
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
        const rows = res.pillars.map((p) => ({ fromAge: p.age, toAge: p.age + 9, korean: p.korean }));
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
        version: "0.2.0",
        computeChart,
        getLuckPillars,
        STEMS,
        ELEMENT_HANJA,
        ELEMENT_KOR,
        ELEMENT_ORDER,
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
