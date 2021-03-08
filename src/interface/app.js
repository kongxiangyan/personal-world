import {
  html, makeComponentWithReplay, makeStaticComponent,
  makeInfiniteLayoutC, makeFullviewContainerE, makeMiddleRowAdaptiveLayoutE
} from 'MobiusUI'
import { completeStateRD } from 'MobiusUtils'

const infiniteLayoutConfigs = {
  blocks: [{
    coord: [0, 0, 0],
    slot: makeMiddleRowAdaptiveLayoutE({
      styles: {
        container: 'size--fullview',
        'container-middle': 'overflow-y--auto scroll--bar-hidden',
        middle: html`
          <div style='padding: 12.48vh 9.99vw;'>
            <div class='mobius-text--ssl'>👋 嗨，我是孔祥岩。</div>
            <p class='mobius-text--xxl mobius-margin-y--base mobius-text-leading--xl' style='max-width: 36em;'>
              有人叫我「香烟」，是个很老的谐音梗，我并不抽烟，但也不介意被这么称呼，它代表过去的一段时光。
            </p>
            <p class='mobius-text--xxl mobius-margin-y--base mobius-text-leading--xl' style='max-width: 36em;'>
              如果你看到有人的 ID 里有「<span class='mobius-text--cigaret'>cigaret</span>」，大概率也是我。
            </p>
          </div>
        `,
        bottom: html`
          <div class='mobius-width--fullpct mobius-text--center mobius-text--xs mobius-padding-y--base'>
            <a href='https://beian.miit.gov.cn/' target='_blank' class="mobius-text--unstyled mobius-text--normal hover_mobius-text--blue">京ICP备18013805号</a>
          </div>
        `
      }

    }),
    alias: 'center'
  }]
}

const infiniteLayoutRD = makeInfiniteLayoutC({
  configs: infiniteLayoutConfigs
})

export const appTemplateRD = makeComponentWithReplay(
  [infiniteLayoutRD],
  ([infiniteLayout]) => {
    console.warn('【appTemplateRD】', infiniteLayout)
    return html`
      ${infiniteLayout}
    `
  }
)
