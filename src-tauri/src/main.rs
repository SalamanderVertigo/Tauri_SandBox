#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command(){
  println!("I invoke thee!!");
}

#[tauri::command]
async fn access_window_test(window: tauri::Window) {
   window.center();
}

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler!(my_custom_command))
  .invoke_handler(tauri::generate_handler!(access_window_test))
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
