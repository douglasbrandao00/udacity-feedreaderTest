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
    const makeClick = () => document.querySelector('.menu-icon-link').click()
    
    const getMenu = () => document.getElementsByTagName('body')[0].className

    const isHidden = () => {
      if(getMenu()) return true
      return false
    }
    
    it('Should start hiden', () => {
      hidden = isHidden() 
      expect(hidden).toBe(true)

    })

    it('Should menu visibility swith when is clicked', () => {
      makeClick()

      expect(isHidden()).toBe(false)

      makeClick()
      expect(isHidden()).toBe(true)
    })

  })



  describe('Initial Entries', () => {
    
    beforeEach(done => loadFeed(0, done))

    it('should loadFeed insert data when called', () => {
      const entry = document.querySelectorAll('.feed .entry') 

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
