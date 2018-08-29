/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
  describe('RSS Feeds', () => {
   
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    const hasUrl = obj => obj.hasOwnProperty('url')
    it('Test Feeds Url integrity', () => {
        for (const obj of allFeeds) {
          expect(hasUrl(obj)).toBe(true)
          expect(obj.name.length).not.toBe(0)
        }
      })


    const hasName = obj => obj.hasOwnProperty('name')
    it('Test Feeds name integrity', () => {
        for (const obj of allFeeds) {
          expect(hasName(obj)).toBe(true)
          expect(obj.url.length).not.toBe(0)
        }
    })

  })


  describe('The menu', () => {

    it('Should start hiden', () => {
      const menu = document.querySelector('.menu-hidden').className.split(' ')
      const isHiden = menu.includes('menu-hidden')

      expect(isHiden).toBe(true)

    })

    it('Menu should be visible when clicked', () => {
      document.querySelector('.menu-icon-link').click()
      const menu = document.querySelector('.menu-hidden')

      expect(menu).toBe(null)

      document.querySelector('.menu-icon-link').click()

    })
    
  })



  describe('Initial Entries', () => {
    
    beforeEach(done => loadFeed(0, () => done()))

    it('should loadFeed insert data when called', () => {
      const entry = document.getElementsByClassName('entry-link')

      expect(entry.length > 0).toBe(true)
    })
  })

 
  describe('New Feed Selection', () => {
    
    var before, after;

    beforeEach(done => {
      document.getElementsByClassName('entry-link').innerText = ''
      loadFeed(0,() => {
        before = document
          .querySelector('.feed')
          .innerText
        return loadFeed(1, done)
      })
    })
    it('should loadFeed insert data when called', () => {
      after = document
        .querySelector('.feed')
        .innerText

      expect(before).not.toBe(after)
    })
  })

}());
