import { ExtendedVue } from "vue/types/vue";
import Vue from "vue";

type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
type Size = string | number;

export interface IconProps {
  weight: Weight;
  size: Size;
  color: string;
  mirrored: boolean;
}

export const PropValidator = {
  color: String,
  size: [String, Number],
  weight: { type: String as () => Weight },
  mirrored: Boolean,
};

export interface IconComputed {
  displayWeight: Weight;
  displaySize: Size;
  displayColor: string;
  displayMirrored: string | undefined;
}

export interface IconContext {
  contextWeight?: Weight;
  contextSize?: Size;
  contextColor?: string;
  contextMirrored?: boolean;
}

export const ContextGetter = {
  contextWeight: { from: "weight", default: "regular" },
  contextSize: { from: "size", default: "1em" },
  contextColor: { from: "color", default: "currentColor" },
  contextMirrored: { from: "mirrored", default: false },
};

export type PhActivity = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAddressBook = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAirplane = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAirplaneInFlight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAirplaneLanding = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAirplaneTakeoff = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAirplaneTilt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAirplay = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlarm = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlien = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlignBottom = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlignBottomSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignCenterHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignCenterHorizontalSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignCenterVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignCenterVerticalSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlignLeftSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlignRightSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAlignTop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAlignTopSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAnchor = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAnchorSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAndroidLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAngularLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAperture = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAppStoreLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAppWindow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAppleLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhApplePodcastsLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArchive = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArchiveBox = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArchiveTray = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArmchair = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowArcLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowArcRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowBendDoubleUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendDoubleUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendLeftDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendLeftUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendRightDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendRightUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowBendUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowCircleUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCircleUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowCounterClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowDownLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowLeftDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowLeftUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowRightDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowRightUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowElbowUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowFatLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowFatLineDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLineLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLineRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLineUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLinesDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLinesLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLinesRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatLinesUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowFatRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowFatUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowLineDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowLineDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowLineDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowLineLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowLineRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowLineUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowLineUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowLineUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowSquareDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareIn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowSquareLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareOut = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowSquareUpLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowSquareUpRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowUDownLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowUDownRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowULeftDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowULeftUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowURightDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowURightUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowUUpLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowUUpRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowUpLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowUpRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowsClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsCounterClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsDownUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowsHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsIn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowsInCardinal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsInLineHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsInLineVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsInSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsLeftRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsOut = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArrowsOutCardinal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsOutLineHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsOutLineVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsOutSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArrowsVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhArticle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArticleMedium = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhArticleNyTimes = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAsterisk = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAsteriskSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhAt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhAtom = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBaby = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBackpack = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBackspace = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBag = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBagSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBalloon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBandaids = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBank = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBarbell = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBarcode = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBarricade = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBaseball = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBasketball = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBathtub = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryCharging = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBatteryChargingVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBatteryEmpty = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryFull = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryHigh = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryLow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryMedium = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBatteryWarning = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBatteryWarningVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBed = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBeerBottle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBehanceLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBell = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBellRinging = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBellSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBellSimpleRinging = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBellSimpleSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBellSimpleZ = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBellSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBellZ = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBezierCurve = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBicycle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBinoculars = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBird = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBluetooth = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBluetoothConnected = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBluetoothSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBluetoothX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBoat = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBook = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBookBookmark = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBookOpen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBookmark = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBookmarkSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBookmarks = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBookmarksSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBooks = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBoundingBox = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBracketsAngle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBracketsCurly = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBracketsRound = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBracketsSquare = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBrain = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBrandy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBriefcase = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBriefcaseMetal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhBroadcast = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBrowser = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBrowsers = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBug = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBugBeetle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBugDroid = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBuildings = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhBus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhButterfly = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCactus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCake = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalculator = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalendar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalendarBlank = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalendarCheck = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalendarPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCalendarX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCamera = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCameraRotate = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCameraSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCampfire = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCarSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCardholder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCards = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretCircleDoubleDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleDoubleLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleDoubleRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleDoubleUp = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretCircleUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretDoubleDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretDoubleLeft = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretDoubleRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCaretDoubleUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCaretUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCat = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCellSignalFull = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCellSignalHigh = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCellSignalLow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCellSignalMedium = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCellSignalNone = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCellSignalSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCellSignalX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChalkboard = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChalkboardSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChalkboardTeacher = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChartBar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChartBarHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChartLine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChartLineUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChartPie = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChartPieSlice = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChat = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatCentered = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatCenteredDots = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatCenteredText = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatCircleDots = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatCircleText = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatDots = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatTeardrop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatTeardropDots = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatTeardropText = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChatText = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChats = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatsCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhChatsTeardrop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCheck = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCheckCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCheckSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCheckSquareOffset = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhChecks = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircleDashed = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircleHalf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircleHalfTilt = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCircleNotch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircleWavy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCircleWavyCheck = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCircleWavyQuestion = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCircleWavyWarning = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCirclesFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCirclesThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCirclesThreePlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhClipboard = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhClipboardText = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhClock = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhClockAfternoon = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhClockClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhClockCounterClockwise = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhClosedCaptioning = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCloud = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudArrowDown = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCloudArrowUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudCheck = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudFog = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudLightning = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCloudMoon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudRain = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudSnow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCloudSun = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhClub = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCoatHanger = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCode = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCodeSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCodepenLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCodesandboxLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCoffee = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCoin = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCoinVertical = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCoins = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhColumns = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCommand = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCompass = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhComputerTower = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhConfetti = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCookie = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCookingPot = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCopy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCopySimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCopyleft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCopyright = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCornersIn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCornersOut = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCpu = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCreditCard = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCrop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCrosshair = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCrosshairSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCrown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCrownSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCube = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyBtc = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyCircleDollar = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCurrencyCny = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyDollar = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCurrencyDollarSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhCurrencyEth = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyEur = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyGbp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyInr = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyJpy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyKrw = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyKzt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyNgn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCurrencyRub = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCursor = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCursorText = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhCylinder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDatabase = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDesktop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDesktopTower = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDetective = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDeviceMobile = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDeviceMobileCamera = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDeviceMobileSpeaker = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDeviceTablet = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDeviceTabletCamera = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDeviceTabletSpeaker = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDiamond = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiamondsFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceFive = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceOne = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceSix = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiceTwo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDisc = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDiscordLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDivide = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDog = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDoor = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDotsNine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDotsSix = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDotsSixVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDotsThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDotsThreeCircle = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDotsThreeCircleVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDotsThreeOutline = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDotsThreeOutlineVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDotsThreeVertical = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDownload = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDownloadSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhDribbbleLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDrop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDropHalf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhDropHalfBottom = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhEar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEarSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEgg = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEggCrack = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEject = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEjectSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEnvelope = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEnvelopeOpen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEnvelopeSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhEnvelopeSimpleOpen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhEqualizer = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEquals = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEraser = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhExam = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhExport = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEye = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEyeClosed = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEyeSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEyedropper = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhEyedropperSample = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhEyeglasses = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFaceMask = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFacebookLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFactory = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFaders = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFadersHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFastForward = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFastForwardCircle = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFigmaLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFile = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileArrowDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileArrowUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileAudio = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileCloud = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileCode = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileCss = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileCsv = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileDoc = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileDotted = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileHtml = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileImage = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileJpg = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileJs = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileJsx = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileLock = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileMinus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilePdf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilePlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilePng = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilePpt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileRs = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileSearch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileText = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileTs = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileTsx = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileVideo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileVue = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileXls = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFileZip = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFiles = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilmScript = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilmSlate = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFilmStrip = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFingerprint = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFingerprintSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFinnTheHuman = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFire = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFireSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFirstAid = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFirstAidKit = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFish = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFishSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlag = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlagBanner = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlagCheckered = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlame = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlashlight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlask = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFloppyDisk = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFloppyDiskBack = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFlowArrow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlower = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlowerLotus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFlyingSaucer = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderDotted = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderLock = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderMinus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderNotch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderNotchMinus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderNotchOpen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderNotchPlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderOpen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderSimpleDotted = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderSimpleLock = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderSimpleMinus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderSimplePlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderSimpleStar = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderSimpleUser = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhFolderStar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolderUser = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFolders = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFootball = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhForkKnife = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFrameCorners = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFramerLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFunction = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFunnel = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhFunnelSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGameController = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGasPump = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGauge = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGear = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGearSix = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGenderFemale = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGenderIntersex = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGenderMale = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGenderNeuter = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGenderNonbinary = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGenderTransgender = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGhost = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGif = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGift = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitBranch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitCommit = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitDiff = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitFork = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitMerge = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitPullRequest = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGithubLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitlabLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGitlabLogoSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGlobe = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGlobeHemisphereEast = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGlobeHemisphereWest = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGlobeSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGlobeStand = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGoogleChromeLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGoogleLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGooglePhotosLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGooglePlayLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGooglePodcastsLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhGradient = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGraduationCap = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGraph = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhGridFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHamburger = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHand = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandEye = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandFist = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandGrabbing = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandPalm = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandPointing = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandSoap = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandWaving = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandbag = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandbagSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandsClapping = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHandshake = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHardDrive = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHardDrives = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHashStraight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeadlights = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeadphones = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeadset = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeart = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeartBreak = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeartStraight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHeartStraightBreak = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHeartbeat = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHexagon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHighlighterCircle = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHorse = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHourglass = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHourglassHigh = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHourglassLow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHourglassMedium = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHourglassSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHourglassSimpleHigh = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHourglassSimpleLow = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHourglassSimpleMedium = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhHouse = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHouseLine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhHouseSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhIdentificationBadge = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhIdentificationCard = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhImage = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhImageSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhInfinity = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhInfo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhInstagramLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhIntersect = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhJeep = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKanban = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKey = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKeyReturn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKeyboard = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKeyhole = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhKnife = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLadder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLadderSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLamp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLaptop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLayout = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLeaf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLifebuoy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLightbulb = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLightbulbFilament = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLightning = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLightningSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLineSegment = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLineSegments = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLink = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLinkBreak = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLinkSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLinkSimpleBreak = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLinkSimpleHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLinkSimpleHorizontalBreak = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLinkedinLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLinuxLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhList = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhListBullets = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhListChecks = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhListDashes = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhListNumbers = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhListPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLock = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockKey = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockKeyOpen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockLaminated = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockLaminatedOpen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhLockOpen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhLockSimpleOpen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMagicWand = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMagnet = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMagnetStraight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMagnifyingGlass = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMagnifyingGlassMinus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMagnifyingGlassPlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMapPin = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMapPinLine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMapTrifold = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMarkerCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMartini = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMaskHappy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMaskSad = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMathOperations = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMedal = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMediumLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMegaphone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMegaphoneSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMessengerLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMicrophone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMicrophoneSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMicrophoneStage = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMicrosoftExcelLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMicrosoftPowerpointLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMicrosoftTeamsLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMicrosoftWordLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMinus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMinusCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMoney = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMonitor = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMonitorPlay = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMoon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMoonStars = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMountains = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMouse = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMouseSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMusicNote = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMusicNoteSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMusicNotes = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhMusicNotesPlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhMusicNotesSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNavigationArrow = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNeedle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNewspaper = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNewspaperClipping = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNote = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNoteBlank = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNotePencil = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNotebook = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNotepad = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNotification = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberCircleEight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleFive = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleFour = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleNine = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleOne = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleSeven = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleSix = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleThree = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleTwo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberCircleZero = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberEight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberFive = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberNine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberOne = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberSeven = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberSix = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberSquareEight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareFive = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareFour = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareNine = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareOne = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareSeven = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareSix = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareThree = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareTwo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberSquareZero = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhNumberThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberTwo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNumberZero = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNut = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhNyTimesLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhOctagon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhOption = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPackage = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaintBrush = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaintBrushBroad = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPaintBrushHousehold = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPaintBucket = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaintRoller = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPalette = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaperPlane = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaperPlaneRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPaperPlaneTilt = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPaperclip = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPaperclipHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhParachute = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPassword = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPath = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPause = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPauseCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPawPrint = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPeace = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPenNib = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPenNibStraight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPencil = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPencilCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPencilLine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPencilSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPencilSimpleLine = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPercent = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPerson = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPersonSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPersonSimpleRun = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPersonSimpleWalk = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPerspective = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhoneCall = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhoneDisconnect = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPhoneIncoming = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhoneOutgoing = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhoneSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhoneX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPhosphorLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPianoKeys = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPictureInPicture = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPill = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPinterestLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPinwheel = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPizza = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlaceholder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlanet = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlay = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlayCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlaylist = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlug = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlugs = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlugsConnected = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlusCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPlusMinus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPokerChip = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPoliceCar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPolygon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPopcorn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPower = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPrescription = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPresentation = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPresentationChart = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPrinter = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhProhibit = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhProhibitInset = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhProjectorScreen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhProjectorScreenChart = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPushPin = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPushPinSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPushPinSimpleSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhPushPinSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhPuzzlePiece = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhQrCode = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhQuestion = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhQueue = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhQuotes = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRadical = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRadio = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRadioButton = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRainbow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRainbowCloud = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhReceipt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRecord = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRectangle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRecycle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRedditLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRepeat = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRepeatOnce = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRewind = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRewindCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRobot = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRocket = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRocketLaunch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRows = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRss = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRssSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRug = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhRuler = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScales = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScan = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScissors = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScreencast = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScribbleLoop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhScroll = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSelection = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSelectionAll = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSelectionBackground = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSelectionForeground = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSelectionInverse = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSelectionPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSelectionSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhShare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShareNetwork = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShield = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldCheck = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldCheckered = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhShieldChevron = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldStar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShieldWarning = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShoppingBag = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShoppingBagOpen = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhShoppingCart = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShoppingCartSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhShower = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShuffle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhShuffleAngular = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhShuffleSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSidebar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSidebarSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSignIn = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSignOut = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSignpost = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSimCard = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSketchLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSkipBack = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSkipBackCircle = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSkipForward = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSkipForwardCircle = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSkull = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSlackLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSliders = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSlidersHorizontal = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSmiley = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileyBlank = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileyMeh = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileyNervous = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileySad = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileySticker = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileyWink = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSmileyXEyes = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSnapchatLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSnowflake = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSoccerBall = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSortAscending = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSortDescending = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpade = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSparkle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpeakerHigh = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpeakerLow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpeakerNone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpeakerSimpleHigh = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpeakerSimpleLow = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpeakerSimpleNone = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpeakerSimpleSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpeakerSimpleX = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSpeakerSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpeakerX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpinner = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpinnerGap = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpiral = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSpotifyLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSquareHalf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSquareHalfBottom = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSquareLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSquaresFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStack = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStackOverflowLogo = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhStackSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStamp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStar = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStarFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStarHalf = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSticker = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStop = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStopCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStorefront = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStrategy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStripeLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhStudent = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSuitcase = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSuitcaseSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhSun = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSunDim = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSunHorizon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSunglasses = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSwap = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSwatches = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSword = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhSyringe = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTShirt = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTable = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTabs = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTag = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTagChevron = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTagSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTarget = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTaxi = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTelegramLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTelevision = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTelevisionSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTennisBall = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTerminal = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTerminalWindow = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTestTube = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextAa = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextAlignCenter = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTextAlignJustify = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTextAlignLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextAlignRight = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTextBolder = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextH = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHFive = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHOne = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHSix = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextHTwo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextIndent = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextItalic = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextOutdent = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextStrikethrough = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTextT = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextUnderline = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTextbox = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhThermometer = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhThermometerCold = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhThermometerHot = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhThermometerSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhThumbsDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhThumbsUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTicket = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTiktokLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTimer = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhToggleLeft = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhToggleRight = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhToilet = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhToiletPaper = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTote = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhToteSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrademarkRegistered = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhTrafficCone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrafficSign = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrafficSignal = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrain = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrainRegional = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrainSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTranslate = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrashSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTray = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTreeEvergreen = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTreeStructure = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrendDown = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrendUp = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTriangle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTrophy = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTruck = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTwitchLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhTwitterLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUmbrella = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUmbrellaSimple = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhUpload = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUploadSimple = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUser = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserCircleGear = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhUserCircleMinus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhUserCirclePlus = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhUserFocus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserGear = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserList = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserMinus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserPlus = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserRectangle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUserSwitch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUsers = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUsersFour = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhUsersThree = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVault = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVibrate = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVideoCamera = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVideoCameraSlash = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhVignette = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVoicemail = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhVolleyball = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWall = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWallet = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWarning = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWarningCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWarningOctagon = ExtendedVue<
  Vue,
  {},
  {},
  IconComputed,
  IconProps
>;
export type PhWatch = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWaveSawtooth = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWaveSine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWaveSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWaveTriangle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWaves = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWebcam = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWhatsappLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWheelchair = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiHigh = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiLow = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiMedium = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiNone = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiSlash = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWifiX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWind = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWindowsLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWine = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhWrench = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhX = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhXCircle = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhXSquare = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhYinYang = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export type PhYoutubeLogo = ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
