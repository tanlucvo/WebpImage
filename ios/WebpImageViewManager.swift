import SDWebImageWebPCoder
import SDWebImage
import UIKit

@objc(WebpImageViewManager)
class WebpImageViewManager: RCTViewManager {

  override func view() -> (WebpImageView) {
    return WebpImageView()
  }
}

class WebpImageView : SDAnimatedImageView {

  @objc var uri: String = "" {
    didSet {
       let WebPCoder = SDImageWebPCoder.shared
        SDImageCodersManager.shared.addCoder(WebPCoder)
        let url = URL(string: uri)!
        self.sd_setImage(with: url)
        self.contentMode = .scaleAspectFill
    }
  }

}
