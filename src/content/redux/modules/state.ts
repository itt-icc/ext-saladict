import { newWord, Word } from '@/_helpers/record-manager'
import { getDefaultConfig, DictID } from '@/app-config'
import { getDefaultProfile, ProfileIDList } from '@/app-config/profiles'
import {
  isQuickSearchPage,
  isStandalonePage,
  isOptionsPage
} from '@/_helpers/saladict'

export const initState = () => {
  const config = getDefaultConfig()
  return {
    config,
    profiles: [] as ProfileIDList,
    activeProfile: getDefaultProfile(),
    selection: {
      word: newWord() as Word | null,
      mouseX: 0,
      mouseY: 0,
      self: false,
      dbClick: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false,
      instant: false,
      force: false
    },
    /** Temporary disable Saladict */
    isTempDisabled: false,
    /** Is current panel a Quick Search Panel */
    isQSPanel: isQuickSearchPage(),
    /** is a standalone quick search panel running */
    withQSPanel: false,
    isShowWordEditor: false,
    wordEditorWord: newWord(),
    isShowBowl: false,
    isShowDictPanel: isStandalonePage() || isOptionsPage(),
    isExpandMtaBox: false,
    isExpandWaveformBox: false,
    isPinned: isQuickSearchPage(),
    /** Is current word in Notebook */
    isFav: false,
    bowlCoord: { x: 0, y: 0 },
    /** The actual coord of dict panel might be different */
    dictPanelCoord: isOptionsPage()
      ? { x: window.innerWidth - config.panelWidth - 20, y: 80 }
      : { x: 0, y: 0 },
    panelHeight: 30,
    _panelHeightCache: {
      menubar: 30,
      mtabox: 0,
      dictlist: 0,
      waveformbox: 0,
      sum: 30,
      /** independent layer */
      floatHeight: 0
    },
    panelMaxHeight: window.innerHeight * 0.8,
    /** Dicts that will be rendered to dict panel */
    renderedDicts: [] as {
      readonly id: DictID
      readonly searchStatus: 'IDLE' | 'SEARCHING' | 'FINISH'
      readonly searchResult: any
    }[],
    /** Search text */
    text: '',
    /** 0 is the oldest */
    searchHistory: [] as Word[],
    /** User can view back search history */
    historyIndex: 0,
    /** Record init coordinate on dragstart */
    dragStartCoord: null as null | { x: number; y: number },
    lastPlayAudio: null as null | { src: string; timestamp: number },
    colors: {
      brand: '#5caf9e',
      background: '#fff',
      backgroundRGB: '255, 255, 255',
      font: '#333',
      divider: '#ddd'
    }
  }
}
export default initState