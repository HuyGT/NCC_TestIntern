/* eslint-disable jsx-a11y/alt-text */
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import File from "./components/File";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <div className="content">
          <img
            className="logo"
            src="https://s3-alpha-sig.figma.com/img/be54/004d/40b2754bf32a69e46f3afbc0bc31cd28?Expires=1664755200&Signature=MZ6uoEjer9xEiXS6SRIwry~WNcxGFC-g9t0JYS19~8WkOiNNBfjqS3yS5q-SzHyn6BVpRVDW19t7OrtgHLFECMgdsCc8jiJ4sxK7SifhBjPDIV5NClewWtgYeGQC4IxI6Z2aUPaJE-dIh-~-NCnQjewiYgQ8qB2eXJasKwtTkXNZsll3bf46X5KPW4qbcj4rlmZJ0oR7R2ZdrHK1TmxOjMzMJCxG3icWfd9-tTHwZ2AnfAvMPiJOKRUMMN7OdDC9IUwyz0B9wYZFkAZ6p037i0cU3C1wdO80NEQ7CxQSWivG~1iWWFDq~NfqyelnoSMVQ2CLPVVeWvBjfLuC0k1~SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          ></img>
          <div className="card">
            <div className="card-title">Lorem ipsum dolor sit asmet?</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </div>
          </div>
          <div className="group-file">
            <File css />
            <File html />
            <File url />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
