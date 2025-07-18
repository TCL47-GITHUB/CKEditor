    // FIX: Replaced shorthand import with the full list of modules to prevent syntax errors.
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

      // Hàm chính để khởi tạo mọi thứ
      const initializeApp = () => {
        const savedContent = localStorage.getItem('editorContent') || '<h2>Chào mừng!</h2><p>Bắt đầu viết nội dung của bạn.</p><p id="demo"></p>';
        const savedCss = localStorage.getItem('customCss') || '';
        const savedJs = localStorage.getItem('customJs') || '';

        // FIX: Added user-requested configuration to allow all HTML content, including IDs.
        const editorConfig = {
            toolbar: { items: [ 'undo', 'redo', '|', 'sourceEditing', 'showBlocks', 'findAndReplace', 'selectAll', '|', 'heading', '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat', '|', 'specialCharacters', 'horizontalLine', 'link', 'insertImage', 'mediaEmbed', 'insertTable', 'highlight', 'blockQuote', 'codeBlock', 'htmlEmbed', '|', 'alignment', '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent', '|', 'accessibilityHelp' ], shouldNotGroupWhenFull: true },
            plugins: [ AccessibilityHelp, Alignment, Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, BlockQuote, BlockToolbar, Bold, Code, CodeBlock, Essentials, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, FullPage, GeneralHtmlSupport, Heading, Highlight, HorizontalLine, HtmlComment, HtmlEmbed, ImageBlock, ImageCaption, ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, Markdown, MediaEmbed, Paragraph, PasteFromOffice, RemoveFormat, SelectAll, ShowBlocks, SimpleUploadAdapter, SourceEditing, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, TodoList, Underline, Undo ],
            
            // --- User requested configuration starts here ---
            allowedContent: true, // Legacy option, htmlSupport is the modern equivalent
            balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
            blockToolbar: [
                'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', '|', 'link', 'insertImage', 'insertTable', '|',
                'bulletedList', 'numberedList', 'outdent', 'indent'
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
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            htmlEmbed: {
                showPreviews: true,
            },
            // This is the key configuration to allow all attributes, including 'id'
            htmlSupport: {
                allow: [
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
                    'toggleImageCaption', 'imageTextAlternative', '|',
                    'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|',
                    'resizeImage'
                ]
            },
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
            placeholder: 'Nhập hoặc dán nội dung của bạn vào đây!',
            table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
            },
            // --- End of user requested configuration ---

            initialData: savedContent,
        };

        let editorInstance;
        let previewWindow = null;
        const cssInput = document.getElementById('css-input');
        const jsInput = document.getElementById('js-input');

        cssInput.value = savedCss;
        jsInput.value = savedJs;

        // Khởi tạo CKEditor
        ClassicEditor.create(document.querySelector('#editor'), editorConfig)
          .then(editor => {
            editorInstance = editor;
            editor.model.document.on('change:data', () => {
              localStorage.setItem('editorContent', editorInstance.getData());
              updatePreviewInWindow();
            });
          })
          .catch(error => console.error(error));

        // Xử lý chuyển tab
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const tabName = button.getAttribute('data-tab');
                tabPanels.forEach(panel => {
                    panel.id === `${tabName}-panel` ? panel.classList.add('active') : panel.classList.remove('active');
                });
            });
        });
        
        // Lưu CSS/JS vào localStorage khi nhập
        cssInput.addEventListener('input', () => {
            localStorage.setItem('customCss', cssInput.value);
            updatePreviewInWindow();
        });
        jsInput.addEventListener('input', () => {
            localStorage.setItem('customJs', jsInput.value);
            updatePreviewInWindow();
        });

        // Hàm ghi nội dung đầy đủ vào cửa sổ xem trước
        function writeToPreview(windowInstance) {
            if (!windowInstance || !editorInstance) return;
            const content = editorInstance.getData();
            const css = cssInput.value;
            const js = jsInput.value;

            windowInstance.document.open();
            windowInstance.document.write(`
              <!DOCTYPE html>
              <html lang="vi">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Xem trước Nội dung</title>
                <style>
                  body { font-family: Inter, sans-serif; line-height: 1.6; max-width: 800px; margin: 2rem auto; padding: 2rem; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
                  img { max-width: 100%; height: auto; }
                </style>
                <style id="custom-style">${css}</style>
              </head>
              <body>
                <div id="content-wrapper">${content}</div>
                <script id="custom-script">
                  document.addEventListener('DOMContentLoaded', function() {
                    try {
                      ${js}
                    } catch (e) {
                      console.error("Error in custom JavaScript:", e);
                    }
                  });
                <\/script>
              </body>
              </html>
            `);
            windowInstance.document.close();
        }

        // Cập nhật cửa sổ xem trước (nếu đang mở)
        function updatePreviewInWindow() {
            if (previewWindow && !previewWindow.closed) {
                writeToPreview(previewWindow);
            }
        }

        // Mở cửa sổ xem trước
        function openPreviewWindow() {
          if (previewWindow && !previewWindow.closed) {
            previewWindow.focus();
            writeToPreview(previewWindow);
          } else {
            previewWindow = window.open('', '_blank');
            if (previewWindow) {
              writeToPreview(previewWindow);
            }
          }
        }

        document.getElementById('previewBtn').addEventListener('click', openPreviewWindow);
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
      } else {
        initializeApp();
      }