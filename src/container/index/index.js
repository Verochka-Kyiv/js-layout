import {
  createElement,
  createHeader,
  createContainerTab,
  createMain,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

const containerTab = createContainerTab()
page.append(containerTab)

const containerMain = createMain()
page.append(containerMain)
