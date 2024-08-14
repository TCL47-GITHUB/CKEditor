import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'showBlocks',
			'findAndReplace',
			'selectAll',
			'|',
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'code',
			'removeFormat',
			'|',
			'specialCharacters',
			'horizontalLine',
			'link',
			'insertImage',
			'insertImageViaUrl',
			'mediaEmbed',
			'insertTable',
			'highlight',
			'blockQuote',
			'codeBlock',
			'htmlEmbed',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent',
			'|',
			'accessibilityHelp'
		],
		shouldNotGroupWhenFull: true
	},
	plugins: [
		AccessibilityHelp,
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		BlockQuote,
		BlockToolbar,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		Markdown,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		ShowBlocks,
		SimpleUploadAdapter,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Underline,
		Undo
	],
	balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
	blockToolbar: [
		'fontSize',
		'fontColor',
		'fontBackgroundColor',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'insertImage',
		'insertTable',
		'|',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlEmbed: {
		showPreviews: true,
	},
	htmlSupport: {
		allow: [
			// Enables all HTML features.
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true,
			},
		],
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData:
		'<h2>Trương Công Lý CKEditor 5! 🎉</h2>',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	menuBar: {
		isVisible: true
	},
	placeholder: 'Type or paste your content here!',
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	}
};
let editorInstance;
let previewWindow = null; // Biến để lưu tham chiếu đến cửa sổ preview
let isPreviewMode = false; // Biến để theo dõi trạng thái của nút toggle

// Khởi tạo CKEditor 5 với cấu hình tùy chỉnh (editorConfig nếu có)
ClassicEditor.create(document.querySelector('#editor'), editorConfig)
	.then(editor => {
		editorInstance = editor;

		// Lắng nghe sự thay đổi nội dung và cập nhật preview
		editor.model.document.on('change:data', () => {
			if (isPreviewMode && previewWindow && !previewWindow.closed) {
				updatePreviewInWindow();
			}
		});
	})
	.catch(error => {
		console.error(error);
	});

// Hàm mở nội dung trong một cửa sổ mới hoặc cập nhật nếu đã mở
function openOrUpdatePreviewWindow() {
	if (editorInstance) {
		const editorContent = editorInstance.getData();
		console.log(editorContent);
		
		if (previewWindow && !previewWindow.closed) {
			// Nếu cửa sổ đã mở, đóng nó trước khi mở lại
			previewWindow.close();
		}
		
		// Mở cửa sổ mới
		previewWindow = window.open('', '_blank');

		if (previewWindow) {
			writeContentToPreviewWindow(previewWindow, editorContent);
		}
	}
}

// Hàm ghi nội dung vào cửa sổ preview
function writeContentToPreviewWindow(window, content) {
	window.document.open();
	window.document.write(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Preview</title>
		</head>
		<body style=" max-width: 1000px; padding: 1.5rem; margin: 1rem auto; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; >
			${content}
		</body>
		</html>
	`);
	window.document.close();
}

// Hàm cập nhật nội dung trong cửa sổ preview
function updatePreviewInWindow() {
	if (previewWindow) {
		const editorContent = editorInstance.getData();
		writeContentToPreviewWindow(previewWindow, editorContent);
	}
}

// Xử lý sự kiện khi nhấn nút Preview
document.getElementById('previewBtn').onclick = function() {
	const button = document.getElementById('previewBtn');

	if (isPreviewMode && previewWindow && !previewWindow.closed) {
		// Nếu đang ở chế độ xem trước và cửa sổ còn mở, làm mới nội dung
		openOrUpdatePreviewWindow();
		button.textContent = 'Update Preview'; // Đảm bảo là 'Update Preview'
	} else {
		// Nếu không phải chế độ xem trước, mở cửa sổ mới hoặc cập nhật cửa sổ hiện có
		openOrUpdatePreviewWindow();
		button.textContent = 'Update Preview'; // Đảm bảo là 'Update Preview'
	}

	// Cập nhật trạng thái toggle
	isPreviewMode = !isPreviewMode;
};
