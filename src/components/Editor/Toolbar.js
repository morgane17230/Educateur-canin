import React from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import {
  mdiFormatUnderline,
  mdiFormatItalic,
  mdiFormatStrikethrough,
  mdiFormatAlignJustify,
  mdiFormatAlignCenter,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatListBulleted,
  mdiFormatBold,
  mdiFormatListNumbered,
  mdiFormatIndentDecrease,
  mdiFormatIndentIncrease,
  mdiMinus,
  mdiFormatClear,
  mdiLinkPlus,
  mdiLinkOff,
  mdiReply,
} from '@mdi/js';

// StyleSheet
import 'src/styles/editor.scss';

const Toolbar = ({
  setBold,
  setItalic,
  setUnderline,
  setStrike,
  setjustifyLeft,
  setjustifyRight,
  setOrderedList,
  setUnorderedList,
  setOutdent,
  setIndent,
  setInsertHorizontalRule,
  setUndo,
  setLink,
  setUnlink,
  setBlock,
  setCentered,
  setRemove,
  bold,
  italic,
  underline,
  strike,
  justifyLeft,
  justifyRight,
  block,
  orderedList,
  unorderedList,
  outdent,
  indent,
  insertHorizontalRule,
  undo,
  link,
  unlink,
  centered,
  remove,
}) => {
  console.log('toolbar');
  return (
    <div className="toolbar">
      <div className="line">
        <div
          className="btn"
          aria-label="bold"
          data-action="bold"
          data-tag-name="b"
          title="Bold"
          onClick={() => setBold(!bold)}
        >
          <Icon path={mdiFormatBold} color={bold ? 'teal' : ''} size={1} />
        </div>
        <div
          className="btn"
          aria-label="italic"
          data-action="italic"
          data-tag-name="i"
          title="Italic"
          onClick={(e) => {
            setItalic(!italic);
            console.log(e.currentTarget.getAttribute('data-action'));
          }}
        >
          <Icon
            path={mdiFormatItalic}
            color={italic ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="underline"
          data-action="underline"
          data-tag-name="i"
          title="Underline"
          onClick={() => setUnderline(!underline)}
        >
          <Icon
            path={mdiFormatUnderline}
            color={underline ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Strike through"
          data-action="strikeThrough"
          data-tag-name="strike"
          title="Strike through"
          onClick={() => setStrike(!strike)}
        >
          <Icon
            path={mdiFormatStrikethrough}
            color={strike ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Justify left"
          data-action="justifyLeft"
          data-style="textAlign:left"
          title="Justify left"
          data-tag-name="justify left"
          onClick={() => setjustifyLeft(!justifyLeft)}
        >
          <Icon
            path={mdiFormatAlignLeft}
            color={justifyLeft ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="justify center"
          data-action="justifyCenter"
          data-style="textAlign:center"
          title="Justify center"
          data-tag-name="Justify center"
          onClick={() => setCentered(!centered)}
        >
          <Icon
            path={mdiFormatAlignCenter}
            color={centered ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="justify right"
          data-action="justifyRight"
          data-style="textAlign:right"
          title="Justify right"
          data-tag-name="Justify Right"
          onClick={() => setjustifyRight(!justifyRight)}
        >
          <Icon
            path={mdiFormatAlignRight}
            color={justifyRight ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Justify block"
          data-action="formatBlock"
          data-style="textAlign:justify"
          title="Justify block"
          data-tag-name="formatBlock"
          onClick={() => setBlock(!block)}
        >
          <Icon
            path={mdiFormatAlignJustify}
            color={block ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Insert ordered list"
          data-tag-name="ol"
          data-action="insertOrderedList"
          title="Insert ordered list"
          onClick={() => setOrderedList(!orderedList)}
        >
          <Icon
            path={mdiFormatListBulleted}
            color={orderedList ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Insert unordered list"
          data-tag-name="ul"
          data-action="insertUnorderedList"
          title="Insert unordered list"
          onClick={() => setUnorderedList(!unorderedList)}
        >
          <Icon
            path={mdiFormatListNumbered}
            color={unorderedList ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Outdent"
          data-action="outdent"
          title="Outdent"
          onClick={() => setOutdent(!outdent)}
        >
          <Icon
            path={mdiFormatIndentDecrease}
            color={outdent ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Indent"
          data-action="indent"
          title="Indent"
          onClick={() => setIndent(!indent)}
        >
          <Icon
            path={mdiFormatIndentIncrease}
            color={indent ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Insert horizontal rule"
          data-action="insertHorizontalRule"
          title="Insert horizontal rule"
          onClick={() => setInsertHorizontalRule(!insertHorizontalRule)}
        >
          <Icon
            path={mdiMinus}
            color={insertHorizontalRule ? 'teal' : ''}
            size={1}
          />
        </div>
        <div
          className="btn"
          aria-label="Undo"
          data-action="undo"
          title="Undo"
          onClick={() => setUndo(!undo)}
        >
          <Icon path={mdiReply} color={undo ? 'teal' : ''} size={1} />
        </div>
        <div
          className="btn"
          aria-label="Remove format"
          data-action="removeFormat"
          title="Remove format"
          onClick={() => setRemove(!remove)}
        >
          <Icon path={mdiFormatClear} color={remove ? 'teal' : ''} size={1} />
        </div>
        <div
          className="btn"
          aria-label="Insert Link"
          data-action="createLink"
          title="Insert Link"
          onClick={() => setLink(!link)}
        >
          <Icon path={mdiLinkPlus} color={link ? 'teal' : ''} size={1} />
        </div>
        <div
          className="btn"
          aria-label="Unlink"
          data-action="unlink"
          data-tag-name="a"
          title="Unlink"
          onClick={() => setUnlink(!unlink)}
        >
          <Icon path={mdiLinkOff} color={unlink ? 'teal' : ''} size={1} />
        </div>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  setBold: PropTypes.func.isRequired,
  setItalic: PropTypes.func.isRequired,
  setUnderline: PropTypes.func.isRequired,
  setStrike: PropTypes.func.isRequired,
  setjustifyLeft: PropTypes.func.isRequired,
  setjustifyRight: PropTypes.func.isRequired,
  setOrderedList: PropTypes.func.isRequired,
  setUnorderedList: PropTypes.func.isRequired,
  setOutdent: PropTypes.func.isRequired,
  setIndent: PropTypes.func.isRequired,
  setInsertHorizontalRule: PropTypes.func.isRequired,
  setUndo: PropTypes.func.isRequired,
  setLink: PropTypes.func.isRequired,
  setUnlink: PropTypes.func.isRequired,
  setBlock: PropTypes.func.isRequired,
  setCentered: PropTypes.func.isRequired,
  setRemove: PropTypes.func.isRequired,
  bold: PropTypes.bool.isRequired,
  italic: PropTypes.bool.isRequired,
  underline: PropTypes.bool.isRequired,
  strike: PropTypes.bool.isRequired,
  justifyLeft: PropTypes.bool.isRequired,
  justifyRight: PropTypes.bool.isRequired,
  block: PropTypes.bool.isRequired,
  orderedList: PropTypes.bool.isRequired,
  unorderedList: PropTypes.bool.isRequired,
  outdent: PropTypes.bool.isRequired,
  indent: PropTypes.bool.isRequired,
  insertHorizontalRule: PropTypes.bool.isRequired,
  undo: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  unlink: PropTypes.bool.isRequired,
  centered: PropTypes.bool.isRequired,
  remove: PropTypes.bool.isRequired,
};

Toolbar.defaultValue = {
  /*
  bold: false,
  italic: false,
  underline: false,
  strike: false,
  justifyLeft: false,
  justifyRight: false,
  block: false,
  orderedList: false,
  unorderedList: false,
  outdent: false,
  indent: false,
  insertHorizontalRule: false,
  undo: false,
  link: false,
  unlink: false,
  centered: false,
  remove: false,
 */
};

export default Toolbar;
